import React from 'react';

const TodoItem = ({ text, important }) => {
    const style = {
        color: important ? 'red' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };
    return <span className="todo-item" style={style}>{ text }</span>;
};

export default TodoItem;