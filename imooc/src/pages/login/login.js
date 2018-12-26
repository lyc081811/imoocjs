import React from 'react'

import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../../redux/user.redux'

import Logo from '../../components/logo/logo'

@connect(
    state => {return state.name},
    {login}
)
class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            name: '',
            pwd: ''
        }
    }
    register () {
        this.props.history.push('/register')
    }
    handleChange(key, value) {
        this.setState({
            [key]: value
        })
    }
    handleLogin () {
        this.props.login(this.state)
    }
    render() {
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/>: null}                
                <Logo></Logo>
                <WingBlank tite={this.props.msg}>
                <p>{this.props.msg}</p>
                    {this.props.msg ? <p>{this.props.msg}</p> : ''}
                    <List>
                        <InputItem placeholder="请输入用户名" clear onChange={v=>this.handleChange('name', v)}>用户名</InputItem>
                        <InputItem type="password" placeholder="请输入密码" clear onChange={v=>this.handleChange('pwd', v)}>密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.handleLogin.bind(this)}>登录</Button>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.register.bind(this)}>注册</Button>                    
                </WingBlank>
            </div>
        )
    }
}

export default Login