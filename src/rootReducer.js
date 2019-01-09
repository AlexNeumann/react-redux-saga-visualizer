import { combineReducers } from 'redux';
import AppContainerReducer from './containers/AppContainer/reducer';
import FruitMartReducer from './containers/FruitMart/reducer';

import HistoryReducer from './containers/History/reducer';

const rootReducer = combineReducers({
	AppContainerReducer,
	FruitMartReducer,
	HistoryReducer,
});

export default rootReducer;
