import React from 'react'

const Categories = () => {

  const [activeIndex, setActiveIndex] = React.useState(0)

  const categories = ['All', 'Dark', 'Light', 'Colorful']

  const onClickCategory = (index) => {
    setActiveIndex(index)
  }
  return (
    <div>
     <ul className='categories'>
      {
        categories.map((el, i)=> (
          <li key={i} onClick= {()=>onClickCategory(i)} className={activeIndex === i ? 'active' : ''}>{el}</li>
        )  
        )
      }
      
     </ul>
    </div>
  )
}

export default Categories
