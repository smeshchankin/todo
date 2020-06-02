import React from 'react';
import ReactoDOM from 'react-dom';

import AppHeder from './components/app-header';
import FilterPanel from './components/filter-panel';
import TodoList from './components/todo-list';
import InsertPanel from './components/insert-panel';

const App = () => {
    const list = [
        { id: 1, text: 'Learn React', important: true },
        { id: 2, text: 'Create React App', important: true },
        { id: 3, text: 'Deploy App on GitHub Pages', important: false },
        { id: 4, text: 'Task name', important: false }
    ];
    return (
        <div>
            <AppHeder />
            <FilterPanel />
            <TodoList todos={ list } />
            <InsertPanel />
        </div>
    );
};

const root = document.getElementById('root');
ReactoDOM.render(<App />, root);
