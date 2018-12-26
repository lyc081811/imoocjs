import axios from 'axios'

import {getRedirectPath} from '../utils'
const REGISTER_SUC = 'REGISTER_SUC'
const ERROR_MSG = 'ERROR_MSG'
const LOGIN_SUC = 'LOGIN_SUC'
const initState = {
    redirectTo: '',
    isAuth: '',
    msg: '',
    name: '',
    pwd: '',
    type: 0
}
function errorMsg (msg) {
    return {msg, type: ERROR_MSG}
}
function registerSuc(data) {
    return {type: REGISTER_SUC, payload: data}
}
function loginSuc(data) {
    return {type: LOGIN_SUC, payload: data}
}

export function login ({name, pwd}) {
    if (!name || !pwd) {
        return errorMsg('用户名密码必填的哦')
    }
    return dispatch => {
        axios.post('/user/login', {name, pwd})
        .then(res => {
            if (res.status === 200 && res.data.code === 0) {
                dispatch(loginSuc(res.data.data))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}
export function register({name, pwd, repwd, value : type}) {
    if (!name || ! pwd || !type) {
        return errorMsg('用户名密码和职位必填哦~')
    }
    if (pwd !== repwd) {
        return errorMsg('密码和确认密码不一致~')
    }
    return dispatch => {
       axios.post('/user/register', {name, pwd, type})
        .then(res => {
            if (res.status === 200 && res.data.code === 0) {
                dispatch(registerSuc({name, pwd, type}))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        }) 
    }
    
}


export function user(state=initState, action) {
    switch(action.type) {
        case REGISTER_SUC:
            return {...state, msg: '', isAuth: true, ...action.payload, redirectTo: getRedirectPath(action.payload)}
        case ERROR_MSG:
            return {...state, msg: action.msg, isAuth: false}
        case LOGIN_SUC:
            return {...state, msg: '', isAuth: true, ...action.payload, redirectTo: getRedirectPath(action.payload)}
        default:
            return state
    }
}