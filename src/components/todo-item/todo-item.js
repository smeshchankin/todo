import React, { Component } from 'react';

import './todo-item.css';

export default class TodoItem extends Component {
    constructor() {
        super();
        this.onClick = () => {
            console.log(`Done: ${this.props.text}`)
        };
    }

    render() {
        const { text, important } = this.props
        const classes = "todo-item" + (important ? ' important' : '');
        return (
            <div className="item" onClick={ this.onClick }>
                <span className={classes}>{ text }</span>
                <div className="item-buttons">
                    <button>X</button>
                    <button>!</button>
                </div>
            </div>
        );
    }
};
