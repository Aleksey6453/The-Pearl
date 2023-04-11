import React from 'react'
import Card from './Card'

const Content = () => {
  return (
    <>
      <h1>
        Content
      </h1>
      <div className='content'>
        <Card title='Black' price={323}/>
        <Card title='Gold' price={317}/>
        <Card title='Teal' price={377}/>
      </div>
    
    </>
  )
}

export default Content
