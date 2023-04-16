import React from 'react'
import arrow from '../assets/img/arrow_up.svg'
import arrow_down from '../assets/img/arrow_down.svg'

const Sort = () => {
const [openPopup, setOpenPopup] = React.useState(false)
const [selected, setSelected] = React.useState(0)

const list = ['top sellers', 'alphabetical (AtoZ)', 'new arrivals', 'price (low to high)', 'price (high to low)']
const onClickListItem = (i) => {
  setSelected(i);
  setOpenPopup(false);
};
  return (
    <div  onClick={()=>setOpenPopup(!openPopup)} className='sort'>
     <div className="sort_label">
      {openPopup ? 
        <img src={arrow} width={20} alt="triangle" className='triangle'/>
       : 
        <img src={arrow_down} width={20} alt="triangle" className='triangle'/>
      }
     
      <b>sort by: </b>
      <span>{list[selected]}</span>
     </div>
     {openPopup && (
         <div className="sort_popup">
            <ul>
              {
                list.map((el, i)=> (
                  <li key={i}
                      onClick={()=> onClickListItem(i)}
                      className={selected === i ? 'active' : ''}
                   >{el}</li>
                ))
              }
            </ul>
          </div>
     )}
    
    </div>
  )
}

export default Sort
