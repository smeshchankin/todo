import React, { Component } from 'react';

import AppHeader from '../app-header';
import FilterPanel from '../filter-panel';
import TodoList from '../todo-list';
import InsertPanel from '../insert-panel';

import './app.css';

export default class App extends Component {
    state = {
        list: [
            { id: 1, text: 'Learn React', important: true },
            { id: 2, text: 'Create React App', important: true },
            { id: 3, text: 'Deploy App on GitHub Pages', important: false },
            { id: 4, text: 'Task name', important: false }
        ]
    };

    render() {
        return (
            <div className="app">
                <AppHeader todo="1" done="3" />
                <FilterPanel />
                <TodoList todos={ this.state.list } onDelete={ (id) => console.log('Delete', id) } />
                <InsertPanel />
            </div>
        );
    }
};
