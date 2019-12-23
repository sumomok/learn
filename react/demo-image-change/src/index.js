import React from 'react';
import ReactDOM from 'react-dom';
let number = 0;
let imgArr = [
"https://i0.hdslb.com/bfs/archive/45cd65bb142e53d8c71f709e768e198cf61c69b9.png@1100w_484h_1c_100q.png",
"https://i0.hdslb.com/bfs/sycp/creative_img/201912/911be76ff42d69b142f3009f70a297e8.jpg@1100w_484h_1c_100q.jpg",
"https://i0.hdslb.com/bfs/archive/324ff81f3a2782a4f8efac7ef64922b48cbdf783.jpg@1100w_484h_1c_100q.jpg"
];
let timer ;
const container = document.getElementById('root');
function render () {
    ReactDOM.render(<img src={imgArr[number]} alt="test"/>, container);
}
function start () {
    stop()
    timer = setInterval(()=>{
        number = (number + 1) % 3;
        render();
    },2000)
}
function stop() {
    clearInterval(timer);
}
container.onmouseenter  =()=>{
    stop();
}
container.onmouseleave = () =>{
    start()
}
render();
start();