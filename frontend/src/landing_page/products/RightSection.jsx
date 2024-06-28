import React from 'react';

function RightSection({imageUrl, productName, ProductDescription, kiteConnect, learnMore }) {
    return ( 
        <div className="container mt-5 p-3">
            <div className="row">
                <div className="col p-5 mt-5">
                    <h1>{productName}</h1>
                    <p className='mt-4'>{ProductDescription}</p>
                <div>
                    <a href={kiteConnect} className='py-5' style={{textDecoration:"none"}}>Kite Connect →</a>
                    <a href={learnMore} style={{marginLeft:"80px", textDecoration:"none"}} className='py-5'>Learn More →</a>
                </div>
                </div>
                <div className="col p-5">
                <img src={imageUrl} alt="" />
            </div>
            </div>
        </div>
     );
}

export default RightSection;