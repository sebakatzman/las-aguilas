import React, { useState } from 'react'
import './Rugby.css'

const categorias = [
  { nombre: 'M6 / M8', responsables: 'María José "Majin" Fernández' },
  { nombre: 'M10 / M12', responsables: 'Lucas Cerra y Ailu Subiabre' },
  { nombre: 'M14', responsables: 'Efraín Gonzáles y Jeremías Covacich' },
  { nombre: 'M16', responsables: 'Ángel "Oso" Figueroa' },
  { nombre: 'M18', responsables: 'Matías Salvado y Carlos Casabella' },
  { nombre: 'Intermedia y Primera Masculino', responsables: 'Bruno Pani — Ramiro Cofreces' },
  { nombre: 'Primera Femenino', responsables: 'Mariano Paredes' },
]

const staff = [
  { rol: 'Director Deportivo', nombre: 'Diego "Kun" Acuña', desc: 'Responsable del desarrollo deportivo del club.' },
  { rol: 'Head Coach Primera', nombre: 'Bruno Pani', desc: 'Entrenador principal del equipo de primera división.' },
  { rol: 'Referente de Infantiles', nombre: 'María José "Majin" Fernández', desc: 'Referente de las categorías infantiles.' },
]

// Galería: reemplazar por fotos sin resultados escritos (evitar capturas de Instagram).
const fotosActuales = [
  '/Fotos/PRIMERA2021.jpg',
  '/Fotos/PRIMERA2022 COMODORO.jpg',
  '/Fotos/rug3.jpg',
  '/Fotos/M182020.jpg',
  '/Fotos/INFANTILES2020.jpg',
  '/Fotos/rug6.jpg',
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
            {staff.map((s, i) => (
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
                <p>{c.responsables}</p>
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
