import React from 'react'
import styles from './Search.module.scss'

const Search = ({searchValue, setSearchValue}) => {


  return (
    <div className={styles.root}>
      <input value={searchValue}
             onChange={(e) => setSearchValue(e.target.value)} 
             type="text" 
             placeholder='Search...' />
    </div>
  )
}

export default Search
