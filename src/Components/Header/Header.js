import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="my-5 cards">
            <h1 className="text-light ">Top <span className="text-info fw-bolder">Directors</span></h1>
            <p className="text-light">The Hollywood blockbuster may be in crisis, but the art of the cinema is as healthy as ever for those directors.</p>
            <h3>Total Budget: 50 Billion $</h3>
        </div>
    );
};

export default Header;