import React, { Component } from 'react';

import './todo-item.css';

export default class TodoItem extends Component {
    state = {
        done: false,
        important: false
    };

    toggleState(fieldName) {
        this.setState((state) => {
            return {
                [fieldName]: !state[fieldName]
            }
        });
    }

    onClick = () => this.toggleState('done');

    onMarkImportant = (e) => {
        e.stopPropagation();
        this.toggleState('important');
    };

    render() {
        const { text, onDelete } = this.props;
        const { done, important } = this.state;
        const classes = "todo-item" +
            (important ? ' important' : '') +
            (done ? ' done': '');

        return (
            <div className="item" onClick={ this.onClick }>
                <span className={classes}>{ text }</span>
                <div className="item-buttons">
                    <button onClick={ onDelete }>X</button>
                    <button onClick={ this.onMarkImportant }>!</button>
                </div>
            </div>
        );
    }
};
