import React from 'react'

const Card = (props) => {
    console.log(props.price)
  return (
    <div className='card'>

        <h2>
               {props.title}
        </h2>
        <p>
            <b>
                {props.price} $
            </b>
        </p>
    </div>
  )
}

export default Card
