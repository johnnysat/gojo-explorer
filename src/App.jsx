import React from 'react';
import './App.css'

import Header from './components/header/header'
import Carousel from './components/carousel/carousel'
import NavBar from './components/navbar/navbar';
import News from './components/news/news';


function App() {

  return (
    <>
      <Header />
      <Carousel />
      <NavBar />
      <h2 className="titleNews">Últimas Notícias</h2>
      <News />
    </>
  )
}

export default App
