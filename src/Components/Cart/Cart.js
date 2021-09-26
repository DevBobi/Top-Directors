import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    // console.log(props);
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const dollarIcon = <FontAwesomeIcon icon={faDollarSign} />
    const { user } = props;
    const { userName } = props;


    let total = 0;
    for (const card of user) {
        total = total + card.networth;
    }

    return (
        <div className="cart">
            <h1>{userIcon} User: {props.user.length}</h1>
            <h5>Total: {total} {dollarIcon}</h5>
            {
                userName.map((name, i) => <li key={i}> {name}</li>)
            }
            <button className="btn btn-outline-danger mt-3 text-dark fw-normal">Buy-Now</button>
        </div>
    );
};

export default Cart;