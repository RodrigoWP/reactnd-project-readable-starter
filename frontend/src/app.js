'use strict'

import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from 'layout'

import Main from './containers'
import Posts from './containers/posts'

import 'css/main.styl'
import style from 'css/app.styl'

const { Header, Content } = Layout

// <Router>
// <Switch>
// <Route exact path='/' component={Main} />
// </Switch>
// </Router>

class App extends PureComponent {
  render () {
    return (
      <Layout>
        <Header />
        <Content>
          O que é Lorem Ipsum?
          Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado
          desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer
          um livro de modelos de tipos.Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para
          a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a
          Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado
          a softwares de editoração eletrônica como Aldus PageMaker.

          O que é Lorem Ipsum?
          Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado
          desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer
          um livro de modelos de tipos.Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para
          a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a
          Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado
          a softwares de editoração eletrônica como Aldus PageMaker.

          O que é Lorem Ipsum?
          Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado
          desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer
          um livro de modelos de tipos.Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para
          a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a
          Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado
          a softwares de editoração eletrônica como Aldus PageMaker.

          O que é Lorem Ipsum?
          Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado
          desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer
          um livro de modelos de tipos.Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para
          a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a
          Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado
          a softwares de editoração eletrônica como Aldus PageMaker.

          O que é Lorem Ipsum?
          Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado
          desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer
          um livro de modelos de tipos.Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para
          a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a
          Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado
          a softwares de editoração eletrônica como Aldus PageMaker.

          O que é Lorem Ipsum?
          Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado
          desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer
          um livro de modelos de tipos.Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para
          a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a
          Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado
          a softwares de editoração eletrônica como Aldus PageMaker.

          O que é Lorem Ipsum?
          Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado
          desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer
          um livro de modelos de tipos.Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para
          a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a
          Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado
          a softwares de editoração eletrônica como Aldus PageMaker.

          O que é Lorem Ipsum?
          Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado
          desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer
          um livro de modelos de tipos.Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para
          a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a
          Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado
          a softwares de editoração eletrônica como Aldus PageMaker.

          O que é Lorem Ipsum?
          Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado
          desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer
          um livro de modelos de tipos.Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para
          a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a
          Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado
          a softwares de editoração eletrônica como Aldus PageMaker.


          O que é Lorem Ipsum?
          Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado
          desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer
          um livro de modelos de tipos.Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para
          a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a
          Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado
          a softwares de editoração eletrônica como Aldus PageMaker.


          O que é Lorem Ipsum?
          Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado
          desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer
          um livro de modelos de tipos.Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para
          a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a
          Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado
          a softwares de editoração eletrônica como Aldus PageMaker.


          O que é Lorem Ipsum?
          Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado
          desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer
          um livro de modelos de tipos.Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para
          a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a
          Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado
          a softwares de editoração eletrônica como Aldus PageMaker.
        </Content>
      </Layout>
    )
  }
}

export default App
