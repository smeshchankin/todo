import React from 'react';

import TodoItem from './todo-item';

const TodoList = () => {
    return (
        <ul className="todo-list">
            <li><TodoItem text="Learn React" /></li>
            <li><TodoItem text="Create React App" /></li>
            <li><TodoItem text="Deploy App on GitHub Pages" /></li>
            <li><TodoItem text="Task name" /></li>
        </ul>
    );
};

export default TodoList;
