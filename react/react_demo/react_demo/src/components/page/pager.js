import React from 'react'
import './pager.css'


export default function Pager(props) {

    const count = countPage(props);
    const PageArr = [];
    const minPageNumber = minPage(props) <= 1 ? 1 : minPage(props);
    const maxPageNumber = maxPage(minPageNumber, count, props);

    for (let i = minPageNumber; i <= maxPageNumber; i++) {
        PageArr.push(<span key={i} className={props.current === i ? "item active" : "item"} onClick={() => { toPage(i, props) }}>{i}</span>)
    }
    return (
        <>
            <span onClick={() => { toPage(1, props) }} className={props.current === 1 ? "item disable" : "item"}>首页</span>
            <span onClick={() => { toPage(props.current - 1 <= 1 ? 1 : props.current - 1, props) }} className={props.current === 1 ? "item disable" : "item"}>上一页</span>
            {/* 显示多少页 */}
            {PageArr}
            <span onClick={() => { toPage(props.current + 1 >= count ? count : props.current + 1, props) }} className={props.current === count ? "item disable" : "item"}>下一页</span>
            <span onClick={() => { toPage(count, props) }} className={props.current === count ? "item disable" : "item"}>尾页</span>
            <span className='item countPage'><span>当前第{props.current}页</span> / <span>共{count}页</span></span>
        </>
    )
}
/**
 * 总页数
 * @param {*} props 
 */
function countPage(props) {
    return Math.ceil(props.total / props.limit);
}
/**
 * 要到达的页数
 * @param {number} target 
 * @param {Object} props 
 */
function toPage(target, props) {
    if (target === props.current) {
        return

    }
    props.onChangePage && props.onChangePage(target)
}

function minPage(props) {
    return props.current - Math.floor(props.panelNumber / 2);
}
function maxPage(minNumber, count, props) {
    let max = minNumber + props.panelNumber - 1;
    if (max >= count) {
        return count
    }
    return max

}