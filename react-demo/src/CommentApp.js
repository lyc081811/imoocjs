import React, {Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './index.css'
class CommentApp extends Component {
    constructor () {
        super()
        this.state = {
            comments: []
        }
    }
    componentWillMount () {
        this._getComments()
    }
    _getComments () {
        let comments = localStorage.getItem('comments')
        if (comments) {
            comments = JSON.parse(comments)
            this.setState({
                comments
            })
        }
    }
    _setComments (comments) {
        localStorage.setItem('comments', JSON.stringify(comments))
    }
    onSubmit (comment) {
        const comments = this.state.comments
        comments.push(comment)
        this.setState({
            comments
        })
        this._setComments(comments)
    }
    handelDelApp(index){
        let comments =  this.state.comments
        comments.splice(index, 1)
        this.setState({
            comments
        })
        this._setComments(comments)
    }
    render () {
        return(
            <div className="wrapper">
                <CommentInput onSubmit={this.onSubmit.bind(this)}/>
                <CommentList comments={this.state.comments} onDel={this.handelDelApp.bind(this)}/>
            </div>
        )
    }
}
export default CommentApp