import Global from '../../Global';
import { AUTH_LOADING, LOGOUT, SET_AUTH_USER } from './index'
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import SyncStorage from 'sync-storage';
import syncStorage from 'sync-storage';


export const signup = data => dispatch => {
    // dispatch({
    //     type: SET_AUTH_USER,
    //     payload: data
    // });


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
            console.log('res', res.data);
            dispatch({
                type: AUTH_LOADING,
                payload: false
            });
            dispatch({
                type: SET_AUTH_USER,
                payload: {
                    ...res.data.newUser,
                    token: res.data.token
                }
            })
            if (res.status === 200) {
            } else if (res.status === 400) {
                alert('Bad Request');
            }
        })
        .catch(err => {
            dispatch({
                type: AUTH_LOADING,
                payload: false
            });
            alert('Signup Error');
            console.log('err', err);
        })
}

export const login = data => dispatch => {
    console.log('logging in', data);
    dispatch({
        type: AUTH_LOADING,
        payload: true
    });
    axios(Global.API_URL + '/auth/login', {
        method: 'POST',
        data
    })
        .then(res => {
            console.log('res ---', res);
            dispatch({
                type: AUTH_LOADING,
                payload: false
            });
            // SyncStorage.set('authData', res.data.user)
            //     .then(data => console.log('saved', data))
            //     .then(err => console.log('saved err', err))
            // SyncStorage.set('token', res.data.token)
            //     .then(data => console.log('saved', data))
            //     .then(err => console.log('saved err', err))

            dispatch({
                type: SET_AUTH_USER,
                payload: { ...res.data.user, token: res.data.token }
            })
        })
        .catch(err => {
            // dispatch({
            //     type: AUTH_LOADING,
            //     payload: false
            // });
            // alert('Login Error')
            console.log('login error --', err)
        })

}


export const logout = () => dispatch => {
    console.log('loggin out');
    AsyncStorage.clear();
    dispatch({
        type: LOGOUT,
    })
}

