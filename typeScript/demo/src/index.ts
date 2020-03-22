// enum Color {
//     heart = "♥",
//     spade = "♠",
//     club = "♣",
//     diamond = "♦",
// }
// enum Mark {
//     one = "A",
//     two = "2",
//     three = "3",
//     four = "4",
//     five = "5",
//     six = "6",
//     seven = "7",
//     eight = "8",
//     nine = "9",
//     ten = "10",
//     eleven = "J",
//     Queuer = "Q",
//     King = "K"
// }
// type NormalCard = {
//     color: Color
//     mark: Mark
// }
// type Deck = NormalCard[]
// let ColorArr: Color[] = Object.values(Color)
// function createDeck(): Deck {
//     let NormalCardArr: Deck = [];
//     let NewMark = Object.values(Mark)
//     for (let i = 0; i < NewMark.length; i++) {
//         for (let y = 0; y < ColorArr.length; y++) {
//             NormalCardArr.push({
//                 color: ColorArr[y],
//                 mark: NewMark[i]
//             })
//         }
//     }
//     return NormalCardArr
// }
// function getDeck(deckArr: Deck) {
//     for (const it of deckArr) {
//         console.log(it.mark + " " + it.color)
//     }
// }

// console.log(getDeck(createDeck()));


enum Permission {
    read = 1,
    writer = 2,
    create = 4,
    delete = 8,
}
// | 或运算符
let p = Permission.read | Permission.writer;
function hasPermission (target:Permission,per:Permission){
    // & 且运算符
    return (target & per)  ===  per;
}
//^ 异或
console.log(p ^  Permission.writer)