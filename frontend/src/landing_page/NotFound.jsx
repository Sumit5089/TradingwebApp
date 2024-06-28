import React from 'react';
import { Link } from 'react-router-dom';



function NotFound() {
    return ( 
        <div className="container mt-5 p-10 mb-5" style={{marginLeft:"15%"}}>
            <p>404</p>
            <br />
            <br />
            <h1>couldn't find that page</h1>
            <br />
            <p>
            We couldn’t find the page you were looking for. 
            <Link className="px-4" to="/">Visit Zerodha’s home page</Link>
            </p>
        </div>
     );
}

export default NotFound;