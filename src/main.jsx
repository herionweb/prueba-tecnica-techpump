import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/normalize.css'
import './index.scss'
import logo from './assets/logo.png'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <section className='section'>
      <img src={logo} alt="logo techpump"/>
      <App />
    </section>
    <footer className='footer'>
      <p>2016-2021 Siroko Solutions S.L.</p>
      <p>Todos los derechos reservados. <a href='###'>Ver bases.</a></p>
    </footer>
    </>
)
