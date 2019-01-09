import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import FruitMartSaga from './containers/FruitMart/saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
	rootReducer,
	applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(FruitMartSaga);
