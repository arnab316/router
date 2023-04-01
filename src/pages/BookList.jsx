import React from 'react'
import { NavLink } from 'react-router-dom'

function BookList() {
  return (
    <><h1>BooKList</h1>
     <NavLink to='/books/1'>Books 1</NavLink>
     <br />
     <NavLink to='/books/2'>Books 2 </NavLink> 
     <br />
     <NavLink to='/books/new'>New 2 Book</NavLink> 
    </>
  )
}

export default BookList
