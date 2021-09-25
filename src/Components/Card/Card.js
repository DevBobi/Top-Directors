import './Card.css'
import React, { useEffect, useState } from 'react';
import Users from '../Users/Users';
import Cart from '../Cart/Cart';

const Card = () => {
    const [cards, setCard] = useState([]);

    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setCard(data));
    }, [])

    return (
        <div className="container d-flex">
            <div className="row row-cols-3 col-9 gy-4 ">
                {
                    cards.map(card => <Users
                        card={card}
                    >
                    </Users>)
                }
            </div>
            <div className="row-cols-5">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Card;