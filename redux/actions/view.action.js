import { POPUP } from "."


export const popup = ({ show, title, message}) => dispatch => {
    dispatch({ type: POPUP, payload: { show, title, message } })
}
