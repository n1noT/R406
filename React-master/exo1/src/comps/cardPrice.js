'use client';

function Advantage({ text, check }) {
    let checkmark = check ? "✓" : "\u00A0\u00A0\u00A0"
        return (
            <li className="advantage">
                <span className="advantage__checkmark">{checkmark}</span>
                <p className="advantage__text">{text}</p>
    
            </li>
    
        );
    
}

export default function OfferCard({label, price, advantages, handler}) {

    return (
        <div className="offer-box">
                <div className="offer-box__header">
                    <h3 className="offer-box__name">{label}</h3>
                    <p className="offer-box__price">{price}</p>
                </div>

                <ul>
                    {advantages.map((item, index) => (
                        <Advantage key={index} text={item.text} check={item.check}/>
                    ))}
                </ul>

                <a href='#' className="header__lien">
                    <button onClick={handler} className="header__button btn--hero__nav"> Get Started</button>
                </a>
                
            
        </div>
    );

}