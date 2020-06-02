import React from 'react';

import './todo-item.css';

const TodoItem = ({ text, important }) => {
    const classes = "todo-item" + (important ? ' important' : '');
    return <span className={classes}>{ text }</span>;
};

export default TodoItem;