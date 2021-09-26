import React from 'react';
import './Users.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Users = (props) => {
    // console.log(props);
    const { image, name, role, age, country, networth } = props.card;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (

        <div>
            <div className="card align-items-center my-3" >
                <img src={image} className="card-img-top card-img rounded-circle p-5" alt="..." />
                <div className="card-body ">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{role}</p>
                    <p className="card-text"><b>Age:</b> {age} years</p>
                    <p className="card-text"><b>Country:</b> {country}</p>
                    <p><b>Net-Worth:</b> $ {networth} Million</p>
                    <button
                        onClick={() => props.handleAddToCart(props.card)}
                        className="btn btn-warning">{cartIcon} Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Users;