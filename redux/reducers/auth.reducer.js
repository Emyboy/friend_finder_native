import { 
    AUTH_LOADING,
    LOGOUT,
    SET_AUTH_USER
} from '../actions';

const initialState = {
    isLoading: false,
    authData: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case AUTH_LOADING:
        return {
            ...state,
            isLoading: payload
        }
    case SET_AUTH_USER:
        return {
            ...state,
            authData: payload
        }
    case LOGOUT:
        return {
            ...state,
            authData: null
        }

    default:
        return state
    }
}
