import React, { Component } from 'react';

import AppHeader from '../app-header';
import FilterPanel from '../filter-panel';
import TodoList from '../todo-list';
import InsertPanel from '../insert-panel';

import './app.css';

export default class App extends Component {
    idCounter = 10;
    state = {
        list: [
            this.buildItem('Learn React'),
            this.buildItem('Create React App'),
            this.buildItem('Deploy App on GitHub Pages')
        ]
    };

    buildItem(text) {
        return { id: this.idCounter++, text: text };
    }

    deleteItem = (id) => {
        this.setState(({list}) => {
            const idx = list.findIndex((item) => item.id === id);
            return {
                list: [...list.slice(0, idx), ...list.slice(idx + 1)]
            };
        });
    };

    insertItem = (text) => {
        this.setState(({list}) => {
            const item = this.buildItem(text);
            return {
                list: [...list, item]
            };
        });
    }

    render() {
        return (
            <div className="app">
                <AppHeader todo="1" done="3" />
                <FilterPanel />
                <TodoList todos={ this.state.list } onDelete={ this.deleteItem } />
                <InsertPanel onInsert={ this.insertItem }/>
            </div>
        );
    }
};
