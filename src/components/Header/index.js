import React from 'react'
import Nav from '../Nav'

function Header ({ categories, currentCategory ,setCurrentCategory }) {
  return (
    <section className='my-5'>
      <h1>John Yu</h1>
      <Nav categories={categories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
    </section>
  )
}

export default Header
