import React from 'react';

function Brokerage() {
    return ( 
       <div className="container mt-5 p-5">
        <div className="row text-center">
            <div className="col price-li">
                <p className='mb-4 fs-5'>Brokerage calculator</p>
                <ul style={{fontSize:"12px", color:"grey"}}>
                    <li className='text-start'>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                    <li className='text-start'>Digital contract notes will be sent via e-mail.</li>
                    <li className='text-start'>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                    <li className='text-start'>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                    <li className='text-start'>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                    <li className='text-start'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                </ul>
            </div>
            <div className="col">
                <p className='fs-5'>List of charges</p>
            </div>
        </div>
       </div>
     );
}

export default Brokerage;