import React from 'react';

import './insert-panel.css';

const InsertPanel = () => {
    return (
        <div className="add-group">
            <input placeholder="Add item" className="add-group__input" />
            <button className="add-group__button">+</button>
        </div>
    );
};

export default InsertPanel;
