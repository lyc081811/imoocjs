import React, {Component} from 'react';
import ReactDom from 'react-dom';
import CommentApp from './CommentApp';
class Clock extends Component {
    constructor() {
        super ()
        this.state = {
            date: new Date()
        }
    }
    componentDidMount () {
        console.log(this.p.clientWidth)
    }
    componentWillMount () {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }
    render () {
        return (
            <div>
                <h1>
                    <p ref={p => {this.p = p}}>现在的时间是：</p>
                    {this.state.date.toLocaleString()}
                </h1>
            </div>
        )
    }
}
class Card extends Component {
    static defaultProps = {
        title: '这是card的标题',
        content: '这是card的内容'
    }
    render () {
        return (
            <div className="card">
                <div className="card-top">{this.props.title}</div>
                <div className="card-content">{this.props.children}</div>
            </div>
        )
    }
}
// ReactDom.render(
//     <Card title="标题！！！">
//         <h2>这是标题</h2>
//         <p>这里就是内容喽！</p>
//     </Card>,
//     document.querySelector('#root')
// )
ReactDom.render(
    <CommentApp/>,
    document.querySelector('#root')
)
