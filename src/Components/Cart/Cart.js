import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    const userIcon = <FontAwesomeIcon icon={faUser} />

    return (
        <div className="cart">
            <h1>{userIcon} User</h1>
        </div>
    );
};

export default Cart;