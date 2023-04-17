import React from 'react'
import Card from './Card'
import Skeleton from './Skeleton'


const Content = () => {
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(()=>{
    fetch('https://6424ae787ac292e3cfef8991.mockapi.io/items')
    .then((res)=>{
      return res.json()
    })
    .then((arr)=>{
      setItems(arr)
      setIsLoading(false)
    });
  }, []);

  return (
    <>
      <h1>
        Content
      </h1>
      <div className='content'>
        {
          isLoading ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : 
          items.map(obj => <Card key={obj.id} {... obj} />)
        }
      </div>
    
    </>
  )
}

export default Content
