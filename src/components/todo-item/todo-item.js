import React from 'react';

import './todo-item.css';

const TodoItem = ({ text, important }) => {
    const classes = "todo-item" + (important ? ' important' : '');
    return (
        <div className="item">
            <span className={classes}>{ text }</span>
            <div className="item-buttons">
                <button>X</button>
                <button>!</button>
            </div>
        </div>
    );
};

export default TodoItem;