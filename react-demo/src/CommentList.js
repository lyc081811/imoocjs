import React, {Component} from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'
class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onDel: PropTypes.func
    }
    static defaultProps = {
        comments: []
    }

    handelDel(index) {
        if (this.props.onDel) {
            this.props.onDel(index)
        }
    }
    render () {
        return (
            <div>{
                this.props.comments.map((x, index) => 
                  <Comment onDel={this.handelDel.bind(this)} comment={x} key={index} index={index}/>
                )
            }</div>
        )
    }
}
export default CommentList