import OfferCard from'/cardPrice'

export default function Price ({}){
    let offList = []

    for (let offData of offList) {

        offList.push(
            <li className="offer-box">
                <OfferCard advTab={offData} />
            </li>
        );

    }

    return (
        <>
            <ul className="offer-box">
                

                {offList}
                
                
            </ul>
        </>
    );
}

