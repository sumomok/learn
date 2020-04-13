import { all } from 'redux-saga/effects'
import { MovieSaga } from './Movie-saga'
export const rootSaga = function* () {
    yield all([MovieSaga()]);
}




















