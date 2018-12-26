import React from 'react'
import Logo from '../../components/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {register} from '../../redux/user.redux'
const RadioItem = Radio.RadioItem

@connect(
    state => state.name,
    {register}
)

class Register extends React.Component {
    constructor(){
        super()
        this.state = {
            name: '',
            pwd: '',
            repwd: '',
            value: -1,
            types: [
                {value: -1, type: 'genius', title: '牛人'},
                {value: 1, type: 'boss', title: 'BOSS'}
            ]
        }
    }
    login () {
        this.props.history.push('/login')
    }
    handleChange(key, value) {
        this.setState({
            [key]: value
        })
    }
    onChange(value) {
        this.setState({value})
    }
    handleRegister() {
        this.props.register(this.state)
        console.log(this.state)
    }
    render() {
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/>: null}
                <Logo></Logo>
                <WingBlank>
                    <List>
                        <InputItem placeholder="请输入用户名" clear onChange={v=>this.handleChange('name', v)}>用户名</InputItem>
                        <InputItem type="password" placeholder="请输入密码" clear onChange={v=>this.handleChange('pwd', v)}>密码</InputItem>
                        <InputItem type="password" placeholder="请再次输入密码" clear onChange={v=>this.handleChange('repwd', v)}>确认密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <List>
                        {
                            this.state.types.map(x => {
                                return (
                                    <RadioItem checked={this.state.value === x.value} key={x.value} onChange={() => this.onChange(x.value)}>{x.title}</RadioItem>
                                )
                            })
                        }
                    </List>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.handleRegister.bind(this)}>注册</Button>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.login.bind(this)}>登录</Button>                    
                </WingBlank>
            </div>
        )
    }
}

export default Register