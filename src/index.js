import React from 'react';
import ReactoDOM from 'react-dom';

import AppHeder from './components/app-header';
import FilterPanel from './components/filter-panel';
import TodoList from './components/todo-list';
import InsertPanel from './components/insert-panel';

const App = () => {
    return (
        <div>
            <AppHeder />
            <FilterPanel />
            <TodoList />
            <InsertPanel />
        </div>
    );
};

const root = document.getElementById('root');
ReactoDOM.render(<App />, root);
