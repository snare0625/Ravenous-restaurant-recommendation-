import React from 'react';

import Business from '../Business/Business';
import './BusinessList.css';

function BusinessList(props) {
    return (
        <div className='businessList-container'>
            {
                props.businessObjects.map(restaurantData => {
                    return <Business  restaurant={restaurantData} />
                })
            }
        </div>
    )
}

export default BusinessList;