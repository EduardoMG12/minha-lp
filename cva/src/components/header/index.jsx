import React from 'react'
import {Container} from './styled'

export default function index() {
  return (
      <Container>
          <header>
              <div className="logo"><img src="" alt=""/></div>
              <div>
                  <nav>
                      <ul>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Projetos</a></li>
                <li><a href="#">Conhecimentos</a></li>
                <li><a href="#">Contato</a></li>
                      </ul>
                  </nav>
              </div>
          </header>
      </Container>
  )
}
