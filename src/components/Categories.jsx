import React from 'react'

const Categories = () => {

  const [activeIndex, setActiveIndex] = React.useState(0)

  const onClickCategory = (index) => {
    setActiveIndex(index)
  }
  return (
    <div>
     <ul className='categories'>
      <li onClick= {()=>onClickCategory(0)} className={activeIndex === 0 ? 'active' : ''}>All</li>
      <li onClick= {()=>onClickCategory(1)} className={activeIndex === 1 ? 'active' : ''}>Dark</li>
      <li onClick= {()=>onClickCategory(2)} className={activeIndex === 2 ? 'active' : ''}>Light</li>
      <li onClick= {()=>onClickCategory(3)} className={activeIndex === 3 ? 'active' : ''}>Colorful</li>
     </ul>
    </div>
  )
}

export default Categories
