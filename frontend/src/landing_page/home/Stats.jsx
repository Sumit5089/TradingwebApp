import React from 'react';

function Stats() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <h2 className='mb-5'>Trust with confidence</h2>

                    <h3 className='fs-5'>Customer-first always</h3>
                    <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.</p>
                    
                    <h3 className='mt-4 fs-5'>No spam or gimmicks</h3>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                
                    <h3 className='mt-4 fs-5'>The Zerodha universe</h3>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    
                    <h3 className='mt-4 fs-5'>Do better with money</h3>
                    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-6 p-5">
                    <img src="media/ecosystem.png" alt="ecosystem" style={{width:"100%"}} />
                    <div className='text-center'>
                        <a href="" className='mx-5' style={{textDecoration:"none"}}>Explore our Products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href="" style={{textDecoration:"none"}}>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;