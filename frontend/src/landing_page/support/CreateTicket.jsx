import React from 'react';

function CreateTicket() {
    return ( 
        <div className="container mt-5 mb-5">
            <p className='fs-5'>To create a ticket, select a relevant topic</p>
            <br />
            <div className="row sup-li">
                <div className="col">
                    <p classname="text-center" style={{fontSize:"20px"}}>Account Opening</p>
                    <ul className='text-muted'>
                        <li><a href="">Getting started</a></li>
                        <li><a href=""> Online </a></li>
                        <li><a href=""> Offline </a></li>
                        <li><a href=""> Charges </a></li>
                        <li><a href=""> Company, Partnership and HUF </a></li>
                        <li><a href=""> Non Resident Indian (NRI) </a></li>
                    </ul>
                </div>
                <div className="col">
                <p classname="text-center" style={{fontSize:"20px"}}>Your Zerodha Account</p>
                    <ul>
                        <li><a href=""> Login credentials </a></li>
                        <li><a href=""> Your Profile </a></li>
                        <li><a href=""> Account modification and segment addition </a></li>
                        <li><a href=""> CMR & DP ID </a></li>
                        <li><a href=""> Nomination </a></li>
                        <li><a href=""> Transfer and conversion of shares </a></li>
                    </ul>
                </div>
                <div className="col">
                <p classname="text-center" style={{fontSize:"20px"}}> Trading and Markets</p>
                    <ul>
                        <li><a href="">Trading FAQs</a></li>
                        <li><a href="">Kite</a></li>
                        <li><a href="">Margins</a></li>
                        <li><a href="">Product and order types</a></li>
                        <li><a href="">Corporate actions</a></li>
                        <li><a href=""> Kite features</a></li>
                    </ul>
                </div>
            </div>
            <div className="row sup-li">
                <div className="col">
                <p classname="text-center" style={{fontSize:"20px"}}> Funds</p>
                    <ul>
                        <li><a href=""> Fund withdrawal</a></li>
                        <li><a href=""> Adding funds</a></li>
                        <li><a href=""> Adding bank accounts</a></li>
                        <li><a href=""> eMandates</a></li>
                    </ul>
                </div>
                <div className="col">
                <p classname="text-center" style={{fontSize:"20px"}}>  Console</p>
                    <ul>
                        <li><a href="">IPO </a></li>
                        <li><a href="">Portfolio </a></li>
                        <li><a href="">Funds statement </a></li>
                        <li><a href="">Profile </a></li>
                        <li><a href="">Reports </a></li>
                        <li><a href="">Referral program </a></li>
                    </ul>
                </div>
                <div className="col mb-5">
                <p classname="text-center" style={{fontSize:"20px"}}>Account Opening</p>
                    <ul className='mb-5'>
                        <li><a href=""> Understanding mutual funds and Coin </a></li>
                        <li><a href=""> Coin app </a></li>
                        <li><a href=""> Coin web </a></li>
                        <li><a href=""> Transactions and reports </a></li>
                        <li><a href=""> National Pension Scheme (NPS) </a></li>
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;