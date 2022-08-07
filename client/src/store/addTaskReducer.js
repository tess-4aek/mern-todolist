const defaultState = {
    tasks: []
}

const GET_TASKS = "GET_TASKS";
const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
const CLEAR_ALL = "CLEAR_ALL";
const UPDATE_TASK = "UPDATE_TASK";

export const addTaskReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_TASKS:
            // console.log(action.filter);
            // if (action.filter === 'completed') {
            //     return {
            //         ...state,
            //         tasks: state.tasks.filter(
            //             function(task) {
            //                 return task.status === true
            //             }
            //         ),
            //     }
            // } else if (action.filter === 'uncompleted') {
            //     return {
            //         ...state,
            //         tasks: state.tasks.filter(
            //             function(task) {
            //                 return task.status === false
            //             }
            //         ),
            //     }
            // } else {

            // }
            return {...state, tasks: action.payload }
        case ADD_TASK:
            return {...state, tasks: [...state.tasks, action.payload] }
        case UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(
                    task => action.payload._id === task._id ? {
                        ...task,
                        text: action.payload.text,
                        status: action.payload.status
                    } :
                    task
                )
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(
                    function(task) {
                        return task._id !== action.id
                    }
                ),
            }
        case CLEAR_ALL:
            return {...state, tasks: [] }
        default:
            return state
    }
}

export const getTasksAction = (payload, filter) => ({ type: GET_TASKS, payload, filter });
export const addTaskAction = (payload) => ({ type: ADD_TASK, payload });
export const deleteTaskAction = (id) => ({ type: DELETE_TASK, id });
export const clearAllAction = () => ({ type: CLEAR_ALL });
export const updateTaskAction = (payload) => ({ type: UPDATE_TASK, payload });