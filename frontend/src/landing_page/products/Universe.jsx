import React from 'react';

function Universe() {
    return ( 
        <div className="container mt-5 p-5 text-center">
            <p className='mb-5 p-5'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
            <div className="mb-4">
                <h2>The Zerodha Universe</h2>
                <p className='text-muted mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="col-4 p-3">
                <img src="media/smallcase-logo.png" />
                <p className='text-small text-muted'>Thematic investment platform</p>
            </div>
            <div className="col-4p-3">
            <img src="media/streak-logo.png" style={{width:"15%"}}/>
            <p className='text-small text-muted'>Algo & strategy platform</p>
            </div>
            <div className="col-4 p-3">
            <img src="media/sensibull-logo.svg" style={{width:"55%"}} />
            <p className='text-small text-muted'>Options trading platform</p>
            </div>
        </div>
     );
}

export default Universe;