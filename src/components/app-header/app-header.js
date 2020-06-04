import React from 'react';

import './app-header.css';

const AppHeader = () => {
    return (
        <div>
            <h1>Todo List</h1>
            <span className="counters">{1} more to do, {3} done</span>
        </div>
    );
};

export default AppHeader;
