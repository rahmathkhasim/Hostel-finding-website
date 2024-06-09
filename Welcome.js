// Welcome.js

import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
    return (
        <div>
            <h1>Welcome to HFinder</h1>
            <p>Find the perfect hostel for your needs</p>
            <Link to="/login">Get Started</Link>
        </div>
    );
}

export default Welcome;
