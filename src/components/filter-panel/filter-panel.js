import React, { Component } from 'react';

import './filter-panel.css';

export default class FilterPanel extends Component {
    buttons = [
        { id: 'all', text: 'All' },
        { id: 'active', text: 'Active' },
        { id: 'done', text: 'Done' }
    ];

    render() {
        const buttonsElement = this.buttons.map(({ id, text }) => {
            return <button key={id} className="filter-group__button">{text}</button>;
        });
        return (
            <div className='filter-group'>
                <input placeholder="Search" className="filter-group__search" />
                <div className="filter-group__buttons">
                    { buttonsElement }
                </div>
            </div>
        );
    }
};
