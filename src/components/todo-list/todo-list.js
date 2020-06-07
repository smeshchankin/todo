import React from 'react';

import TodoItem from '../todo-item';

import './todo-list.css';

const TodoList = ({ todos, onDelete, onToggle }) => {
    const list = todos.map(({ id, ...data }) => {
        return (
            <li key={id}>
                <TodoItem
                    { ... data }
                    onDelete={ (e) => { e.stopPropagation(); onDelete(id); } }
                    onToggle={ (field) => onToggle(field, id) }
                />
            </li>
        );
    });

    return (
        <ul className="todo-list">{ list }</ul>
    );
};

export default TodoList;
