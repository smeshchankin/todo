import React from 'react';

const FilterPanel = () => {
    return (
        <div className='filter-group'>
            <input placeholder="Search" />
            <button>All</button>
            <button>Active</button>
            <button>Done</button>
        </div>
    );
};

export default FilterPanel;
