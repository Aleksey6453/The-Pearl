import React from 'react'
import styles from './Search.module.scss'
import { AppContext } from '../../App'

const Search = () => {
  const {searchValue, setSearchValue} = React.useContext(AppContext)

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
