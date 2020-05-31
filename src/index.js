import React from 'react';
import ReactoDOM from 'react-dom';

const TodoList = () => {
    return (
        <ul className="todo-list">
            <li className="todo-item">Learn React</li>
            <li className="todo-item">Create React App</li>
            <li className="todo-item">Deploy App on GitHub Pages</li>
        </ul>
    );
};

const AppHeder = () => {
    return <h1>Todo List</h1>;
};

const FilterPanel = () => {
    return (
        <div className='filter-group'>
            <input placeholder="Search" />
            <button>All</button>
            <button>Active</button>
            <button>Done</button>
        </div>
    );
};

const InsertPanel = () => {
    return (
        <div className="add-group">
            <input placeholder="Add item" />
            <button>+</button>
        </div>
    );
};

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
