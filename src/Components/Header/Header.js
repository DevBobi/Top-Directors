import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="mt-5 bg-color">
            <h1 className="text-light pt-4 pb-3">Orion <span className="text-info fw-bolder">Devs</span></h1>
            <p className="text-light px-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim neque voluptatum assumenda? Dolores rerum magnam, recusandae voluptates quis quos iure, amet hic veritatis doloribus laboriosam voluptate eum, ea reprehenderit excepturi.</p>
            <h3>Total Budget: 10 Million $</h3>
        </div>
    );
};

export default Header;