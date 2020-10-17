import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import viewReducer from './view.reducer';
import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    auth: authReducer,
    view: viewReducer
});

const configureStore = (settings = {}) => createStore(
    rootReducer, settings,
    applyMiddleware(thunk)
);


export default rootReducer;
