import React, { useState } from 'react'
import './Hockey.css'

const categorias = [
  { nombre: 'Sub-10', descripcion: 'Iniciación al hockey sobre césped con juego y alegría.' },
  { nombre: 'Sub-12', descripcion: 'Desarrollo de habilidades técnicas básicas.' },
  { nombre: 'Sub-14', descripcion: 'Competencia zonal con crecimiento constante.' },
  { nombre: 'Sub-16', descripcion: 'Alto nivel de exigencia técnica y física.' },
  { nombre: 'Sub-18', descripcion: 'Preparación para el hockey mayor.' },
  { nombre: 'Primera División', descripcion: 'El equipo femenino más austral del país.' },
]

const fotosHockey = [
  '/Fotos/1.jpg',
  '/Fotos/3.jpg',
  '/Fotos/5.jpg',
  '/Fotos/7.jpg',
  '/Fotos/9.jpg',
  '/Fotos/11.jpg',
]

const fotosHistoricasHockey = [
  '/Fotos/1.jpg',
  '/Fotos/3.jpg',
  '/Fotos/5.jpg',
  '/Fotos/7.jpg',
  '/Fotos/9.jpg',
  '/Fotos/11.jpg',
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
        {/* Subcomisión */}
        <div className="hockey-subcomision">
          <h3>Subcomisión de Hockey</h3>
          <div className="subcomision-grid">
            {[
              { cargo: 'Presidenta de Subcomisión', nombre: 'A confirmar' },
              { cargo: 'Secretaria', nombre: 'A confirmar' },
              { cargo: 'Tesorera', nombre: 'A confirmar' },
              { cargo: 'Vocal', nombre: 'A confirmar' },
            ].map((m, i) => (
              <div key={i} className="subcomision-card">
                <div className="sub-avatar">{m.cargo.charAt(0)}</div>
                <span className="sub-cargo">{m.cargo}</span>
                <span className="sub-nombre">{m.nombre}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Staff */}
        <div className="hockey-staff">
          <h3>Cuerpo Técnico</h3>
          <div className="staff-grid">
            {[
              { rol: 'Directora Deportiva', nombre: 'A confirmar', desc: 'Responsable del desarrollo deportivo del hockey.' },
              { rol: 'Head Coach Primera', nombre: 'A confirmar', desc: 'Entrenadora principal del equipo de primera.' },
              { rol: 'Entrenadora Formativas', nombre: 'A confirmar', desc: 'A cargo de todas las categorías juveniles.' },
              { rol: 'Preparadora Física', nombre: 'A confirmar', desc: 'Acondicionamiento físico de todos los planteles.' },
            ].map((s, i) => (
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
                <p>{c.descripcion}</p>
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
