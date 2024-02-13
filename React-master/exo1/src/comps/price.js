import OfferCard from'./cardPrice'

export default function Price (prices){
    let offList = []

    for (let offData of prices.offers) {

        offList.push(
            <ul className="offer-box">
                <OfferCard {...offData} />
            </ul>
        );

    }

    return (
        <>
            
            <h2 class="offer-section__title">{prices.header}</h2>

            <p class="offer-section__description">{prices.content.desc}</p>
            

            <div className="box">
                
                {offList}
               
                
            </div>
        </>
      );
}

