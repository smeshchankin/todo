import React from 'react';

import './filter-panel.css';

const FilterPanel = () => {
    return (
        <div className='filter-group'>
            <input placeholder="Search" className="filter-group__search" />
            <div className="filter-group__buttons">
                <button className="filter-group__button">All</button>
                <button className="filter-group__button">Active</button>
                <button className="filter-group__button">Done</button>
            </div>
        </div>
    );
};

export default FilterPanel;
