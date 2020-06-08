import React, { Component } from 'react';

import './insert-panel.css';

export default class InsertPanel extends Component {
    state = { task: '' };

    onChange = (e) => {
        this.setState({ task: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onInsert(this.state.task);
        this.setState({ task: '' });
    };

    render() {
        return (
            <form className="add-group" onSubmit={ this.onSubmit }>
                <input type="text"
                    className="add-group__input"
                    value={ this.state.task }
                    onChange={ this.onChange }
                    placeholder="Add item"
                />
                <button type="submit" className="add-group__button">+</button>
            </form>
        );
    }
};
