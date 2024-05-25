import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Button from "../Button/Button";
import { Link } from 'react-router-dom';
const Nav = (props) => {

  return (
    <div>
       <SearchBar onSearch={props.onSearch} />
       <Button name={"Random"} onClick={props.onRandomSearch}  />
       <Link to="/about"><Button name={"About"} /></Link>
       <Link to="/home"><Button name={"Home"} /></Link>

      
    </div>
  )
}

export default Nav