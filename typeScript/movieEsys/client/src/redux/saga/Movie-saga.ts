import { apply, put, takeEvery, select } from 'redux-saga/effects'
import { ISearchCondition, IMovie, IRequestResultByPage, IRootState } from '../../types/interface'
import { RequestMovie } from '../../services/MovieService'
import { SaveMoviesAction, Featch_Movie_Add, Featch_Movie_Edit, Featch_Movie_FindById, DeleteActions } from '../action/MovieAction'
import { loading } from './loadingSaga'
export function* MovieSaga() {
    yield takeEvery("Movie_Saga_Page", function* () {
        yield* loading(true)
        const store = yield select()
        yield* MovieSagaFindByPage(store.movie.condition)
    })
    yield takeEvery("Movie_Saga_Add", MovieSagaAdd)
    yield takeEvery("Featch_Movie_Edit", function* ({ payload, type }: Featch_Movie_Edit) {
        yield* loading(true)
        const store: IRootState = yield select()
        yield* MovieSagaEdit({
            type,
            payload: {
                id: payload.id,
                params: payload.params ? payload.params : store.movie.data[store.movie.data.findIndex((it => it._id === payload.id))]
            }
        })
    })
    yield takeEvery("Featch_Movie_Delete", MovieSagaDelet)
    yield takeEvery("Featch_Movie_FindById", MovieSagaFindById)
}

function* MovieSagaFindByPage(params: ISearchCondition) {
    let result: IRequestResultByPage<IMovie> = yield apply(null, RequestMovie.findByPage, [params]);
    yield* handleResult(result)

}
function* MovieSagaAdd(action: Featch_Movie_Add) {
    yield* loading(true)
    yield apply(null, RequestMovie.add, [action.payload.params]);
}
function* MovieSagaEdit(action: Featch_Movie_Edit) {
    if (action.payload.params)
        yield apply(null, RequestMovie.edit, [action.payload.id, action.payload.params]);
}
function* MovieSagaFindById(action: Featch_Movie_FindById) {
    yield* loading(true)
    yield apply(null, RequestMovie.findById, [action.payload.id]);
}
function* MovieSagaDelet(action: Featch_Movie_FindById) {
    yield* loading(true)
    yield apply(null, RequestMovie.delete, [action.payload.id]);
    yield put<DeleteActions>({
        type: "movie_delete", payload: action.payload.id
    })
}

function* handleResult(result: IRequestResultByPage<IMovie>) {
    yield put<SaveMoviesAction>({ type: "movie_save", payload: { movies: result.Data, total: result.count } })
    yield* loading(false)
}
