import React, { Component } from 'react';

import './insert-panel.css';

export default class InsertPanel extends Component {
    render() {
        return (
            <form className="add-group">
                <input placeholder="Add item" className="add-group__input" />
                <button type="button" className="add-group__button"onClick={() => this.props.onInsert('Dummy task') }>+</button>
            </form>
        );
    }
};
