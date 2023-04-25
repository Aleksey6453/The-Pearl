import React from 'react'
import arrow from '../assets/img/arrow_up.svg'
import arrow_down from '../assets/img/arrow_down.svg'
import {useSelector, useDispatch} from 'react-redux'
import { setSort } from '../redux/slices/filterSlice'

const Sort = () => {
const dispatch = useDispatch();
const sort = useSelector(state => state.filterSlice.sort)

const [openPopup, setOpenPopup] = React.useState(false)
const list = [
    {name:'top sellers DESC', sortProperty: 'rating'},
    {name:'top sellers ASC', sortProperty: '-rating'},
    {name:'alphabetical (ZtoA)', sortProperty:'title'},
    {name:'alphabetical (AtoZ)', sortProperty:'-title'}, 
    {name:'price is going down', sortProperty:'price'},
    {name:'price is going up', sortProperty:'-price'}
  ]

const onClickListItem = (obj) => {
  dispatch(setSort(obj));
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
     
      <b className='marg_r_10'>sort by:</b>
      <span>{sort.name}</span>
     </div>
     {openPopup && (
         <div className="sort_popup">
            <ul>
              {
                list.map((obj, i)=> (
                  <li key={i}
                      onClick={()=> onClickListItem(obj)}
                      className={sort.sortProperty === obj.sortProperty ? 'active' : ''}
                   >{obj.name}</li>
                ))
              }
            </ul>
          </div>
     )}
    
    </div>
  )
}

export default Sort
