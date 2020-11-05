import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ComponentIndex from './MyComponents/ComponentIndex';

ReactDOM.render(
    <>
        <BrowserRouter>
            <ComponentIndex />
        </BrowserRouter>
    </>, document.getElementById("root")
);