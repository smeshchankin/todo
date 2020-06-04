import React, { Component } from 'react';

import './todo-item.css';

export default class TodoItem extends Component {
    state = {
        done: false,
        important: false
    };

    onClick = () => {
        this.setState({
            done: !this.state.done
        });
    };

    onMarkImportant = (e) => {
        e.stopPropagation();
        this.setState({
            important: !this.state.important
        });
    };

    render() {
        const { text } = this.props;
        const { done, important } = this.state;
        const classes = "todo-item" +
            (important ? ' important' : '') +
            (done ? ' done': '');

        return (
            <div className="item" onClick={ this.onClick }>
                <span className={classes}>{ text }</span>
                <div className="item-buttons">
                    <button>X</button>
                    <button onClick={ this.onMarkImportant }>!</button>
                </div>
            </div>
        );
    }
};
