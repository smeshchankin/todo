import React from 'react';

import './todo-item.css';

const TodoItem = ({ text, important }) => {
    const style = {
        color: important ? 'red' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };
    return <span className="todo-item" style={style}>{ text }</span>;
};

export default TodoItem;