import React from 'react'

const Categories = ({value, onClickCat}) => {

  const categories = ['All', 'Dark', 'Light', 'Colorful']

  return (
    <div>
     <ul className='categories'>
      {
        categories.map((categoryName, i)=> (
          <li key={i} 
              onClick= {()=>onClickCat(i)} 
              className={value === i ? 'active' : ''}>
                {categoryName}
          </li>
        )  
        )
      }
      
     </ul>
    </div>
  )
}

export default Categories
