import { apply, put, takeEvery, select } from 'redux-saga/effects'
import { ISearchCondition, IMovie, IRequestResultByPage } from '../../types/interface'
import { RequestMovie } from '../../services/MovieService'
import { SaveMoviesAction, Featch_Movie_Add, Featch_Movie_Edit, Featch_Movie_FindById, DeleteActions } from '../action/MovieAction'
import { loading } from './loadingSaga'
export function* MovieSaga() {
    yield takeEvery("Movie_Saga_Page", function* () {
        yield* loading(true)
        const store = yield select()
        yield* MovieSagaFindByPage(store.condition)
    })
    yield takeEvery("Movie_Saga_Add", MovieSagaAdd)
    yield takeEvery("Featch_Movie_Edit", MovieSagaEdit)
    yield takeEvery("Featch_Movie_Delete", MovieSagaDelet)
    yield takeEvery("Featch_Movie_FindById", MovieSagaFindById)
}

function* MovieSagaFindByPage(params: ISearchCondition) {
    let result: IRequestResultByPage<IMovie> = yield apply(null, RequestMovie.findByPage, [params]);
    yield* handleResult(result)
}
function* MovieSagaAdd(action: Featch_Movie_Add) {
    let result: IRequestResultByPage<IMovie> = yield apply(null, RequestMovie.add, [action.payload.params]);
    yield* handleResult(result)
}
function* MovieSagaEdit(action: Featch_Movie_Edit) {
    let result: IRequestResultByPage<IMovie> = yield apply(null, RequestMovie.edit, [action.payload.id, action.payload.params]);
    yield* handleResult(result)
}
function* MovieSagaFindById(action: Featch_Movie_FindById) {
    let result: IRequestResultByPage<IMovie> = yield apply(null, RequestMovie.findById, [action.payload.id]);
    yield* handleResult(result)
}
function* MovieSagaDelet(action: Featch_Movie_FindById) {
    let result: IRequestResultByPage<IMovie> = yield apply(null, RequestMovie.delete, [action.payload.id]);
    yield put<DeleteActions>({
        type: "movie_delete", payload: action.payload.id
    })
    yield* handleResult(result)
}

function* handleResult(result: IRequestResultByPage<IMovie>) {
    yield put<SaveMoviesAction>({ type: "movie_save", payload: { movies: result.Data, total: result.count } })
    yield* loading(false)
}
