import { POPUP } from "../actions"

const initialState = {
    popupTitle: null,
    popupMessage: null,
    showPopup: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case POPUP:
        return {
            ...state,
            popupMessage: payload.message,
            popupTitle: payload.title,
            showPopup: payload.show
        }
    default:
        return state
    }
}
