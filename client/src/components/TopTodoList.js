import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInputAction } from '../store/inputReducer';
import { fetchCreateTask } from '../asyncAction/tasks';
import { Button, TextField } from '@mui/material';
import style from './TopTodoList.module.css';

const TopTodoList = () => {
    const dispatch = useDispatch();
    const inputText = useSelector(state => state.input.text);

    const changeInputText = (text) => {
        dispatch(changeInputAction(text))
    }

    const createTask = (text) => {
        if (text.length < 10) {
            return alert('Minimum task length 10 characters')
        } else {
            const fields = {
                text: text,
                status: false
            }
            dispatch(changeInputAction(''))
            dispatch(fetchCreateTask(fields))
        }
    }

    return (
        <div>
            <h2 className={style.title}>To Do List</h2>
            <div className={style.wrapper}>
                <TextField
                    fullWidth
                    variant="outlined"
                    id="outlined-basic"
                    label="Add your new todo"
                    inputProps={{ maxLength: 255 }}
                    value={inputText}
                    onChange={e => changeInputText(e.target.value)}
                />
                <Button
                    variant="contained"
                    onClick={() => createTask(inputText)}
                >
                    Add
                </Button>
            </div>
        </div>
    );
}

export default TopTodoList;