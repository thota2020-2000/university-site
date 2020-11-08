import React, { useState } from 'react';
import '../css/index_page_css.css';
import { Switch, Route, NavLink } from 'react-router-dom';
import HomePage from './HomePage';
import CompA from './CompA';
import CompB from './CompB';
import CompC from './CompC';
import CompD from './CompD';
import CompE from './CompE';
import logo from '../images/logo.png'
import SchoolTwoToneIcon from '@material-ui/icons/SchoolTwoTone';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import LibraryAddTwoToneIcon from '@material-ui/icons/LibraryAddTwoTone';
import GolfCourseTwoToneIcon from '@material-ui/icons/GolfCourseTwoTone';
import ChatIcon from '@material-ui/icons/Chat';

const ComponentIndex = () => {

    let [x, setX] = useState("jeevan");

    return (
        <>
            <div className="main-div">
                <div id="MainChild1" className="main-div-child1">
                    <div className="main-div-child1-child1" style={{ width: '100%', height: '10rem' }}>
                        <img alt="logo" src={logo} style={{ width: '100%', height: '100%', boxShadow: '1px 1px 5px grey' }} />
                    </div>

                    <div className="main-div-child1-child2">
                        <div> <NavLink to="/landing-page" style={{ textDecoration: 'none', fontSize: '1.6rem' }}>  <SchoolTwoToneIcon fontSize="large" /> &nbsp;  HomePage </NavLink></div>
                        <div> <NavLink to="/comp1" style={{ textDecoration: 'none', fontSize: '1.6rem' }}>  <LibraryAddTwoToneIcon fontSize="large" /> &nbsp; Admissions </NavLink></div>
                        <div> <NavLink to="/comp3" style={{ textDecoration: 'none', fontSize: '1.6rem' }}>  <SchoolTwoToneIcon fontSize="large" /> &nbsp;  Academics </NavLink></div>
                        <div> <NavLink to="/comp4" style={{ textDecoration: 'none', fontSize: '1.6rem' }}>  <SchoolTwoToneIcon fontSize="large" /> &nbsp;  Placements </NavLink></div>
                        <div> <NavLink to="/comp5" style={{ textDecoration: 'none', fontSize: '1.6rem' }}>  <InfoTwoToneIcon fontSize="large" /> &nbsp;  Contact Us </NavLink></div>
                    </div>
                </div>
                <div className="main-div-child2">
                    <Switch>
                        <Route exact path="/landing-page" component={HomePage} />
                        <Route exact path="/comp1" component={CompA} />
                        <Route exact path="/comp2" component={CompB} />
                        <Route exact path="/comp3" component={CompC} />
                        <Route exact path="/comp4" component={CompD} />
                        <Route exact path="/comp5" component={CompE} />
                    </Switch>
                </div>
            </div>

            <div style={{ borderRadius: '5rem', boxShadow: '0.1rem 0.1rem 0.5rem grey', background: 'lightgrey', padding: '2.2rem', position: 'fixed', bottom: '4%', right: '4%' }}> <ChatIcon fontSize="large" /> </div>
            <button onClick={() => {
                let buttonfixed = document.getElementById("MainChild1");
                //console.log(buttonfixed);
                if (x === "jeevan") {
                    buttonfixed.style.left = "0%";
                    setX("mrityu");
                }
                else {
                    buttonfixed.style.left = "-52%";
                    setX("jeevan");
                }

            }} className="hamburger-button" style={{ fontSize: '2rem', position: 'fixed', top: '1%', left: '2%' }}> &#9776; </button>


        </>
    );
}


export default ComponentIndex;