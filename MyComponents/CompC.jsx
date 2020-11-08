import React from 'react';
import academics from '../json_files/acedemics';

const CompC = () => {
    console.log(academics);
    return (
        <>
            <div style={{ display: 'grid', placeItems: 'center', width: '100%', height: '5rem', color: 'white', backgroundColor: 'indigo' }}>

                <h1> -- Academics at LPU -- </h1>
            </div>
            <br />
            <div style={{ display: 'grid', placeItems: 'center', height: '6rem' }}> <h1 style={{ textShadow: '1px 1px 3px grey' }}> -- Live Projects -- </h1> </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {
                    academics.map((data) => {
                        return (
                            <>

                                <div className="achievement_div" style={{ width: '30%', margin: '1rem 0', height: 'auto', backgroundColor: 'white', boxShadow: '0.1rem 0.1rem 0.5rem grey', borderRadius: '0.5rem' }}>
                                    <div> <img src={data.image} style={{ borderRadius: '0.5rem 0.5rem 0 0', width: '100%' }} /> </div>
                                    <div style={{ padding: '1rem' }}> <h1> {data.title} </h1> <br />
                                        <h3> {data.discription} </h3>
                                    </div>
                                </div>

                            </>);
                    })
                }

            </div>
        </>
    );
}

export default CompC;