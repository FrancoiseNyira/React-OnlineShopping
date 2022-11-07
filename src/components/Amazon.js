import React from 'react';
// import list from '../data';
import '../Styles/Amazon.css';
import Cards from './Cards';
import axios from 'axios';
import { useState } from 'react';

const Amazon = ({handleClick}) => {
  const [items, setItems] = useState([]);

  const fetchProducts = async () => {
    const response = await  axios.get(`https://dummyjson.com/products`);
setItems(response.data.products);
 }
 if(items.length < 1){
    fetchProducts();}

  return (
    <section>
        {
            items.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick}/>
            ))
        }
    </section>
  )
}

export default Amazon