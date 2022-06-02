import React, { useState, useEffect } from 'react';
import axios from 'axios';

import GearItem from '../gearItems/gearItem';

export default function Gear() {
    const [gearItems, setGearItems] = useState([]);

    const getAllGearItems = () => {
        axios.get('https://trident-capstone-api.herokuapp.com/gear-item/get')
        .then(res => {
            setGearItems(res.data);
        })
        .catch(error => {
            console.log(`An error has occured with your API 'GET' request: ${error}`)
        })
    }

    const renderGearItems = () => {
        return gearItems.map(item => {
            return <div key={item.id}><GearItem item={item} /></div>
        
        })
    }

    useEffect(() => {
        getAllGearItems();
    }, [])

        return (
          <div className="gear-container">
            <div className="gear-card">
                {renderGearItems()}
            </div>
          </div>
        );
}