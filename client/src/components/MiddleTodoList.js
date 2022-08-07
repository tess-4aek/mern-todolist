import React from 'react';
import { Button, Card, Checkbox } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import style from './MiddleTodoList.module.css';
import { changeTextAction, deleteTaskAction, switchCheckboxAction } from '../store/addTaskReducer';

const MiddleTodoList = () => {

    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks);

    const switchState = (task) => {
        const switcher = task.checked === true ? false : true;
        dispatch(switchCheckboxAction(switcher, task.id))
    }

    const changeText = (text, task) => {
        dispatch(changeTextAction(text, task.id));
    }

    const deleteTask = (task) => {
        dispatch(deleteTaskAction(task.id));
    }

    return (
        <div className={style.wrapper}>
            {
                tasks.length > 0 ?

                    tasks.map(task =>
                        <Card
                            key={task.id}
                            className={style.task}
                            style={{ border: `1px solid ${task.checked === true ? 'green' : 'transparent'}` }}
                            onDoubleClick={() => changeText(prompt(), task)}
                        >
                            <Checkbox
                                onClick={() => switchState(task)}
                                checked={task.checked}
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