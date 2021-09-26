import './Card.css'
import React, { useEffect, useState } from 'react';
import Users from '../Users/Users';
import Cart from '../Cart/Cart';

const Card = () => {
    const [cards, setCard] = useState([]);
    const [cart, setCart] = useState([]);
    const [userName, setUserName] = useState([]);

    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setCard(data));
    }, [])

    const handleAddToCart = (user) => {
        const newCart = [...cart, user];
        const newName = [...userName, user.name]
        setCart(newCart);
        setUserName(newName);


    }

    return (
        <div className="container d-flex">
            <div className="row row-cols-lg-3 col-9 gx-4">
                {
                    cards.map((card, key) => <Users
                        card={card}
                        key={key}
                        handleAddToCart={handleAddToCart}
                    >
                    </Users>)
                }
            </div>
            <div className="row-cols-3 ">
                <Cart user={cart} userName={userName}></Cart>
            </div>
        </div>
    );
};

export default Card;