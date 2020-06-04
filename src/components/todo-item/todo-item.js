import React, { Component } from 'react';

import './todo-item.css';

export default class TodoItem extends Component {
    render() {
        const { text, important } = this.props
        const classes = "todo-item" + (important ? ' important' : '');
        return (
            <div className="item">
                <span className={classes}>{ text }</span>
                <div className="item-buttons">
                    <button>X</button>
                    <button>!</button>
                </div>
            </div>
        );
    }
};
