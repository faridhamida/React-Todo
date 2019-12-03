import React from 'react';
import { render } from 'react-dom';
import App from './App';

const data = [
    {
        name: "Fix car",
        id: 123,
        completed: true
    },
    {
        name: "Go to work",
        id: 124,
        completed: false
    },
    {
        name: "Eat",
        id: 1235,
        completed: false
    },
    {
        name: "Sleep",
        id: 1246,
        completed: false
    }

];
export default data;
render(<App />, document.getElementById('root'));
