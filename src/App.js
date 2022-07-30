import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const categories = ['About Me', 'Portfolio', 'Contact', 'Resume']

function App() {
  const [currentCategory, setCurrentCategory] = useState(categories[0])

  return (
    <div>
      <Header categories={categories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
      <Footer />
    </div>
  );
}

export default App;
