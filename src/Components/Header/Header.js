import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="mt-5 bg-color">
            <h1 className="text-light pt-4 pb-3">Top <span className="text-info fw-bolder">Directors</span></h1>
            <p className="text-light px-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim neque voluptatum assumenda? Dolores rerum magnam, recusandae voluptates quis quos iure</p>
            <h3>Total Budget: 50 Billion $</h3>
        </div>
    );
};

export default Header;