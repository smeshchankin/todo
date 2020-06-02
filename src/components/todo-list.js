import React from 'react';

import TodoItem from './todo-item';

const TodoList = ({ todos }) => {
    const list = todos.map((item) => {
        return <li><TodoItem text={ item.text } important={ item.important } /></li>
    });

    return (
        <ul className="todo-list">{ list }</ul>
    );
};

export default TodoList;
