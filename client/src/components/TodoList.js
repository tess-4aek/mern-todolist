import React from 'react';
import { Card } from '@mui/material';
import TopTodoList from './TopTodoList.js';
import BottomTodoList from './BottomTodoList.js';
import MiddleTodoList from './MiddleTodoList.js';
import style from './TodoList.module.css';

const TodoList = () => {
    return (
        <Card variant='outlined' className={style.todoBody}>
            <TopTodoList />
            <MiddleTodoList />
            <BottomTodoList />
        </Card>
    );
}

export default TodoList;