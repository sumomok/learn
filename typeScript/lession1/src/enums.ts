type Color = "♥"| "♣"|"♦"|"♠"
type NormalCard = {
    color:Color
    mark:number
}
export type Deck = NormalCard []
export let ColorArr:Color[] = ["♥", "♣","♦","♠"]