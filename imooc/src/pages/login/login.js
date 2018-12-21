import React from 'react'

import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'

import Logo from '../../components/logo/logo'

class Login extends React.Component {
    register () {
        this.props.history.push('/register')
    }
    render() {
        return (
            <div>
                <Logo></Logo>
                <WingBlank>
                    <List>
                        <InputItem placeholder="请输入用户名" clear>用户名</InputItem>
                        <InputItem type="password" placeholder="请输入密码" clear>密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary">登录</Button>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.register.bind(this)}>注册</Button>                    
                </WingBlank>
            </div>
        )
    }
}

export default Login