import React from 'react'
import styles from './Search.module.scss'

const Search = () => {
  return (
    <div className={styles.root}>
      <input type="text" placeholder='Search...' />
    </div>
  )
}

export default Search
