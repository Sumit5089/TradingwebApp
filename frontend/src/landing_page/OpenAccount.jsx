import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container p-5 mb-5 mt-5'>
            <div className="row text-center">
                <h1 className='mt-2 fs-10 mb-4'>Open a Zerodha account</h1>
                <p className='fs-5 mb-5' style={{color:"grey"}}>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades</p>
                <button className='btn btn-primary p-2 fs-5 mb-5' style={{width:"18%", margin:"0 auto"}}>Sign up Now</button>
            </div>
        </div>
     );
}

export default OpenAccount;