import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const AddProduct = ({setItems,items}) => {

    const [item, setItem] = useState({ price: "", name: "" });
    const [image,setImage] = useState('');

    const changeItem = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value })
      }


      const addItem = () => {
        setItems([...items, item])
        setItem({ price: "", name: ""})
        setImage({image:""})
      }

  return (
    <div>
    <div className="col col-6 m-auto pupup-body mt-5">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input value={item.name} onChange={changeItem} name='name' type="text" className="form-control" placeholder="Ibiraha" />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input value={item.price} onChange={changeItem} name='price' type="number" className="form-control" placeholder="299 rwf" />
        </div>


        <div className="mb-3">
          <label className="form-label">image</label>
          <input value={image} onChange={(e) =>setImage(e.target.value)} type="url" className="form-control" placeholder='add an image'/>
        </div>

      
        <div className="mb4">
          <button onClick={addItem} className='btn btn-warning'>SAVE</button>
          <Link className='btn btn-danger ml-5' to="/">Back to homepage</Link>
        </div>
      </div>
    </div>
  )
}

export default AddProduct

