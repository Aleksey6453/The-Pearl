 import React from 'react'
 import Categories from '../components/Categories'
 import Sort, { list } from '../components/Sort'
 import Card from '../components/Card'
 import Skeleton from '../components/Skeleton'
 import Pagination from '../components/pagination/Index'
 import { AppContext } from '../App'
 import axios from 'axios'
 import qs from 'qs'
 import {useNavigate} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId, setCurrentPage, setFilters} from '../redux/slices/filterSlice'

 const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isSearch = React.useRef(false)
  const isMounted = React.useRef(false)

  const {categoryId, sort, currentPage} = useSelector(state => state.filter)
 
 
  const {searchValue} = React.useContext(AppContext)

  const onChangeCategory = (id) => {
    console.log(id)
    dispatch(setCurrentPage(id))
  }
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  // const [currentPage, setCurrentPage] = React.useState(1)

  const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
  const sortBy = sort.sortProperty.replace('-', '');
  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const search = searchValue ? `&search=${searchValue}` : '';

  const onChangePage = number => {
    dispatch(setCurrentPage(number))
  }


  const fetchPearls = () => {
    setIsLoading(true)

    axios.get(`https://6424ae787ac292e3cfef8991.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
    .then(res => {
      setItems(res.data)
      setIsLoading(false)
    })
  }
 
  React.useEffect(()=>{
    window.scrollTo(0,0);

    if(!isSearch.current){
      fetchPearls();
    }
    isSearch.current  = false
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  React.useEffect(()=>{
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = list.find(obj => obj.sortProperty === params.sortProperty)
      
      dispatch(
        setFilters({
          ...params,
          sort
        })
      );
      isSearch.current = true;
    }
  }, [])

  React.useEffect(() => {
    if (isMounted.current){
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage
      })
  
      navigate(`?${queryString}`)
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

  const pearls = items.map((obj)=> <Card key={obj.id} {... obj} />);    

   return (
    <div className="wrapper">
        <div className="meny">
          <Categories value={categoryId} onClickCat={onChangeCategory}/>
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
          <Pagination onChangePage={onChangePage} currentPage={currentPage} />
    </div>
   )
 }
 
 export default Home
 