import React, { useState } from 'react';
import '../css/index_page_css.css';
import { Switch, Route, NavLink } from 'react-router-dom';
import HomePage from './HomePage';
import CompA from './CompA';
import CompB from './CompB';
import CompC from './CompC';
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
                        <div> <NavLink to="/comp1" style={{ textDecoration: 'none', fontSize: '1.6rem', color: 'white' }}>  <LibraryAddTwoToneIcon fontSize="large" /> &nbsp; Admissions </NavLink></div>
                        <div> <NavLink to="/comp2" style={{ textDecoration: 'none', fontSize: '1.6rem', color: 'white' }}>  <SchoolTwoToneIcon fontSize="large" /> &nbsp;  Academics </NavLink></div>
                        <div> <NavLink to="/comp3" style={{ textDecoration: 'none', fontSize: '1.6rem', color: 'white' }}>  <GolfCourseTwoToneIcon fontSize="large" /> &nbsp;  Course offered </NavLink></div>
                        <div> <NavLink to="/comp1" style={{ textDecoration: 'none', fontSize: '1.6rem', color: 'white' }}>  <SchoolTwoToneIcon fontSize="large" /> &nbsp;  Placements </NavLink></div>
                        <div> <NavLink to="/comp1" style={{ textDecoration: 'none', fontSize: '1.6rem', color: 'white' }}>  <SchoolTwoToneIcon fontSize="large" /> &nbsp;  Research </NavLink></div>
                        <div> <NavLink to="/comp1" style={{ textDecoration: 'none', fontSize: '1.6rem', color: 'white' }}>  <SchoolTwoToneIcon fontSize="large" /> &nbsp;  Campus Life </NavLink></div>
                        <div> <NavLink to="/comp1" style={{ textDecoration: 'none', fontSize: '1.6rem', color: 'white' }}>  <SchoolTwoToneIcon fontSize="large" /> &nbsp;  Disciplines </NavLink></div>
                        <div> <NavLink to="/comp1" style={{ textDecoration: 'none', fontSize: '1.6rem', color: 'white' }}>  <SchoolTwoToneIcon fontSize="large" /> &nbsp;  Alumni </NavLink></div>
                        <div> <NavLink to="/comp1" style={{ textDecoration: 'none', fontSize: '1.6rem', color: 'white' }}>  <InfoTwoToneIcon fontSize="large" /> &nbsp;  About Us </NavLink></div>

                    </div>
                </div>
                <div className="main-div-child2">
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/comp1" component={CompA} />
                        <Route exact path="/comp2" component={CompB} />
                        <Route exact path="/comp3" component={CompC} />
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