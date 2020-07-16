import React, { PureComponent } from 'react'
import '../../assets/sass/keyboard.scss';
export default class keyboard extends PureComponent<Iprops> {
    state = {
        keyList: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Delete',
            'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
            'Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
            'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift',
        ],
        normalKeyList: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Delete',
            'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
            'Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
            'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift',
        ],
        shiftedKeyList: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Delete',
            'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|',
            'Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
            'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift',
        ],
        capsedKeyList: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Delete',
            'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\',
            'Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
            'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift',
        ],
        hasShifted: false,
        hasCapsed: false,
        inputDom: null,
    }
    componentDidMount() {
    }
    keyBoardClick(it: string,index:number) {
        if (it === 'Delete') {
            this.props.onDelete()
            return 
        }
        if (it === 'Tab') {
            return 'tab'
        }
        if (it === 'Caps') {
            return 'capslock'
        }
        if (it === 'Enter') {
            this.props.onEnter();
            return
        }
        if (it === 'Space') {
            return 'space'
        }
        if (it === 'Shift' && index === (this.state.keyList.length - 1)) {
            return 'shifted'
        }
        if (it === 'Caps' && this.state.hasCapsed) {
            return 'capsed'
        }
        this.props.onChange(it);
    }
    hanleKey(it: string, index: number) {
        if (it === 'Delete') {
            return 'delete'
        }
        if (it === 'Tab') {
            return 'tab'
        }
        if (it === 'Caps') {
            return 'capslock'
        }
        if (it === 'Enter') {
            return 'enter'
        }
        if (it === 'Space') {
            return 'space'
        }
        if (it === 'Shift' && index === (this.state.keyList.length - 1)) {
            return 'shifted'
        }
        if (it === 'Caps' && this.state.hasCapsed) {
            return 'capsed'
        }
        if (it === 'Shift') {
            return 'shift'
        }
        return it
    }
    render() {
        let keyboard: any[] = [];
        this.state.keyList.map((it, index) => {
            keyboard.push(
                <li key={it + index}
                    className={this.hanleKey(it, index)}
                    onClick={() => this.keyBoardClick(it,index)}>
                    {it}
                </li >)
            return ''
        })
        return (
            <ul className="keyboard">
                {keyboard}
            </ul>
        )
    }
}

interface Iprops {
    onChange: Function,
    onEnter: Function,
    onDelete:Function
}

