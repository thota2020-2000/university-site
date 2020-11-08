import React from 'react';
import '../css/compa_css.css';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';


const CompADetails = (props) => {
    return (
        <>
            <details style={{ backgroundColor: 'white', transition: 'height 2s', fontSize: '1.5rem', outline: '1px solid grey', padding: '1% 1%', margin: '0 0.3rem' }}>
                <summary style={{ outline: 'none', fontWeight: 'bold' }}> {props.summary} </summary><hr />
                <div style={{ display: 'flex', padding: '1% 0%' }}>
                    <div style={{ width: 'auto', borderRadius: '0.5rem', padding: '1% 2%', height: 'auto', backgroundColor: 'white', boxShadow: '0.1rem 0.1rem 0.5rem grey', margin: '0.2rem' }}> {props.box1} </div>
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


            <CompADetails summary="After Class 10th" box1={
                <> <h4> &bull; Diploma in Engineering </h4>
                    <h4> &bull; Designing Courses </h4>
                    <h4> &bull; Animation Courses </h4>
                    <h4> &bull; Fashion Design Courses </h4>
                    <h4> &bull; Graphic Design Courses </h4>
                    <h4> &bull; Engineering Courses </h4>
                    <h4> &bull; Vocational Courses </h4>
                    <h4> &bull; Hotel Management Courses </h4>
                    <h4> &bull; Hospitality Management Courses </h4>
                </>
            } />
            <CompADetails summary="After Class 12th" box1={
                <>
                    <h4> &bull; BE/B.Tech- Bachelor of Technology </h4>
                    <h4> &bull; B.Arch- Bachelor of Architecture</h4>
                    <h4> &bull; BCA- Bachelor of Computer Applications </h4>
                    <h4> &bull; B.Sc.- Information Technology </h4>
                    <h4> &bull; B.Sc- Nursing </h4>
                    <h4> &bull; BPharma- Bachelor of Pharmacy </h4>
                    <h4> &bull; B.Sc- Interior Design </h4>
                    <h4> &bull; BDS- Bachelor of Dental Surgery</h4>
                </>

            } />
            <CompADetails summary="Post Graduation Courses" box1={
                <>
                    <h4> &bull; Master of Arts (MA) </h4>
                    <h4> &bull; Master of Science (MSc) </h4>
                    <h4> &bull; Master of Fine Arts (MFA) </h4>
                    <h4> &bull; Master of Letters (MLitt) </h4>
                    <h4> &bull; Master of Laws (LLM) </h4>
                    <h4> &bull; Master of Engineering (MEng) </h4>
                    <h4> &bull; Integrated Masters </h4>
                    <h4> &bull; Postgraduate Certificate (PGCert) <br /> &nbsp; and Postgraduate Diploma (PGDip) </h4>
                </>

            } />
            <CompADetails summary="Doctoral Courses" box1={
                <>
                    <h4> &bull; PhD in Humanities </h4>
                    <h4> &bull; PhD in Social Work </h4>
                    <h4> &bull; PhD in Public and Economic Policy </h4>
                    <h4> &bull; PhD in Psychology </h4>
                    <h4> &bull; PhD in Physiology </h4>
                    <h4> &bull; PhD in Chemistry </h4>
                    <h4> &bull; PhD in Bioscience </h4>
                    <h4> &bull; PhD in Basic and Applied Sciences </h4>
                </>
            } />
        </>
    );
}

export { CompA as default };