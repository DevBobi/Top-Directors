import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    console.log(props);
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const { user } = props;
    const { userName } = props;


    let total = 0;
    for (const card of user) {
        total = total + card.networth;
    }

    return (
        <div className="cart">
            <h1>{userIcon} User: {props.user.length}</h1>
            <h5>Total: {total} $</h5>
            {
                userName.map(name => <li key={name}> {name}</li>)
            }

        </div>
    );
};

export default Cart;