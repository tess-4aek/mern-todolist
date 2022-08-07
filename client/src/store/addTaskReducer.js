const defaultState = {
    tasks: []
}

const ADD_TASK = "ADD_TASK";
const SWITCH_CHECKBOX = "SWITCH_CHECKBOX";
const CHANGE_TEXT = "CHANGE_TEXT";
const DELETE_TASK = "DELETE_TASK";
const CLEAR_ALL = "CLEAR_ALL";

export const addTaskReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {...state, tasks: [...state.tasks, action.payload] }
        case SWITCH_CHECKBOX:
            return {
                ...state,
                tasks: state.tasks.map(
                    task => task.id === action.id ? {
                        ...task,
                        checked: action.payload
                    } :
                    task
                ),
            }
        case CHANGE_TEXT:
            return {
                ...state,
                tasks: state.tasks.map(
                    task => task.id === action.id && action.payload !== '' ? {
                        ...task,
                        text: action.payload
                    } :
                    task
                ),
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(
                    function(task) {
                        return task.id !== action.id
                    }
                ),
            }
        case CLEAR_ALL:
            return {...state, tasks: [] }
        default:
            return state
    }
}

export const addTaskAction = (payload) => ({ type: ADD_TASK, payload });
export const switchCheckboxAction = (payload, id) => ({ type: SWITCH_CHECKBOX, payload, id });
export const changeTextAction = (payload, id) => ({ type: CHANGE_TEXT, payload, id });
export const deleteTaskAction = (id) => ({ type: DELETE_TASK, id });
export const clearAllAction = () => ({ type: CLEAR_ALL });