import React from "react";

function Team() {
  return (
    <div className="container mt-5 p-5">
      <h1 className="text-center mb-5 fs-8"> People</h1>
      <div className="row">
        <div className="col five text-center">
          <img src="media/nithin-kamath.jpg" alt="founderimg" style={{borderRadius:"50%", width:"40%"}} />
          <br />
          <h5>Nithin Kamath</h5>
          <p>Founder, CEO</p>
        </div>
        <div className="col">
          
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed alot the landscape of the Indian broking industry.</p>

            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).</p>

            <p> Playing basketball is his zen.</p>
           
        </div>
      </div>
    </div>
  );
}

export default Team;
