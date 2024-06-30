import React from 'react';

function Sigup() {
    return ( 
    <div className="container mt-5 p-5">
        <div className="row mt-5 p-5">
            <div className="col-6">
                <img src="media\landing.46a77378.png" alt="signupimg" style={{width:"100%"}} />
            </div>
            <div className="col-4 mt-4" style={{marginLeft:"120px"}}>
                <h3>Signup now</h3>
                <p className='text-muted'>Or track your existing application.</p>
                <input className='mt-3' type="number" name="mobileNo" placeholder='+91' id="mobileNo" />
                <p className='text-muted mt-4' style={{fontSize:"12px"}}>You will receive an OTP on your number</p>
                <button type="submit" className='btn btn-primary mb-3'>Continue</button>
                <br />
                <a href="" style={{textDecoration:"none", fontSize:"14px"}}>want to open a NRI account?</a>
            </div>
            <div className='mt-5'>
                <p className='text-muted  text-center' style={{fontSize:"12px"}}>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. <br /> Please visit this article to know more.</p>
                <p className='text-muted  text-center' style={{fontSize:"12px"}}>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here.</p>
            </div>
        </div>
    </div>
     );
}

export default Sigup;