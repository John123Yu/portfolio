import React, { useState } from 'react'
import styled from 'styled-components'

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Portfolio from './components/Porfolio'
import ContactForm from './components/Contact'
import Resume from './components/Resume'

const ABOUT_ME = 'About Me'
const PORTFOLIO = 'Portfolio'
const CONTACT = 'Contact'
const RESUME = 'Resume'
const categories = [ABOUT_ME, PORTFOLIO, CONTACT, RESUME]

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 50px;
  height: 400px;
`
function App () {
  const [currentCategory, setCurrentCategory] = useState(categories[0])

  return (
    <div>
      <Header
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <StyledPage>
        {currentCategory === ABOUT_ME && <About />}
        {currentCategory === PORTFOLIO && <Portfolio />}
        {currentCategory === CONTACT && <ContactForm />}
        {currentCategory === RESUME && <Resume />}
      </StyledPage>
      <Footer />
    </div>
  )
}

export default App
