import Global from '../../Global';
import { AUTH_LOADING, LOGOUT, SET_AUTH_USER } from './index'
import axios from 'axios';
import { AsyncStorage } from 'react-native';


export const signup = data => dispatch => {
    dispatch({
        type: AUTH_LOADING,
        payload: true
    });
    const url = Global.API_URL + '/auth';
    console.log('fetching ---', url, data);
    axios(url, {
        method: 'POST',
        data: { ...data, gender: 'male' }
    })
        .then(res => {
            console.log('res ----', res.data.newUser);
            const authData = res.data.newUser;
            const token = res.data.token;
            dispatch({
                type: AUTH_LOADING,
                payload: false
            });
            dispatch({
                type: SET_AUTH_USER,
                payload: authData
            });
            AsyncStorage.setItem('authData', authData);
            AsyncStorage.setItem('token', token);
        })
        .catch(err => {
            console.log('err ----', err);
            dispatch({
                type: AUTH_LOADING,
                payload: false
            });
        })
}

export const login = data => dispatch => {
    dispatch({
        type: AUTH_LOADING,
        payload: true
    });
    // console.log('loggin in ---', data);
    const url = Global.API_URL + '/auth/login';
    console.log('fetching ---', url, data);
    axios(url, {
        method: 'POST',
        data: data
    })
        .then(res => {
            console.log('res ---', res);
            dispatch({
                type: AUTH_LOADING,
                payload: false
            });
        })
        .catch(err => {
            console.log('err --', err);
            dispatch({
                type: AUTH_LOADING,
                payload: false
            });
        })

}


export const logout = () => dispatch => {
    console.log('loggin out')
    dispatch({ 
        type: LOGOUT,
    })
}

