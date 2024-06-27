import React from "react";

function Footer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src="/media/logo.svg" alt="logo" style={{width:"50%"}}/>
          <p>© 2010 - 2024, Zerodha Broking Ltd. All rights reserved.</p>
        </div>
        <div className="col" id="footer-a">
            <p>Company</p>
                <li><a href="">About</a></li>
                <li><a href="">Products</a></li>
                <li> <a href="">Pricing</a></li>
                <li><a href="">Referral programme</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Zerodha.tech</a></li>
                <li><a href="">Press & media/</a></li>
                <li><a href="">Zerodha Cares (CSR)</a></li>
                <br />
        </div>
        <div className="col" id="footer-a">
            <p>Support</p>
                <li><a href="">Contact us</a></li>
                <li><a href="">Support portal</a></li>
                <li><a href="">Z-Connect blog</a></li>
                <li><a href="">Referral programme</a></li>
                <li><a href="">Downloads & resources</a></li>
                <li><a href="">Videos</a></li>
                <li><a href="">Market overview</a></li>
                <li> <a href="">How to file a complaint?</a></li>
                <li><a href="">Status of your complaints</a></li>
                <br />
        </div>
        <div className="col" id="footer-a">
            <p>Account</p>
            <a href="">About</a>
                <li><a href="">Open an account</a></li>
                <li><a href="">Fund transfer</a></li>
                <br />
        </div>
      </div>
    </div>
  );
}

export default Footer;
