import React from 'react';
import '../Styles/Cards.css';

const Cards = ({item, handleClick}) => {
    const {title, Manufacturer, price, img} = item;

  return (
    <div className='cards'>
        <div className='image_box'>
            <img src={img} alt="Product visual" />
        </div>
        <div className='details'>
            <p>{title}</p>
            <p>{Manufacturer}</p>
            <p>Price - {price}Rwf</p>
            <button onClick={()=>handleClick(item)}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards
