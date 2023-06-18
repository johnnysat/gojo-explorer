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
      <div className="cardNews">
        <News titleCard={"Teste"}
          subCard={"Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis.Cevadis im ampola pa arma uma pindureta.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Quem num gosta di mim que vai caçá sua turmis!"} />
        <News titleCard={"Teste"}
          subCard={"Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis.Cevadis im ampola pa arma uma pindureta.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Quem num gosta di mim que vai caçá sua turmis!"} />
      </div>
    </>
  )
}

export default App
