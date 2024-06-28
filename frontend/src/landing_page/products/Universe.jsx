import React from 'react';

function Universe() {
    return ( 
        <div className="container mt-5 p-5 text-center">
            <p className='mb-5 p-5 fs-5'>Want to know more about our technology stack? Check out the <a href="" style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</p>
            <div className="mb-4">
                <h2>The Zerodha Universe</h2>
                <p className='text-muted mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="row mt-5">
            <div className="col-4 p-3">
                <img src="media/smallcase-logo.png" />
                <p className='text-muted p-1' style={{fontSize:"12px"}}>Thematic investment platform</p>
            </div>
            <div className="col-4 p-3">
                <img src="media/streak-logo.png" style={{width:"50%"}}/>
                <p className='text-muted p-1'style={{fontSize:"12px"}}>Algo & strategy platform</p>
            </div>
            <div className="col-4 p-3">
                <img src="media/sensibull-logo.svg" style={{width:"70%"}} />
                <p className='text-muted p-1'style={{fontSize:"12px"}} >Options trading platform</p>
            </div> 
            </div>

            <div className="row mt-5">
            <div className="col-4 p-3">
                <img src="media/zerodhafundhouse.png" style={{width:"60%"}}/>
                <p className='text-muted p-1' style={{fontSize:"12px"}}>Asset management</p>
            </div>
            <div className="col-4 p-3">
                <img src="media/tijori.svg" style={{width:"45%"}}/>
                <p className='text-muted p-1'style={{fontSize:"12px"}}>Fundamental research platform</p>
            </div>
            <div className="col-4 p-3">
                <img src="media/ditto-logo.png" style={{width:"50%"}} />
                <p className='text-muted p-1'style={{fontSize:"12px"}} >Insurance</p>
            </div> 

                    <button className='btn btn-primary p-2 fs-5' style={{width:"17%", margin:"0 auto"}}>Sign up now</button>

            </div>
        </div>
     );
}

export default Universe;