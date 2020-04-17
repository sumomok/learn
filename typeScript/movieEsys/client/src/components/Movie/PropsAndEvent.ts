/*
 * @Author: your name
 * @Date: 2020-04-14 17:12:11
 * @LastEditTime: 2020-04-14 17:20:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \learn\typeScript\movieEsys\client\src\components\Movie\PropsAndEvent.ts
 */
import { IRootState, IMovieTableEvent } from "../../types/interface";
import { Dispatch } from "react";
import { MovieAction } from "../../redux/action/MovieAction";

export function mapStateToProps(state: IRootState) {
    return state.movie
}
export function mapDispatchToProps(dispatch: Dispatch<MovieAction>): IMovieTableEvent {
    return {
        onLoad: () => {
            dispatch({
                type: "Movie_Saga_Page", payload: null
            })
        },
        onSwitchChange: (id, newState, type) => {
            dispatch({
                type: "Change_Switch",
                payload: {
                    id: id,
                    type: type,
                    newState
                }
            })
            dispatch({
                type: "Featch_Movie_Edit",
                payload: {
                    id: id
                }
            })
        },
        onDelete: id => {
            dispatch({
                type: "movie_delete",
                payload: id
            })
            dispatch({
                type: "Featch_Movie_Delete",
                payload: {
                    id: id
                }
            })
        },
        onPageChange: condition => {
            dispatch({
                type: "movie_setCondition",
                payload: {
                    condition
                }
            })
            dispatch({
                type: "Movie_Saga_Page",
                payload: {
                    condition
                }
            })
        },
        onConditionChange: condition => {
            dispatch({
                type: "movie_setCondition",
                payload: {
                    condition
                }
            })
        }
    }
}