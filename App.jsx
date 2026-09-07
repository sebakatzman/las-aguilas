import React from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Institucional from './Institucional.jsx'
import Autoridades from './Autoridades.jsx'
import Rugby from './Rugby.jsx'
import Hockey from './Hockey.jsx'
import Titulos from './Titulos.jsx'
import Novedades from './Novedades.jsx'
import Indumentaria from './Indumentaria.jsx'
import Sponsors from './Sponsors.jsx'
import Administracion from './Administracion.jsx'
import Footer from './Footer.jsx'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Institucional />
      <Autoridades />
      <Rugby />
      <Hockey />
      <Titulos />
      <Novedades />
      <Indumentaria />
      <Sponsors />
      <Administracion />
      <Footer />
    </div>
  )
}
