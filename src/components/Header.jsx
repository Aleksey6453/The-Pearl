import React from 'react'
import logo from '../assets/img/logo.png'

const Header = () => {
  return (
    <div className='header'>
      <div className='block j_con_start'>
        <img src={logo} alt="logo" className='logo'/>
        <h1 className='title'>
          Pearl
        </h1>
      </div>
      <div className='block j_con_end'>
        <h2>  
          Cart
        </h2>
      </div> 
    </div>
  )
}

export default Header
