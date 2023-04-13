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
          <li onClick= {()=>onClickCategory(0)} className={activeIndex === 0 ? 'active' : ''}>{el + i}</li>
        )  
        )
      }
      
     </ul>
    </div>
  )
}

export default Categories
