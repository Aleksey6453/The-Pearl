import React from 'react'
import Card from './Card'

import pearls from '../assets/pearl.json'

const Content = () => {
  return (
    <>
      <h1>
        Content
      </h1>
      <div className='content'>
        {
            pearls.map(obj => <Card key={obj.id} {... obj} />)
        }
      </div>
    
    </>
  )
}

export default Content
