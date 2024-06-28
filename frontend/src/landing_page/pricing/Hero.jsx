import React from 'react';

function Hero() {
    return ( 
        <div className="container mt-3  py-5 text-center border-bottom">
           <div className='border-bottom mt-3 p-5 '>
           <h1 className='mt-5'>Pricing</h1>
           <p className='mt-3 fs-5 mb-5' style={{color:"grey"}}> Free equity investments and flat ₹20 intraday and F&O trades </p>
           </div>
            <div className="row mt-5 p-5">
                <div className="col text-center">
                    <img src="media/pricing-eq.svg" alt="zeroimg" style={{width:"80%"}} />
                    <h3 className='mt-5'>Free equity delivery</h3>
                    <p className='mt-4' style={{color:"grey"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col text-center">
                <img src="media/other-trades.svg" alt="twentyimg" style={{width:"80%"}}  />
                    <h3 className='mt-5'>Intraday and F&O trades</h3>
                    <p className='mt-4' style={{color:"grey"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col text-center">
                <img src="media/pricing-eq.svg" alt="zeroimg" style={{width:"80%"}}  />
                    <h3 className='mt-5'>Free direct MF</h3>
                    <p className='mt-4' style={{color:"grey"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;