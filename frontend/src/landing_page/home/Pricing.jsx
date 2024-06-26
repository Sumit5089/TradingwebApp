import React from 'react';

function Pricing() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-5">
                    <h1 className='mb-3'>Unbeatable pricing</h1>
                    <p className='mb-2'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration:"none"}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className="col-1"></div>
                <div className="col-6 mb-5">
                    <div className="row text-center mb-3">
                        <div className="col border p-4">
                            <h1><i class="fa fa-inr" aria-hidden="true"></i> 0</h1>
                            <br />
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col border p-4">
                            <h1><i class="fa fa-inr" aria-hidden="true"></i> 20</h1>
                            <br />
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;