import React from 'react';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import achievement from '../json_files/achievement';
import lpu_logo from '../images/lpu_logo.png';

const HomePage = () => {
    console.log(achievement);

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '5rem', color: 'white', backgroundColor: 'indigo' }}>
                <div style={{ height: '5rem' }}> <img src={lpu_logo} style={{ height: '5rem' }} /> </div>

            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <marquee scrollAmount="2" style={{ fontWeight: 'bold', padding: '0.5% 0', color: 'white', backgroundColor: 'orange', fontSize: '1.4rem' }}> Hurry Up admission for session 2020-21 is open now </marquee>

            </div>

            <div id="Slider" className="slider">
                <div className="slides"> <img src={image3} alt="image1" /> </div>
                <div className="slides"> <img src={image4} alt="image1" /> </div>
                <div className="slides"> <img src={image3} alt="image1" /> </div>
                <div className="slides"> <img src={image4} alt="image1" /> </div>
                <div className="slides"> <img src={image3} alt="image1" /> </div>
            </div>

            <div style={{ display: 'grid', placeItems: 'center', height: '6rem' }}> <h1 className="headings_in_site" style={{ color: 'indigo', textShadow: '1px 1px 3px lightgrey' }}> -- OUR RECENT ACHIEVEMENTS -- </h1> </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {
                    achievement.map((data) => {
                        return (
                            <>

                                <div className="achievement_div" style={{ margin: '1rem 0', height: 'auto', backgroundColor: 'white', boxShadow: '0.1rem 0.1rem 0.5rem grey', borderRadius: '0.5rem' }}>
                                    <div> <img src={data.image} style={{ borderRadius: '0.5rem 0.5rem 0 0', width: '100%' }} /> </div>
                                    <div style={{ padding: '1rem' }}> <h2> {data.title} </h2> <br /> <p style={{ fontSize: '1.8rem' }}> {data.discription} </p> </div>
                                </div>

                            </>);
                    })
                }
            </div>

        </>
    );
}

export default HomePage;