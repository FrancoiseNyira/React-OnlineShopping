import React from 'react';
import '../Styles/Cards.css';

const Cards = ({item, handleClick}) => {
    const {title, brand, price, thumbnail} = item;

  return (
    <div className='cards'>
        <div className='image_box'>
            <img src={thumbnail} alt="Product visual" />
        </div>
        <div className='details'>
            <p>{title}</p>
            <p>{brand}</p>
            <p>Price - {price}Rwf</p>
            <button onClick={()=>handleClick(item)}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards
