import React from 'react'
import './search-box.style.css';

const SearchBox = ({ className, placeholder, onChangeHandler }) => {

  return (
    <input type="search" className={`Search-box ${className}`} placeholder={placeholder} onChange={onChangeHandler} />
  )
}

export default SearchBox;

