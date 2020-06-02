import React from 'react';

import TodoItem from './todo-item';

const TodoList = ({ todos }) => {
    const list = todos.map((item) => {
        return <li><TodoItem { ... item } /></li>
    });

    return (
        <ul className="todo-list">{ list }</ul>
    );
};

export default TodoList;
