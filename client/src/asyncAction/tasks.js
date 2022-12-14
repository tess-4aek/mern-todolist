import axios from '../axios.js';
import { addTaskAction, clearAllAction, deleteTaskAction, getTasksAction, updateTaskAction } from '../store/addTaskReducer.js';

export const fetchTasks = (filter) => async dispatch => {
    try {
        const { data } = await axios.get('/');
        dispatch(getTasksAction(data, filter));
    } catch (e) {
        console.log(e);
    }
}

export const fetchCreateTask = (fields) => async dispatch => {
    try {
        const { data } = await axios.post('/', {
            text: fields.text,
            status: fields.status
        })
        dispatch(addTaskAction(data));
    } catch (e) {
        alert(e.response.data[0].msg);
    }
}

export const fetchDeleteOneTask = (id) => async dispatch => {
    try {
        await axios.delete(`/${id}`);
        dispatch(deleteTaskAction(id));
    } catch (e) {
        console.log(e);
    }
}

export const fetchDeleteAll = () => async dispatch => {
    try {
        await axios.delete('/');
        dispatch(clearAllAction());
    } catch (e) {
        console.log(e);
    }
}

export const fetchUpdate = (task) => async dispatch => {
    try {
        const { data } = await axios.put('/', {
            _id: task._id,
            text: task.text,
            status: task.status
        })
        dispatch(updateTaskAction(data))
    } catch (e) {
        alert(e.response.data[0].msg);
    }
}