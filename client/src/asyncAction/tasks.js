import axios from '../axios.js';
import { addTaskAction, clearAllAction, deleteTaskAction, getTasksAction, updateTaskAction } from '../store/addTaskReducer.js';

export const fetchTasks = (filter) => {
    return async dispatch => {
        const { data } = await axios.get('/');
        dispatch(getTasksAction(data, filter))
    }
}

export const fetchCreateTask = (fields) => {
    return async dispatch => {
        const { data } = await axios.post('/', {
            text: fields.text,
            status: fields.status
        })
        dispatch(addTaskAction(data))
    }
}

export const fetchDeleteOneTask = (id) => {
    return async dispatch => {
        await axios.delete(`/${id}`);
        dispatch(deleteTaskAction(id));
    }
}

export const fetchDeleteAll = () => {
    return async dispatch => {
        await axios.delete('/');
        dispatch(clearAllAction());
    }
}

export const fetchUpdate = (task) => {
    return async dispatch => {
        const { data } = await axios.put('/', {
            _id: task._id,
            text: task.text,
            status: task.status
        })
        dispatch(updateTaskAction(data))
    }
}