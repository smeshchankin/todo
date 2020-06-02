import React from 'react';
import ReactoDOM from 'react-dom';

import AppHeder from './components/app-header';
import FilterPanel from './components/filter-panel';
import TodoList from './components/todo-list';
import InsertPanel from './components/insert-panel';

const App = () => {
    const list = [
        { text: 'Learn React', important: true },
        { text: 'Create React App', important: true },
        { text: 'Deploy App on GitHub Pages', important: false },
        { text: 'Task name', important: false }
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
