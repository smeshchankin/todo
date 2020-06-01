import React from 'react';

import TodoItem from './todo-item';

const TodoList = () => {
    return (
        <ul className="todo-list">
            <li className="todo-item">Learn React</li>
            <li className="todo-item">Create React App</li>
            <li className="todo-item">Deploy App on GitHub Pages</li>
            <li><TodoItem /></li>
        </ul>
    );
};

export default TodoList;
