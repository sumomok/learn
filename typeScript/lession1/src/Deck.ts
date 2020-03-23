import { Deck, ColorArr } from "./enums"

export function createDeck ():Deck{
    let NormalCardArr:Deck = []
    for(let i = 1;i<=13;i++){
        for(let y = 0;y<4;y++){
            NormalCardArr.push({
                color:ColorArr[y],
                mark:i
            })
        }
    }
    return NormalCardArr
}
export function getDeck(deckArr:Deck){
    for (const it of deckArr) {
        if (it.mark === 1) {
            console.log("A"+" "+it.mark)
        }
        if (it.mark ===11) {
            console.log("J"+" "+it.mark)
        }
        if (it.mark === 12) {
            console.log("Q"+" "+it.mark)
        }
        if (it.mark === 13) {
            console.log("K"+" "+it.mark)
        }
        console.log(it.color+" "+it.mark)
    }
}
 
