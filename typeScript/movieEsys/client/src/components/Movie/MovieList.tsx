import React from 'react'
import { IMovieState } from '../../types/interface'

export const MovieList: React.FC<IMovieState> = function (props) {
    console.log(props.data)
    return (
        <div>
            list
        </div>
    )
}
