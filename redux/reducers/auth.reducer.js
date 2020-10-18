import { 
    AUTH_LOADING,
    LOGOUT,
    SET_AUTH_USER
} from '../actions';

const initialState = {
    isLoading: false,
    authData: null,
    isLoggedIn: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case AUTH_LOADING:
        return {
            ...state,
            isLoading: payload
        }
    case SET_AUTH_USER:
        console.log('auth set --', payload)
        return {
            ...state,
            authData: payload,
            isLoggedIn: true
        }
    case LOGOUT:
        return {
            ...state,
            authData: null,
            isLoggedIn: false
        }

    default:
        return state
    }
}
