import Card from'./card'

export default function Team({header, content, userTab}) {

    let cardList = []

    for(let userData of userTab){

        cardList.push(
            <li className="gallery__pic">
                <Card user={userData}/>
            </li>        
        );
    
    }

    return (
        <>
            <header class="team__header">
                <h2 class="team__title">{header.title}</h2>
            </header>

            <section class="team__content">
                <h1 class="team__heading">{content.title}</h1>
                <p class="team__description">{content.desc}</p>
            </section>

            <ul className="gallery">
                {cardList}
            </ul>
        </>
      );

  }