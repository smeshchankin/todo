import React from 'react';

import AppHeader from '../app-header';
import FilterPanel from '../filter-panel';
import TodoList from '../todo-list';
import InsertPanel from '../insert-panel';

import './app.css';

const App = () => {
    const list = [
        { id: 1, text: 'Learn React', important: true },
        { id: 2, text: 'Create React App', important: true },
        { id: 3, text: 'Deploy App on GitHub Pages', important: false },
        { id: 4, text: 'Task name', important: false }
    ];
    return (
        <div className="app">
            <AppHeader todo="1" done="3" />
            <FilterPanel />
            <TodoList todos={ list } />
            <InsertPanel />
        </div>
    );
};

export default App;
