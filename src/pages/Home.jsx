 import React from 'react'

 import Categories from '../components/Categories'
 import Sort from '../components/Sort'
 import Card from '../components/Card'
 import Skeleton from '../components/Skeleton'

 const Home = () => {

  const [categoryId, setCategoryId] = React.useState(0)
  const [sortType, setSortType] = React.useState({
    name:'top sellers', 
    sortProperty: 'rating'
  })
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
  const sortBy = sortType.sortProperty.replace('-', '');

  React.useEffect(()=>{
   
    setIsLoading(true)
    fetch(`https://6424ae787ac292e3cfef8991.mockapi.io/items?${
          categoryId > 0 ? `category=${categoryId}` : ''
        }&sortBy=${sortBy}&order=${order}`
        )
    .then((res)=>{
      return res.json()
    })
    .then((arr)=>{
      setItems(arr)
      setIsLoading(false)
    });
    window.scrollTo(0,0);
  }, [categoryId, sortType]);

  console.log(categoryId, sortType)

   return (
    <div className="wrapper">
        <div className="meny">
          <Categories value={categoryId} onClickCat={(i) => setCategoryId(i)}/>
          <Sort value={sortType} onChangeSort={(i) => setSortType(i)}/>
        </div>
        
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
    </div>
   )
 }
 
 export default Home
 