import React, { Component } from 'react';

import './filter-panel.css';

export default class FilterPanel extends Component {
    state = {
        text: '',
        done: null
    };

    buttons = [
        { id: 'all', text: 'All', done: null },
        { id: 'active', text: 'Active', done: false },
        { id: 'done', text: 'Done', done: true }
    ];

    search = (e) => {
        const text = e.target.value;
        this.setState((state) => {
            const newState = {...state, text};
            this.props.onFilter(newState);
            return newState;
        });
    };

    filterByDone = (done) => {
        this.setState((state) => {
            const newState = {...state, done};
            this.props.onFilter(newState);
            return newState;
        });
    }

    render() {
        const { done: stateDone } = this.state;

        const buttonsElement = this.buttons.map(({ id, text, done }) => {
            const className = done === stateDone ? ' active' :  '';
            return (
                <button key={id}
                    className={`filter-group__button${className}`}
                    onClick={() => this.filterByDone(done)}
                >
                    {text}
                </button>
            );
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
