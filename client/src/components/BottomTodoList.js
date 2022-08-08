import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeleteAll } from '../asyncAction/tasks';
import { Button } from '@mui/material';
import style from './BottomTodoList.module.css';

const BottomTodoList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks);

    const clearAll = () => {
        dispatch(fetchDeleteAll());
    }

    const completedTasks = () => {
        let counter = 0;
        tasks.forEach(task => {
            if (task.status === true) {
                counter += 1;
            }
        });
        return counter
    }

    return (
        <div className={style.wrapper}>
            <div>Total tasks: {tasks.length}</div>
            <div>Completed tasks: {tasks.length > 0 ? completedTasks() : 0}</div>
            <Button onClick={() => clearAll()} variant='contained'>Clear All</Button>
        </div>
    );
}

export default BottomTodoList;