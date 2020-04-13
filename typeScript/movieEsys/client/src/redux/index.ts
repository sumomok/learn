import { createStore, applyMiddleware } from 'redux'
import { rootRoducer } from './reducer'
import createSaga from 'redux-saga';
import { rootSaga } from './saga';
import logger from 'redux-logger';
let Saga = createSaga()
export const store = createStore(rootRoducer, applyMiddleware(Saga, logger))
Saga.run(rootSaga)