import React from 'react'

const Card = ({price, title, imageUrl, sizes, types}) => {
    const typeNames = ['matte', 'glossy']
    const [activeType, setActiveType] = React.useState(0)
    const [activeSize, setActiveSize] = React.useState(0)
    const [pearlCount, setPearlCount] = React.useState(0)
    const onClickButton = () => {
        setPearlCount( prev => prev+1 )
    }
  return (
    <div className='card'>
        <img src= {imageUrl} alt="photo" />

        <h2 className='title'>
               {title}
        </h2>
        <p>
            <b>
                {price} $
            </b>
        </p>
        <ul>
            {
                sizes.map((size, i) =>(
                <li key={i} onClick={()=>setActiveSize(i)} className={activeSize === i ? 'active' : ''}>{size}</li>
                ))
            }
        </ul>
        <ul>
            {
                types.map(i=>(
                <li key={i} onClick={()=> setActiveType(i)} className={activeType === i ? 'active' : ''}>{typeNames[i] }</li>
                ))
            }
        </ul>
        <button onClick={onClickButton}>
            Add pearl +  <span>{pearlCount}</span>
        </button>
    </div>
  )
}

export default Card
