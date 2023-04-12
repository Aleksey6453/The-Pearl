import React from 'react'
import Card from './Card'

const Content = () => {
  return (
    <>
      <h1>
        Content
      </h1>
      <div className='content'>
        <Card title='Blecko' price={323} image='img/pearl/1.jpg'/>
        <Card title='Urbacrespo' price={389} image='img/pearl/2.jpg'/>
        <Card title='Zertove' price={377} image='img/pearl/3.jpg'/>
        <Card title='Gealun' price={322} image='img/pearl/4.jpg'/>
        <Card title='Reqs' price={365} image='img/pearl/5.jpg'/>
        <Card title='Tealisimo' price={317} image='img/pearl/6.jpg'/>
        <Card title='Jivel' price={382} image='img/pearl/7.jpg'/>
        <Card title='Lunoro-Bello' price={369} image='img/pearl/8.jpg'/>
        <Card title='Teamo' price={367} image='img/pearl/9.jpg'/>
      </div>
    
    </>
  )
}

export default Content
