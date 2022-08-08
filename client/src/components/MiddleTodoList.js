import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeleteOneTask, fetchTasks, fetchUpdate } from '../asyncAction/tasks';
import { Button, Card, Checkbox } from '@mui/material';
import style from './MiddleTodoList.module.css';

const MiddleTodoList = () => {
    const [status, setStatus] = useState(null);
    const [btnStatus, setBtnStatus] = useState([true, false, false])

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
            <div className={style.filterWrapper}>
                <Button
                    variant='contained'
                    disabled={btnStatus[0]}
                    onClick={() => {
                        setStatus(null)
                        setBtnStatus([true, false, false])
                    }}
                >
                    All
                </Button>
                <Button
                    variant='contained'
                    disabled={btnStatus[1]}
                    onClick={() => {
                        setStatus(true)
                        setBtnStatus([false, true, false])
                    }}
                >
                    Completed
                </Button>
                <Button
                    variant='contained'
                    disabled={btnStatus[2]}
                    onClick={() => {
                        setStatus(false)
                        setBtnStatus([false, false, true])
                    }}
                >
                    Uncompleted
                </Button>
            </div>
            {
                tasks.length > 0 ?
                    status !== null ?
                        tasks.filter(
                            function (task) {
                                return task.status === status
                            }
                        ).map(task =>
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
                        : tasks.map(task =>
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