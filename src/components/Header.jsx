import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/img/logo.png'
import Search from './Search/Index'

const Header = () => {
  return (
    <div className='header'>
      <Link to={'/'}>
        <div className='block j_con_start'>
          <img src={logo} alt="logo" className='logo'/>
          <h1 className='title'>
            Pearl
          </h1>
        </div>
      </Link>
      
      <div className='block j_con_end'>
        <Search />
        <Link to={'/cart'}>
          <h2>  
            Cart
          </h2>
        </Link>
      </div> 
    </div>
  )
}

export default Header
