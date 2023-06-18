import React from 'react';
import './App.css'

import Header from './components/header/header'
import Carousel from './components/carousel/carousel'
import News from './components/news/news';
import Footer from './components/footer/footer'


function App() {

  return (
    <>
      <Header />
      <Carousel />
      <h2 className="titleNews">Últimas Atualizações</h2>
      <div className="cardNews">
        <News titleCard={"Mangá 226"}
          subCard={"Análise do Capítulo 226 do Mangá de Jujutsu Kaisen. Como se trata do mangá, contém spoilers do que ainda irá acontecer no anime."} />
        <News titleCard={"Retorno do Anime"}
          subCard={"O anime de Jujutsu Kaisen retorna no dia 06 de Julho! Dê uma olhadinha para mais informações aqui."} />
        <News titleCard={"Jujutsu Kaisen Game"}
          subCard={"O jogo de Jujutsu Kaisen, Phanton Pararede, ganhou data de estréia, vídeo de gameplay, link para pré-registro e muito mais! Vem conferir todos os detalhes aqui."} />
        <News titleCard={"RPG - Aoi Todo"}
          subCard={"Confira como ficou a habilidade de Aoi Todo ao ser transformada para RPG aqui. Discussão sobre a dificuldade, suas limitações, formas de uso e interações."} />
        <News titleCard={"Teste"}
          subCard={"Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis.Cevadis im ampola pa arma uma pindureta.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Quem num gosta di mim que vai caçá sua turmis!"} />
      </div>
      <Footer />
    </>
  )
}

export default App
