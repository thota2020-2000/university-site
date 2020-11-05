import React from 'react';
import '../css/compa_css.css';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';


const CompADetails = (props) => {
    return (
        <>
            <details style={{ transition: 'height 2s', fontSize: '1.5rem', outline: '1px solid grey', padding: '1% 1%', margin: '0 0.3rem' }}>
                <summary style={{ outline: 'none', fontWeight: 'bold' }}> {props.summary} </summary><hr />
                <div style={{ display: 'flex', padding: '1% 0%' }}>
                    <div style={{ width: '30rem', height: '20rem', border: '0.05rem solid grey', margin: '0.2rem' }}>1</div>
                    <div style={{ width: '30rem', height: '20rem', border: '0.05rem solid grey', margin: '0.2rem' }}>1</div>
                    <div style={{ width: '30rem', height: '20rem', border: '0.05rem solid grey', margin: '0.2rem' }}>1</div>
                    <div style={{ width: '30rem', height: '20rem', border: '0.05rem solid grey', margin: '0.2rem' }}>1</div>
                </div>
            </details>
        </>
    );
}


const CompA = () => {


    return (
        <>
            <div style={{ display: 'grid', placeItems: 'center', width: '100%', height: '5rem', color: 'white', backgroundColor: 'indigo' }}>

                <h1> -- Welcome to Admission Department -- </h1>
            </div>
            <br />
            <div id="Slider" className="slider">
                <div className="slides"> <img src={image1} alt="image1" /> </div>
                <div className="slides"> <img src={image2} alt="image1" /> </div>
                <div className="slides"> <img src={image1} alt="image1" /> </div>
                <div className="slides"> <img src={image2} alt="image1" /> </div>
                <div className="slides"> <img src={image1} alt="image1" /> </div>
            </div>

            <div style={{ display: 'grid', placeItems: 'center', height: '6rem' }}> <h1 style={{ textShadow: '1px 1px 3px grey' }}> -- FIND YOUR AREA OF INTEREST -- </h1> </div>


            <CompADetails summary="After Class 10th" />
            <CompADetails summary="After Class 12th" />
            <CompADetails summary="Post Graduation Courses" />
            <CompADetails summary="Doctoral Courses" />
        </>
    );
}

export { CompA as default };