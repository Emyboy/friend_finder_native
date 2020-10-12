import Global from '../../Global';
import { AUTH_LOADING } from './index'

export const signup = data => dispatch => {
    dispatch({
        type: AUTH_LOADING,
        payload: true
    });
    fetch(Global.API_URL + '/auth', {
        method: 'POST',
        data
    })
        .then(res => res.json())
        .then(user => {
            console.log(user);
        })
        .catch(err => {
            console.log('err', err);
        })
}

