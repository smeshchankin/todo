import React from 'react';

import './todo-item.css';

const TodoItem = ({ text, important, done, onDelete, onToggle }) => {
    const classes = "todo-item" + (important ? ' important' : '') + (done ? ' done': '');

    return (
        <div className="item" onClick={ () => onToggle('done') }>
            <span className={ classes }>{ text }</span>
            <div className="item-buttons">
                <button onClick={ onDelete }>X</button>
                <button onClick={ (e) => { e.stopPropagation(); onToggle('important'); } }>!</button>
            </div>
        </div>
    );
};

export default TodoItem;