import { takeEvery, call, put } from 'redux-saga/effects';
import { getAllStudent } from '../../API';
import { fetchData, add } from '../action'
export default function* () {
    yield takeEvery(fetchData.toString(), fetchDataSaga)
}
function* fetchDataSaga() {
    console.log('test');
    let result = yield call([null, getAllStudent], { appkey: "demo13_1545210570249" });
    yield put(add(result));
}
