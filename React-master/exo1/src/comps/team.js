import Card from'./card'

export default function Team(team) {

    let cardList = []
   

    for(let userData of team.employees){

        cardList.push(
            <li className="gallery__pic">
                <Card user={userData}/>
            </li>        
        );
    
    }

    return (
        <>
            <header class="team__header">
                <h2 class="team__title">{team.header}</h2>
            </header>

            <section class="team__content">
                <h1 class="team__heading">{team.content.title}</h1>
                <p class="team__description">{team.content.desc}</p>
            </section>

            <ul className="gallery">
                {cardList}
            </ul>
        </>
      );

  }