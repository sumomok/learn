import React, { PureComponent } from 'react'
import ChessBoard from './ChessBoard'
import { ChessType, GameState } from '../types/enum'
interface IState {
    ChessList: ChessType[],
    IsEnd: boolean,
    winner: GameState,
    NowState: ChessType.red | ChessType.block
}
export default class index extends PureComponent<{}, IState> {
    state: IState = {
        ChessList: [],
        IsEnd: true,
        winner: GameState.draw,
        NowState: ChessType.red
    }
    componentDidMount() {
        this.clearnChess()
    }
    handleStateChange(n: number) {
        if (!this.state.IsEnd && this.state.ChessList[n] === ChessType.none) {
            let newChessList = this.state.ChessList;
            newChessList[n] = this.state.NowState;
            this.getGamingState(newChessList, n)
            this.setState({
                ChessList: newChessList
            })
            if (this.state.NowState === ChessType.red) {
                this.setState({
                    NowState: ChessType.block
                })
            } else {
                this.setState({
                    NowState: ChessType.red
                })
            }
        } else {
            return;
        }

    }
    getGamingState(newChessList: ChessType[], index: number) {
        let hurMin = Math.floor(index / 3) * 3;
        let porMed = index % 3 + 3;
        if (((newChessList[hurMin] === newChessList[hurMin + 2] && newChessList[hurMin + 2] === newChessList[index])
            || (newChessList[porMed] === newChessList[porMed - 3] && newChessList[porMed] === newChessList[porMed + 3])
            || (
                (
                    (newChessList[4] === newChessList[0] && newChessList[4] === newChessList[8])
                    || (newChessList[2] === newChessList[4] && newChessList[4] === newChessList[6])
                ) && (
                    (
                        newChessList[4] && newChessList[0] && newChessList[8]
                    ) ||
                    (newChessList[2] && newChessList[4] && newChessList[6])
                )
            )
        )) {

            if (newChessList[index] === ChessType.red) {
                this.clearnChess(GameState.redwin)
            } else if (newChessList[index] === ChessType.block) {
                this.clearnChess(GameState.blackwin)
            }
        }
        if (newChessList.every(it => it > 0)) {
            this.clearnChess()
        }
    }
    clearnChess(massge?:GameState) {
        let chess: ChessType[] = []
        for (let i = 0; i < 9; i++) {
            chess[i] = ChessType.none;
        }
        this.setState({
            ChessList: chess,
            IsEnd: true,
            winner:massge?massge: GameState.draw,
            NowState: ChessType.red
        })
    }
    handleWinner() {
        let result = "胜者："
        if (this.state.winner === GameState.gaming)
            return "游戏正在进行中"
        if (this.state.winner === GameState.redwin)
            return result + '红方'
        if (this.state.winner === GameState.blackwin)
            return result + '黑方'
        if (this.state.winner === GameState.draw)
            return "游戏结束"

        return result
    }
    render() {
        return (
            <div>
                <p>{this.handleWinner()}</p>
                <ChessBoard NowState={this.state.NowState} Chesss={this.state.ChessList} onStateChange={(n) => this.handleStateChange(n)}></ChessBoard>
                <button onClick={() => {
                    this.setState({
                        IsEnd: false,
                        winner: GameState.gaming
                    })
                }}>开始游戏</button>
                <button onClick={() => { this.clearnChess() }}>清空棋盘</button>
            </div>
        )
    }
}
