import React, { useState } from 'react'
import './Hockey.css'

const categorias = [
  { nombre: 'Sub 6 / Sub 8', responsables: 'Anahí Hernández, Leila Pérez, Luciana Álvarez, Karen Molina' },
  { nombre: 'Sub 10', responsables: 'Pamela Toledo' },
  { nombre: 'Sub 12', responsables: 'Pamela Toledo' },
  { nombre: 'Sub 14', responsables: 'Fernando Obregón — Bárbara Hotz' },
  { nombre: 'Sub 16', responsables: 'Fernando Obregón' },
  { nombre: 'Intermedia', responsables: 'Leonardo' },
  { nombre: 'Primera', responsables: 'Fernando Obregón' },
  { nombre: 'Mamis', responsables: 'Fernando Temporetti' },
]

const staff = [
  { rol: 'Director Deportivo', nombre: 'Fernando Obregón', desc: 'Responsable del desarrollo deportivo del hockey.' },
]

// Galería hockey — fotos actuales enviadas por el club.
const fotosHockey = [
  '/Fotos/hok1.jpg',
  '/Fotos/hok2.JPG',
  '/Fotos/hok3.jpg',
  '/Fotos/hok4.jpg',
  '/Fotos/hok5.jpg',
  '/Fotos/hok6.jpg',
]

// Placeholder hasta que el club provea fotos históricas de hockey.
const fotosHistoricasHockey = [
  '/Fotos/hok1.jpg',
  '/Fotos/hok2.JPG',
  '/Fotos/hok3.jpg',
  '/Fotos/hok4.jpg',
  '/Fotos/hok5.jpg',
  '/Fotos/hok6.jpg',
]

export default function Hockey() {
  const [tab, setTab] = useState('actuales')

  return (
    <section id="hockey" className="hockey">
      <div className="hockey-banner">
        <div className="hockey-banner-overlay" />
        <div className="hockey-banner-content">
          <span className="hockey-badge">🏑 Hockey</span>
          <h2>Hockey Las Águilas</h2>
          <p>Pasión, fuerza y talento femenino en la Patagonia</p>
        </div>
      </div>

      <div className="container">
        {/* Logro destacado */}
        <div className="hockey-logro">
          <img src="/Fotos/nacionalhockey.jpg" alt="Sub 14 Campeonas Nacionales" />
          <div className="hockey-logro-overlay" />
          <div className="hockey-logro-texto">
            <span className="hockey-logro-badge">🏆 ¡Campeonas!</span>
            <h3>Sub 14 Campeonas Nacionales</h3>
            <p>Las chicas de Sub 14 se consagraron campeonas nacionales, un logro histórico para el hockey de Las Águilas.</p>
          </div>
        </div>

        {/* Staff */}
        <div className="hockey-staff">
          <h3>Cuerpo Técnico</h3>
          <div className="staff-grid">
            {staff.map((s, i) => (
              <div key={i} className="staff-card">
                <div className="staff-avatar hockey-avatar">{s.rol.charAt(0)}</div>
                <span className="staff-rol">{s.rol}</span>
                <span className="staff-nombre">{s.nombre}</span>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Categorías */}
        <div className="hockey-categorias">
          <h3>Categorías</h3>
          <div className="categorias-grid">
            {categorias.map((c, i) => (
              <div key={i} className="categoria-card hockey-cat">
                <span className="categoria-nombre">{c.nombre}</span>
                <p>{c.responsables}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Galería */}
        <div className="hockey-galeria">
          <h3>Galería</h3>
          <div className="galeria-tabs">
            <button className={tab === 'actuales' ? 'active' : ''} onClick={() => setTab('actuales')}>Fotos Actuales</button>
            <button className={tab === 'historicas' ? 'active' : ''} onClick={() => setTab('historicas')}>Fotos Históricas</button>
          </div>
          <div className="galeria-grid">
            {(tab === 'actuales' ? fotosHockey : fotosHistoricasHockey).map((src, i) => (
              <div key={i} className="galeria-item">
                <img src={src} alt={`Hockey ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
