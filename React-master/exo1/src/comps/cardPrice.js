'use client';

function Advantage({ advantage }) {
    return (
        <>
            <span class="advantage__checkmark">{advantage.check}</span>
            <p class="advantage__text">{advantage.text}</p>

        </>

    );
}

export default function OfferCard({ advTab }) {

    let advList = []

    for (let advData of advTab) {

        advList.push(
            <li className="advantage">
                <Advantage advantage={advData} />
            </li>
        );

    }

    return (
        <>
            <ul className="offer-box">
                <li class="offer-box__header">
                    <h3 class="offer-box__name">{offer.name}</h3>
                    <p class="offer-box__price">{offer.price}</p>
                </li>

                {advList}
                
                <li>
                    <a href={form.link} class="header__lien">
                    <button class="header__button btn--hero__nav"> {form.btn}</button></a>
                </li>
            </ul>
        </>
    );

}