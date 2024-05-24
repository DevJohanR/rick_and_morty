import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Button from "../Button/Button";
const Nav = (props) => {

  return (
    <div>
       <SearchBar onSearch={props.onSearch} />
       <Button name={"Random"}  />
    </div>
  )
}

export default Nav