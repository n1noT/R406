import OfferCard from './cardPrice'
import React, { useState } from 'react';




export default function Price({prices, cb_buy}) {
    // État du toggle
    const [isToggle, setIsToggle] = useState(false);

    function handler(){
        // Met isToggle à l'inverse de son état actuel
        setIsToggle(!isToggle)
    }

    function popup(){
        alert(prices.offers.name)
    }

    return (
        <div className="offer">
                <div>
                    <h2 className="offer-section__title">{prices.header}</h2>
                    <p className="offer-section__description">{prices.content.desc}</p>
                </div>

                <div>
                    <label className="switch">
                        <input onClick={handler} type="checkbox"></input>
                        <span className="slider round"></span>
                    </label>
                    
                    <p className="offer-section__description">{isToggle ? 'Achat' : 'Location'}</p>
                </div>
                
                <div className="box">
                    {prices.offers.map((offer, index) => (
                        <OfferCard key={index} label={offer.name} price={isToggle ? offer.price.buy : offer.price.leasing} advantages={offer.offerList} handler={cb_buy}/>
                    ))}
                </div>
            
        </div>
    );

    // price={isToggle ? offer.price.buy : offer.price.leasing}
    //                   isToggle = true    isToggle = false
}

