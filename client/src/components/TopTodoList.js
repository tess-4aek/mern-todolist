import React from 'react';
import { Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import style from './TopTodoList.module.css';
import { changeInputAction } from '../store/inputReducer';

const TopTodoList = () => {

    const dispatch = useDispatch();
    const inputText = useSelector(state => state.input.text);

    const changeInputText = (text) => {
        dispatch(changeInputAction(text))
    }

    const createTask = (text) => {
        if (text === '') {
            return
        } else {
            const newTask = { id: Date.now(), text: text, checked: false };
            dispatch({ type: "CHANGE_INPUT_TEXT", payload: '' });
            dispatch({ type: "ADD_TASK", payload: newTask });
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