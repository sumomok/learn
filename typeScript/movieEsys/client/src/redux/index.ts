import { createStore, applyMiddleware } from 'redux'
import { rootRoducer } from './reducer'
import createSaga from 'redux-saga';
import { rootSaga } from './saga';
import logger from 'redux-logger';
let SagaCreate = createSaga()
export const store = createStore(rootRoducer, applyMiddleware(SagaCreate, logger))
SagaCreate.run(rootSaga)