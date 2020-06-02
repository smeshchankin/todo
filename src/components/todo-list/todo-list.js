import React from 'react';

import TodoItem from '../todo-item';

import './todo-list.css';

const TodoList = ({ todos }) => {
    const list = todos.map(({ id, ...data }) => {
        return (
            <li key={id}>
                <TodoItem { ... data } />
            </li>
        );
    });

    return (
        <ul className="todo-list">{ list }</ul>
    );
};

export default TodoList;
