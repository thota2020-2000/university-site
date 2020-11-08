import React from 'react';
import placement from '../json_files/placement';

const CompD = () => {
    return (
        <>
            <div style={{ display: 'grid', placeItems: 'center', width: '100%', height: '5rem', color: 'white', backgroundColor: 'indigo' }}>

                <h1> -- Welcome to Placemnet Department -- </h1>
            </div>
            <br />
            <div style={{ display: 'grid', placeItems: 'center', height: '6rem' }}> <h1 style={{ textShadow: '1px 1px 3px grey' }}> -- Top Recruiters -- </h1> </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {
                    placement.map((data) => {
                        return (
                            <>

                                <div className="achievement_div" style={{ margin: '1rem 0', width: '16%', height: 'auto', backgroundColor: 'white', boxShadow: '0.1rem 0.1rem 0.5rem grey', borderRadius: '0.5rem' }}>
                                    <div> <img src={data.image} style={{ borderRadius: '0.5rem 0.5rem 0 0', width: '100%' }} /> </div>
                                    <div style={{ padding: '1rem' }}></div>
                                </div>

                            </>);
                    })
                }

            </div>
            <div style={{ display: 'grid', placeItems: 'center', height: '6rem' }}> <h1 style={{ textShadow: '1px 1px 3px grey' }}> -- Achivements -- </h1> </div>
            <div style={{ padding: '2%', alignItems: 'center', backgroundColor: 'white', display: 'flex', justifyContent: 'space-around', width: '100%', height: '15rem', fontSize: '2.5rem' }}>
                <div>
                    <pre>

                        190+ <br />
                        NO. OF DRIVES CONDUCTED


                    </pre>

                </div>
                <div>
                    <pre>

                        190+<br />
                        NO. OF DRIVES CONDUCTED


                    </pre></div>
                <div>
                    <pre>

                        190+<br />
                        NO. OF DRIVES CONDUCTED


                    </pre></div>
            </div>
        </>
    );
}

export default CompD;