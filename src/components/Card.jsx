import React from 'react'

const Card = ({price, title, image}) => {
   const [pearlCount, setPearlCount] = React.useState(0)
    const onClickButton = () => {
        setPearlCount( prev => prev+1 )
    }
  return (
    <div className='card'>
        <img src= {image} alt="photo" />

        <h2 className='title'>
               {title}
        </h2>
        <p>
            <b>
                {price} $
            </b>
        </p>
        <button onClick={onClickButton}>
            Add pearl +  <span>{pearlCount}</span>
        </button>
    </div>
  )
}

export default Card
