import React from 'react';
import './Business.css';


function Business(props) {

    
    return (
        <div className='business-outer-container'>
            <div className='business-container'>
                <img 
                    src={props.restaurant.imageSrc}
                    alt='Image of Pizza'
                    width='100%'
                    height='300px'
                />
                <p className='restaurant-title'>{props.restaurant.name}</p>
                <div className='restaurant-details'>
                    <div className='left-restaurant-content'>
                        <p>{props.restaurant.address}</p>
                        <p>{props.restaurant.city}</p>
                        <p>{props.restaurant.state} {props.restaurant.zipCode}</p>
                    </div>
                    <div className='right-restaurant-content'>
                        <p className='category'>{props.restaurant.category}</p>
                        <p className='rating'>{props.restaurant.rating} stars</p>
                        <p>{props.restaurant.reviewCount} reviews</p>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Business;


   /* Dummy Data
    const restaurantObject = {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Bordertown',
        state: 'NY',
        zipCode: '10101',
        category: 'ITALIAN',
        rating: 4.5,
        reviewCount: 90
    }
    */