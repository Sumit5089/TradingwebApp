import React from 'react';

function LeftSection({imageUrl, productName, ProductDescription, tryDemo, learnMore, googlePlay, appStore, }) {
    return ( 
        <div className="container mt-5 p-3">
            <div className="row">
                <div className="col p-5">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="col p-5 mt-5" style={{marginLeft:"70px"}}>
                    <h1>{productName}</h1>
                    <p className='mt-4'>{ProductDescription}</p>
                <div>
                <a href={tryDemo} className='py-5' style={{textDecoration:"none"}}>Try Demo →</a>
                <a href={learnMore} style={{marginLeft:"80px", textDecoration:"none"}} className='py-5'>Learn More →</a>
                </div>
                <div className='mt-4'>
                <a href={googlePlay}><img src="media/google-play-badge.svg" /></a>
                <a href={appStore} style={{marginLeft:"25px"}}> <img src="media/appstore-badge.svg"/></a>
                </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;