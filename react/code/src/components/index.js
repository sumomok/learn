import React, { PureComponent } from 'react'
import './index.css'
export default class CMDEditor extends PureComponent {
    state = {
        value: [['']],
        PLength: 0,
        SpanLength: 0,
    }
    componentDidMount() {
        document.getElementById('input').addEventListener('keydown', e => {
            this.handleClick(e)
        })
    }
    handleClick(e) {
        if (e.code === 'Space') {
            this.setState({
                ...this.state,
                SpanLength: this.state.SpanLength + 1
            })
        }
        if (e.code === 'Enter') {
            this.setState({
                ...this.state,
                PLength: this.state.PLength + 1,
                value: [...this.state.value, ['']]
            })
        }
        if (e.code === 'Backspace') {
            let newArr = [...this.state.value];
            let newSpanLength = +this.state.SpanLength;
            let newPLength = +this.state.PLength;
            if (newSpanLength === 0 && newSpanLength === 0 && this.state.value[newPLength][newSpanLength] === '') {
                console.log(this.state.value[newPLength][newSpanLength])
                return
            }
            if (this.state.value[newPLength][newSpanLength] === '') {
                newSpanLength = this.state.SpanLength - 1 === 0 ? 0 : this.state.SpanLength - 1;
                if (newSpanLength === 0) {
                    console.log(1)
                    newPLength = newPLength === 0 ? 0 : newPLength - 1;
                    newSpanLength = newArr[newPLength].length
                }
            }
            newArr[newPLength][newSpanLength] = newArr[newPLength][newSpanLength].substring(0, newArr[newPLength][newSpanLength].length - 1)
            this.setState({
                PLength: newPLength,
                SpanLength: newSpanLength,
                value: newArr,
            })
        }
    }
    handleClassName() {

    }
    render() {
        let DOMArr = []
        for (let p = 0; p < this.state.value.length; p++) {
            let Span = []
            for (let s = 0; s < this.state.value[p].length; s++) {
                Span[s] = (
                    <span key={'s' + s}>{
                        this.state.value[p][s]
                    }</span>
                )
            }
            DOMArr[p] = (
                <>
                    {p === 0 ? null : <br key={'br' + p} />}
                    <p key={'p' + p}>
                        {Span}
                    </p>
                </>
            )
        }
        return (
            <div>
                {DOMArr}
                <textarea style={
                    {
                        width: 16,
                        height: 16,
                        fontSize: 16,
                        marginTop: 3
                    }
                } onInput={e => {
                    let newArr = [...this.state.value];
                    if (newArr[this.state.PLength][this.state.SpanLength] === undefined) {
                        newArr[this.state.PLength][this.state.SpanLength] = ''
                    }
                    newArr[this.state.PLength][this.state.SpanLength] = '' + this.state.value[this.state.PLength][this.state.SpanLength] + e.target.value
                    this.setState({
                        ...this.state,
                        value: newArr
                    })
                    e.target.value = ''
                }} name="" id="input" cols="1" rows="1"></textarea>
            </div>
        )
    }
}