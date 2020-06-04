import React, { PureComponent } from 'react'
import { Carousel } from 'antd'

export default class printcerity extends PureComponent {
    onChange(a: number) {
        console.log(a);
    }
    render() {
        return (
            <div style={{ height: 400 }}>
                <div className="title">
                    请选择模板
                </div>
                <Carousel afterChange={this.onChange}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>
            </div>
        )
    }
}
