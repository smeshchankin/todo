import React, { Component } from 'react';

import './filter-panel.css';

export default class FilterPanel extends Component {
    state = {
        text: ''
    };

    buttons = [
        { id: 'all', text: 'All' },
        { id: 'active', text: 'Active' },
        { id: 'done', text: 'Done' }
    ];

    search = (e) => {
        const text = e.target.value;
        this.setState((state) => {
            const newState = {...state, text};
            this.props.onFilter(newState);
            return newState;
        });
    };

    render() {
        const buttonsElement = this.buttons.map(({ id, text }) => {
            return <button key={id} className="filter-group__button">{text}</button>;
        });
        return (
            <div className='filter-group'>
                <input className="filter-group__search"
                    placeholder="Search"
                    onChange={this.search}
                    value={this.state.text}
                />
                <div className="filter-group__buttons">
                    { buttonsElement }
                </div>
            </div>
        );
    }
};
