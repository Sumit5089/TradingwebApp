import React from 'react';

function Hero() {
    return ( 
        <div className="container mt-5 p-5" style={{color:"white", backgroundColor:"#387ed1", maxWidth:"100%", height:"480px"}}>
            <div className="row">
                <div className="col-7">
                    <h3 className='p-4 fs-5 p-2'>Support Portal</h3>
                    <p className='fs-4 mb-4 px-4'>Search for an answer or browse help topics to create a <br />ticket</p>
                    <input className='px-4 py-3' type="text" placeholder='Eg: how do i activate F&O, why is my order getting rejected ...' style={{width:"100%", marginLeft:"15px"}}/>
                    <div className="row mt-3 px-4">
                        <div className="col"><a href="" style={{color:"white"}}>Track account opening</a></div>
                        <div className="col"><a href="" style={{color:"white"}}> Track segment activation</a></div>
                        <div className="col"><a href="" style={{color:"white"}}> Intraday margins</a></div>
                    </div>
                    <div className="col px-4 mt-3"><a href="" style={{color:"white"}}> Kite user manual</a></div>
                </div>
                <div className="col-5 mt-2 mb-5">
                    <a className='fs-6 mb-5' href="" style={{color:"white" , marginLeft:"20rem"}}>Track Tickets</a>
                    <h4 className='mt-5 p-4'>Featured</h4>
                    <ol>
                        <li><a href="" style={{color:"white"}}>Latest Intraday leverages and Square-off timings</a></li>
                        <li className='mt-2 mb-5'><a href="" style={{color:"white"}}>Surveillance measure on scrips - June 2024</a></li>
                    </ol>
                </div>
            </div>
        </div>
     );
}

export default Hero;