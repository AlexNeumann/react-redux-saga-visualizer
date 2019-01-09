import { put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { SEND_SEARCH_FRUITS } from './constants';
import {
	actionReceiveSearchFruits,
	actionFailedSearchFruits,
} from './actions';

import { simulateSearch } from '../../assets/searchItems';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* searchItems(action) {
	try {
		const params = action.searchParams;
		// slow down request to simulate server communication
		yield delay(2000);
		const items = simulateSearch(params);
		yield put(actionReceiveSearchFruits(items));
	} catch (e) {
		yield put(actionFailedSearchFruits());
	}
}

function* FruitMartSaga() {
	yield takeLatest(SEND_SEARCH_FRUITS, searchItems);
}

export default FruitMartSaga;
