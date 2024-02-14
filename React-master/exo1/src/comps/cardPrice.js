'use client';

function Advantage({ advantage }) {
    if(advantage.check){
        return (
            <>
                <span class="advantage__checkmark">✓</span>
                <p class="advantage__text">{advantage.text}</p>
    
            </>
    
        );
    }
    else{
        return (
            <>
                <span class="advantage__checkmark"> &nbsp;</span>
                <p class="advantage__text">{advantage.text}</p>
    
            </>
    
        );  
    }
    
}

export default function OfferCard(offers) {

    let advList = []

    
    for (let advData of offers.offerList) {
        console.log(advData)

        advList.push(
            <li key={advData.key} className="advantage">
                <Advantage advantage={advData} />
            </li>
        );

    }

    return (
        <>
            
                <li class="offer-box__header">
                    <h3 class="offer-box__name">{offers.name}</h3>
                    <p class="offer-box__price">{offers.price}</p>
                </li>

                {advList}
                
                <li>
                    <a href={offers.form.link} class="header__lien">
                    <button class="header__button btn--hero__nav"> {offers.form.btn}</button></a>
                </li>
            
        </>
    );

}