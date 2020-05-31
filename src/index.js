import React from 'react';
import ReactoDOM from 'react-dom';

const elem = (
    <div>
        <h1>Todo List</h1>
        <div class='filter-group'>
            <input placeholder="Search" />
            <button>All</button>
            <button>Active</button>
            <button>Done</button>
        </div>
        <ul>
            <li>Learn React</li>
            <li>Create React App</li>
            <li>Deploy App on GitHub Pages</li>
        </ul>
        <div id="add-group">
            <input placeholder="Add item" />
            <button>+</button>
        </div>
    </div>
);
const root = document.getElementById('root');
console.log(elem);

ReactoDOM.render(elem, root);
