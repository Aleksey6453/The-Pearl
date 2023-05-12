 import React from 'react'
 
 import Categories from '../components/Categories'
 import Sort from '../components/Sort'
 import Card from '../components/Card'
 import Skeleton from '../components/Skeleton'
 import Pagination from '../components/pagination/Index'
import { AppContext } from '../App'

import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId } from '../redux/slices/filterSlice'

 const Home = () => {

  const dispatch = useDispatch()

  // console.log(dispatch, 'App')
  const categoryId = useSelector(state => state.filter.categoryId)

  // const setCategoryId = () => {}
  // console.log("redux state:", categoryId )
  const {searchValue} = React.useContext(AppContext)

  // const [categoryId, setCategoryId] = React.useState(0)
  const [sortType, setSortType] = React.useState({
    name:'top sellers', 
    sortProperty: 'rating'
  })

  const onChangeCategory = (id) => {
    console.log(id)
    dispatch(setCategoryId(id))
  }
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [currentPage, setCurrentPage] = React.useState(1)

  const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
  const sortBy = sortType.sortProperty.replace('-', '');
  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const search = searchValue ? `&search=${searchValue}` : '';
 
  React.useEffect(()=>{

    setIsLoading(true)
    fetch(`https://6424ae787ac292e3cfef8991.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
        )
    .then((res)=>{
      return res.json()
    })
    .then((arr)=>{
      setItems(arr)
      setIsLoading(false)
    });
    window.scrollTo(0,0);
  }, [categoryId, sortType, searchValue, currentPage]);

  // const pearls = items.filter(obj => {
  //   if (obj.title.toLowerCase().includes(searchValue.toLowerCase())){
  //     return true;
  //   }
  //   return false;
  // }).map((obj)=> <Card key={obj.id} {... obj} />);

  const pearls = items.map((obj)=> <Card key={obj.id} {... obj} />);    

   return (
    <div className="wrapper">
        <div className="meny">
          <Categories value={categoryId} onClickCat={onChangeCategory}/>
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
                pearls
              }
            </div>
          </>
          <Pagination onChangePage={(number)=> setCurrentPage(number)} />
    </div>
   )
 }
 
 export default Home
 