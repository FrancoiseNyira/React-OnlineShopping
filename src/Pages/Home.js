import React from 'react'
import Amazon from '../components/Amazon'

const Home = ({items, handleClick}) => {
  return (
    <>
    <Amazon handleClick={handleClick}/>
    <div className="row">
    <div className="col col-6">
      <ul className="list-group">
        {
          items.map(function (item, index) {
            return (<li key={index} className="list-group-item">
              <div>{item.name}</div>
              <div>{item.price}</div>
            </li>)
          })
        }

      </ul>
    </div>
    <div>
    </div>
  </div>
  </>
  )
}

export default Home