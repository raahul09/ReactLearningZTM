import React from 'react'
import Card from '../Card/Card.component';
import './card-list.component.css'
const CardList = ({ monsters }) => {

    return (
        <div className='card-list'>
            {monsters.map((monster) => { 
                return <Card monster={monster} key={monster.id}></Card>
            })
            }
        </div>
    )
}

export default CardList;