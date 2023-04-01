import React from 'react'
import { useNavigate } from 'react-router-dom'
function NewBook() {
  const navigate = useNavigate();
  const goToback =()=>{
    navigate('/')
  }
  return (
    <>
    <h1 onClick={()=>{goToback()}}>Newbook up....</h1>
    </>
  )
}

export default NewBook
