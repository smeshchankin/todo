import React, { Component } from 'react';

import AppHeader from '../app-header';
import FilterPanel from '../filter-panel';
import TodoList from '../todo-list';
import InsertPanel from '../insert-panel';

import './app.css';

export default class App extends Component {
    idCounter = 1;

    state = {
        list: [],
        filter: {
            text: '',
            done: null
        }
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

    onFilter = (filter) => {
        this.setState({ filter });
    };

    filter(list, filter) {
        const text = filter.text.trim().toUpperCase();
        const done = filter.done;

        return list.filter((item) => (!text || item.text.toUpperCase().includes(text))
            && (done === null || item.done === done));
    }

    render() {
        const { list, filter } = this.state;
        const done = list.filter((item) => item.done).length;
        const todo = list.length - done;
        return (
            <div className="app">
                <AppHeader todo={todo} done={done} />
                <FilterPanel onFilter={this.onFilter} />
                <TodoList
                    todos={ this.filter(list, filter) }
                    onDelete={ this.deleteItem }
                    onToggle={ this.onToggle }
                />
                <InsertPanel onInsert={ this.insertItem } />
            </div>
        );
    }
};
