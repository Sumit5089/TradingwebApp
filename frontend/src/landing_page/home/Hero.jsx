import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5'>
            <div className="row text-center">
                <img className='mb-5' src="media/landing.png" alt="landing image" />
                <h1 className='mt-5 fs-10'>Invest in everything</h1>
                <p className='fs-5 mb-5'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button className='btn btn-primary p-2 fs-5' style={{width:"18%", margin:"0 auto"}}>Sign up Now</button>
            </div>
        </div>
     );
}

export default Hero;
