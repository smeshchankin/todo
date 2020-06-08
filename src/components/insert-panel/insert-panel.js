import React, { Component } from 'react';

import './insert-panel.css';

export default class InsertPanel extends Component {
    state= {
        task: ''
    };

    onChange = (e) => {
        this.setState({
            task: e.target.value
        });
    };

    render() {
        return (
            <form className="add-group">
                <input type="text"
                    className="add-group__input"
                    onChange={ this.onChange }
                    placeholder="Add item"
                />
                <button type="button" className="add-group__button" onClick={() => this.props.onInsert(this.state.task) }>+</button>
            </form>
        );
    }
};
