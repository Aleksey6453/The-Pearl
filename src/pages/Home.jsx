 import React from 'react'
 import { useSelector, useDispatch } from 'react-redux'
 import {setCategoryId} from '../redux/slices/filterSlice'
 
 import Categories from '../components/Categories'
 import Sort from '../components/Sort'
 import Card from '../components/Card'
 import Skeleton from '../components/Skeleton'
 import Pagination from '../components/pagination/Index'
 import { AppContext } from '../App'


 const Home = () => {
  const dispatch = useDispatch();
  const {categoryId, sort} = useSelector(state => state.filterSlice);
  // const sortType = sort.sortProperty
  

  console.log('redux state', categoryId)






  const {searchValue} = React.useContext(AppContext)
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [currentPage, setCurrentPage] = React.useState(1)

  const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
  const sortBy = sort.sortProperty.replace('-', '');
  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const search = searchValue ? `&search=${searchValue}` : '';


  const onClickCategory = (id) => {
      console.log(id)
      dispatch(setCategoryId(id));
  }
 
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
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

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
          <Categories value={categoryId} onClickCat={onClickCategory}/>
          <Sort />
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
 