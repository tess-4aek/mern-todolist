const defaultState = { text: '' }

const CHANGE_INPUT_TEXT = "CHANGE_INPUT_TEXT";

export const inputReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_TEXT:
            return {...state, text: action.payload }
        default:
            return state
    }
}

export const changeInputAction = (payload) => ({ type: CHANGE_INPUT_TEXT, payload });