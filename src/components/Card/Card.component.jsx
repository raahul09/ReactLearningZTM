import React from 'react'
import './card.style.css'
function Card({ monster }) {
// const [id, name, email] = monster;
  // console.log(id);
  return (
    <div className='card-items' >
        <img src={`https://robohash.org/${monster.id}?set=set2&size=210x210`} alt={`monster ${monster.name}`} />
        <h2>{monster.name}</h2>
        <p>{monster.email}</p>
      </div>
  )
}

export default Card;