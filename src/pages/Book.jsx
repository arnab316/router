import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Book() {
  const {id}=useParams();
  return (
    <>
      <h1>Book {id}</h1>
      {/* <Link to='/books/1'>Books 1</Link>
      <Link to='/books/2'>Books 2 </Link> */}
    </>
  )
}

export default Book
