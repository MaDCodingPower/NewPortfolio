import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out Destinations</h1>
        <div className='cards__container'>            
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/img-3.jpg'
                    text='doing the griddy'
                    label='Project 1'
                    path='/projects'
                    />
                    <CardItem 
                    src='images/img-3.jpg'
                    text='doing the griddy'
                    label='Project 1'
                    path='/projects'
                    />               
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/img-3.jpg'
                    text='doing the griddy'
                    label='Project 1'
                    path='/projects'
                    />
                    <CardItem 
                    src='images/img-3.jpg'
                    text='doing the griddy'
                    label='Project 1'
                    path='/projects'
                    />
                    <CardItem 
                    src='images/img-3.jpg'
                    text='doing the griddy'
                    label='Project 1'
                    path='/projects'
                    />                
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards