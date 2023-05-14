import React from 'react'
import styles from './Search.module.scss'
import { AppContext } from '../../App'
import debounce from 'lodash.debounce'


const Search = () => {
  const [value, setValue] = React.useState('')
  const {setSearchValue} = React.useContext(AppContext)

  const updateSearchValue = React.useCallback(
    debounce((str)=>{
      console.log(str)
      setSearchValue(str)
    }, 1500),
    [],
  );

  const onChangeInput = e => {
    setValue(e.target.value)
    updateSearchValue(e.target.value)
  }

 

  return (
    <div className={styles.root}>
      <input value={value}
             onChange={onChangeInput}
             type="text" 
             placeholder='Search...'
             />
    </div>
  )
}

export default Search
