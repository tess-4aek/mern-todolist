import React, { useEffect } from 'react';
import { Button, Card, Checkbox } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import style from './MiddleTodoList.module.css';
import { fetchDeleteOneTask, fetchTasks, fetchUpdate } from '../asyncAction/tasks';

const MiddleTodoList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks);

    useEffect(() => {
        dispatch(fetchTasks())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const switchState = (task) => {
        const switcher = task.status === true ? false : true;
        task.status = switcher;
        dispatch(fetchUpdate(task))
    }

    const changeText = (text, task) => {
        const updatedTask = {
            _id: task._id,
            text: text,
            status: task.status
        }
        dispatch(fetchUpdate(updatedTask));
    }

    const deleteTask = (task) => {
        dispatch(fetchDeleteOneTask(task._id));
    }



    return (
        <div className={style.wrapper}>
            {
                tasks.length > 0 ?

                    tasks.map(task =>
                        <Card
                            key={task._id}
                            className={style.task}
                            style={{ border: `1px solid ${task.status === true ? 'green' : 'transparent'}` }}
                            onDoubleClick={() => changeText(prompt(), task)}
                        >
                            <Checkbox
                                onClick={() => switchState(task)}
                                checked={task.status}
                            />
                            <div className={style.text}>
                                {task.text}
                            </div>
                            <Button
                                variant='contained'
                                className={style.button}
                                onClick={() => deleteTask(task)}
                            >del</Button>
                        </Card>

                    )
                    :
                    <div className={style.empty}>Task list is empty</div>
            }
        </div >
    );
}

export default MiddleTodoList;