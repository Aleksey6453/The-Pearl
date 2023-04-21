import React from 'react'
import {Link} from 'react-router-dom'
import CardCart from '../components/CardCart'

const Cart = () => {
  return (
    <div className='wrapper'>
     <div className="gorizontal_cart">
      <h1>Cart</h1>
      <button>Delete cart</button>
     </div>
       <CardCart />
     <div>
      <h3>Total price: </h3>
     </div>
     <div className='gorizontal_cart'>
      <Link to = {'/'} >
        <button>
          Return to the page
        </button>
      </Link>
      <button>
        By now
      </button>
     </div>
    </div>
  )
}

export default Cart
