import React, { useState } from 'react'
import './Rugby.css'

const categorias = [
  { nombre: 'M8 / M10', descripcion: 'Los más pequeños del club, aprenden los valores del rugby desde chicos.' },
  { nombre: 'M12', descripcion: 'Categoría infantil con foco en el juego y el compañerismo.' },
  { nombre: 'M14', descripcion: 'Desarrollo técnico y táctico en etapa de formación.' },
  { nombre: 'M16', descripcion: 'Competencia regional con gran nivel de exigencia.' },
  { nombre: 'M18', descripcion: 'Transición al rugby adulto. Campeones patagónicos.' },
  { nombre: 'Primera División', descripcion: 'El equipo principal del club. Orgullo de Las Águilas.' },
  { nombre: 'Veteranos', descripcion: 'Los históricos del club que siguen jugando con pasión.' },
]

const fotosActuales = [
  '/Fotos/PRIMERA2021.jpg',
  '/Fotos/PRIMERA2022 COMODORO.jpg',
  '/Fotos/M162022.jpg',
  '/Fotos/M182020.jpg',
  '/Fotos/INFANTILES2020.jpg',
  '/Fotos/INTER2022.jpg',
]

const fotosHistoricas = [
  '/Fotos/PRIMERA2010.jpg',
  '/Fotos/PRIMERA2019.jpg',
  '/Fotos/VETERANOS2014.jpg',
  '/Fotos/PRIMERA1992.jpg',
  '/Fotos/PRIMERA1996.jpg',
  '/Fotos/PRIMERA1998.jpg',
]

export default function Rugby() {
  const [tab, setTab] = useState('actuales')

  return (
    <section id="rugby" className="rugby">
      <div className="rugby-banner">
        <div className="rugby-banner-overlay" />
        <div className="rugby-banner-content">
          <span className="deporte-badge">🏉 Rugby</span>
          <h2>Rugby Las Águilas</h2>
          <p>Más de 40 años de historia oval en la Patagonia</p>
        </div>
      </div>

      <div className="container">
        {/* Staff */}
        <div className="rugby-staff">
          <h3>Cuerpo Técnico</h3>
          <div className="staff-grid">
            {[
              { rol: 'Director Deportivo', nombre: 'A confirmar', desc: 'Responsable del desarrollo deportivo del club.' },
              { rol: 'Head Coach Primera', nombre: 'A confirmar', desc: 'Entrenador principal del equipo de primera división.' },
              { rol: 'Entrenador Formativas', nombre: 'A confirmar', desc: 'A cargo de todas las categorías juveniles.' },
              { rol: 'Preparador Físico', nombre: 'A confirmar', desc: 'Acondicionamiento físico de todos los planteles.' },
            ].map((s, i) => (
              <div key={i} className="staff-card">
                <div className="staff-avatar">{s.rol.charAt(0)}</div>
                <span className="staff-rol">{s.rol}</span>
                <span className="staff-nombre">{s.nombre}</span>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Categorías */}
        <div className="rugby-categorias">
          <h3>Categorías</h3>
          <div className="categorias-grid">
            {categorias.map((c, i) => (
              <div key={i} className="categoria-card">
                <span className="categoria-nombre">{c.nombre}</span>
                <p>{c.descripcion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Galería */}
        <div className="rugby-galeria">
          <h3>Galería</h3>
          <div className="galeria-tabs">
            <button className={tab === 'actuales' ? 'active' : ''} onClick={() => setTab('actuales')}>Fotos Actuales</button>
            <button className={tab === 'historicas' ? 'active' : ''} onClick={() => setTab('historicas')}>Fotos Históricas</button>
          </div>
          <div className="galeria-grid">
            {(tab === 'actuales' ? fotosActuales : fotosHistoricas).map((src, i) => (
              <div key={i} className="galeria-item">
                <img src={src} alt={`Rugby ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
