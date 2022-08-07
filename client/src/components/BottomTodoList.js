import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import style from './BottomTodoList.module.css';
import { clearAllAction } from '../store/addTaskReducer';

const BottomTodoList = () => {

    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks);

    const clearAll = () => {
        dispatch(clearAllAction());
    }

    const completedTasks = () => {
        let counter = 0;
        tasks.forEach(task => {
            if (task.checked === true) {
                counter += 1;
            }
        });
        return counter
    }

    return (
        <div className={style.wrapper}>
            <div>Total tasks: {tasks.length}</div>
            <div>Completed tasks: {completedTasks()}</div>
            <Button onClick={() => clearAll()} variant='contained'>Clear All</Button>
        </div>
    );
}

export default BottomTodoList;