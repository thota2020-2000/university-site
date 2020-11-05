import React from 'react';
import ChatIcon from '@material-ui/icons/Chat';
import '../css/index_page_css.css';
import '../css/compa_css.css';
import '../index.js';

const FixedButtons = () => {

    let x = "jeevan";
    const button1 = document.querySelector(".main-div-child1");

    const toggleButton = () => {
        if (x === "jeevan") {
            button1.style.left = "0%";
            x = "mrityu";
        }
        else {
            button1.style.left = "-50%";
            x = "jeevan";
        }
    }

    return (
        <>
            <div style={{ borderRadius: '5rem', boxShadow: '0.1rem 0.1rem 0.5rem grey', background: 'lightgrey', padding: '2.2rem', position: 'fixed', bottom: '4%', right: '4%' }}> <ChatIcon fontSize="large" /> </div>
            <button onClick={toggleButton} className="hamburger-button" style={{ fontSize: '2rem', position: 'fixed', top: '1%', left: '2%' }}> &#9776; </button>

        </>
    );
}

export { FixedButtons as default };