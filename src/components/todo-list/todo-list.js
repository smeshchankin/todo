import React from 'react';

import TodoItem from '../todo-item';

import './todo-list.css';

const TodoList = ({ todos, onDelete }) => {
    const list = todos.map(({ id, ...data }) => {
        return (
            <li key={id}>
                <TodoItem { ... data } onDelete={ () => onDelete(id) } />
            </li>
        );
    });

    return (
        <ul className="todo-list">{ list }</ul>
    );
};

export default TodoList;
