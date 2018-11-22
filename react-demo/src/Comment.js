import React, {Component} from 'react'
import PropTypes from 'prop-types'
class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        onDel: PropTypes.func,
        index: PropTypes.number.isRequired
    }
    constructor () {
        super()
        this.state = {
            timeString: ''
        }
    }
    componentWillMount () {
        this._updateTime()
        this._timer = setInterval(this._updateTime.bind(this), 5e3)
    }
    componentWillUnmount () {
        clearInterval(this._timer)
    }
    _getProcessedContent (content) {
        return content
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }
    _updateTime () {
        const comment = this.props.comment
        const duration = (+new Date() - comment.createdTime) / 1000
        this.setState({
            timeString: duration > 60 ? `${Math.round(duration / 60)}分钟前` : `${Math.round(Math.max(duration, 1))}秒前`
        })
    }
    handelDel () {
        if (this.props.onDel) {
            this.props.onDel(this.props.index)
        }
    }
    render () {
        return (
            <div className="comment">
                <div className="comment-name">{this.props.comment.username}:</div>
                <p style={{paddingLeft: '10px'}}>{this.props.comment.content}</p>
                <p dangerouslySetInnerHTML={{
                    __html: this._getProcessedContent(this.props.comment.content)
                }}></p>
                <span className="comment-createdtime">{this.state.timeString}</span>
                <span className="comment-delete" onClick={this.handelDel.bind(this)}>删除</span>
            </div>
        )
    }
}
export default Comment