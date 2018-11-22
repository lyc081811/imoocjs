import React, {Component} from 'react'
import PropTypes from 'prop-types'
class CommentInput extends Component {
    static propTypes = {
        onSubmit: PropTypes.func
    }
    constructor () {
        super ()
        this.state = {
            username: '',
            content: ''
        }
    }
    componentWillMount () {
        this._getUserName()
    }
    componentDidMount () {
        this.textarea.focus()
    }
    hanleName (event) {
        this.setState({
            username: event.target.value
        })
    }
    hanleContent (e) {
        this.setState({
            content: e.target.value
        })
    }
    hanldesub () {
        if(this.props.onSubmit) {
            const {username, content} = this.state
            this.props.onSubmit({
                username,
                content,
                createdTime: +new Date()
            })
        }
        this.setState({
            content: ''
        })
    }
    _saveUserName (name) {
        localStorage.setItem('username', name)
    }
    _getUserName () {
        const name = localStorage.getItem('username')
        if(name) {
            this.setState({
                username: name
            })
        }
    }
    handleBlur (e) {
        this._saveUserName(e.target.value)
    }
    render () {
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                    <input type="text" value={this.state.username} onBlur={this.handleBlur.bind(this)} onChange={this.hanleName.bind(this)}/></div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">内容：</span>
                    <div className="comment-field-input">
                        <textarea ref={textarea => this.textarea = textarea} name="" id="" value={this.state.content} onChange={this.hanleContent.bind(this)}></textarea>
                    </div>
                </div>
                <div className="comment-field-btn">
                    <button onClick={this.hanldesub.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}
export default CommentInput