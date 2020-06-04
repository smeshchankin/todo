import React, { Component } from 'react';

import './todo-item.css';

export default class TodoItem extends Component {
    state = {
        done: false
    };

    onClick = () => {
        this.setState({
            done: true
        });
    };

    render() {
        const { text, important } = this.props;
        const { done } = this.state;
        const classes = "todo-item" +
            (important ? ' important' : '') +
            (done ? ' done': '');

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
