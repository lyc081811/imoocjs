import React from 'react'
import {connect} from 'react-redux'
import {Button, WhiteSpace} from 'antd-mobile'
import {addGUN, delGUN, addGUNAsync} from './redux/index'

@connect(
    state => ({num: state}),
    {addGUN, delGUN, addGUNAsync}
)
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>现在有机枪{this.props.num}</h1>
                <Button type="primary" onClick={this.props.addGUN}>+</Button>
                <WhiteSpace/>
                <Button type="primary" onClick={this.props.delGUN}>-</Button>
                <WhiteSpace/>
                <Button type="primary" onClick={this.props.addGUNAsync}>++</Button>
            </div>
        )
    }
}
export default App