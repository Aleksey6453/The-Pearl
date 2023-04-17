 import React from 'react'

 import Categories from '../components/Categories'
 import Sort from '../components/Sort'
 import Content from '../components/Content'
 
 const Home = () => {
   return (
    <div className="wrapper">
        <div className="meny">
          <Categories />
          <Sort />
        </div>
          <Content />
    </div>
   )
 }
 
 export default Home
 