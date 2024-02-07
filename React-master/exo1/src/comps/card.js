'use client' ; 

export default function Card({user}) {
    return (
       <>
        <img src={user.img} alt={user.occupation} className="gallery__image"/>
        <div className="gallery__div">
            <img src="./assets/bgshapes.svg"/>
            <div className="gallery__txt">
                <h2> {user.name}</h2>
                <h3 className="gallery__work">{user.occupation}</h3>
            </div>
        </div>
        </>
   
    );
  }

