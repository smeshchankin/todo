import React, { Component } from 'react';

import AppHeader from '../app-header';
import FilterPanel from '../filter-panel';
import TodoList from '../todo-list';
import InsertPanel from '../insert-panel';

import './app.css';

export default class App extends Component {
    idCounter = 1;

    state = {
        list: [
            this.buildItem('Learn React'),
            this.buildItem('Create React App'),
            this.buildItem('Deploy App on GitHub Pages')
        ]
    };

    buildItem(text) {
        return {
            id: this.idCounter++,
            text: text,
            important: false,
            done: false
        };
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
    };

    onToggle = (id, fieldName) => {
        this.setState(({ list }) => {
            const idx = list.findIndex((item) => item.id === id);
            let item = list[idx];
            let cloneItem = { ...item, [fieldName]: !item[fieldName] };

            return {
                list: [...list.slice(0, idx), cloneItem, ...list.slice(idx + 1)]
            };
        });
    };

    render() {
        const { list } = this.state;
        const done = list.filter((item) => item.done).length;
        const todo = list.length - done;
        return (
            <div className="app">
                <AppHeader todo={todo} done={done} />
                <FilterPanel />
                <TodoList
                    todos={ list }
                    onDelete={ this.deleteItem }
                    onToggle={ this.onToggle }
                />
                <InsertPanel onInsert={ this.insertItem } />
            </div>
        );
    }
};
