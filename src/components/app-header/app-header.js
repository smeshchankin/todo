import React from 'react';

import './app-header.css';

const AppHeader = ({ todo, done }) => {
    return (
        <div>
            <h1>Todo List</h1>
            <span className="counters">{todo} more to do, {done} done</span>
        </div>
    );
};

export default AppHeader;
