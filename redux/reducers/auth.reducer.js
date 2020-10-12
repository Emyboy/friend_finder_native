import { 
    AUTH_LOADING
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

    default:
        return state
    }
}
