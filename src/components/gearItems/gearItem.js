import React from 'react';
import axios from 'axios';


export default function GearItem(props) {
    const {id, title, price, description, img} = props.item;

    
    const handleAddToCart = () => {
        fetch('https://trident-capstone-api.herokuapp.com/cart/add', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({
                title: title,
                price: price,
                img: img,
                description: description,
            })
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log('Error adding to cart', error);
        })
    }

    const handleDeleteGear = (id) => {
        axios.delete(`'https://trident-capstone-api.herokuapp.com/delete/${id}`)
        .then(res => res.json())
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log('Error deleting gear item', error);
            })
    }

        return (
            <div className="trident" key={id}>
                <div className="container">
                    <img className="image" src={img} />
                    <div className="overlay">
                        <div className="text">
                            <h1 className="title">{title}</h1>
                            <p className="price"><br />${price}</p>
                            <p className="description"><br />{description}</p>
                            <button onClick={() => handleAddToCart()} className="add-to-cart-button">
                                Add to Cart
                            </button>
                            <button onClick={() => handleDeleteGear(id)} className="delete-gear-item">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
}