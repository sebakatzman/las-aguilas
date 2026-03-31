import React from 'react'
import './Sponsors.css'

const mainSponsors = [
  { nombre: 'Sponsor Principal 1', descripcion: 'Main Sponsor del Club Las Águilas', emoji: '⭐' },
  { nombre: 'Sponsor Principal 2', descripcion: 'Main Sponsor del Club Las Águilas', emoji: '⭐' },
  { nombre: 'Sponsor Principal 3', descripcion: 'Main Sponsor del Club Las Águilas', emoji: '⭐' },
]

const sponsorsPublicitarios = [
  { nombre: 'Empresa A', emoji: '🏢' },
  { nombre: 'Empresa B', emoji: '🏢' },
  { nombre: 'Empresa C', emoji: '🏢' },
  { nombre: 'Empresa D', emoji: '🏢' },
  { nombre: 'Empresa E', emoji: '🏢' },
  { nombre: 'Empresa F', emoji: '🏢' },
]

export default function Sponsors() {
  return (
    <section id="sponsors" className="sponsors">
      <div className="container">
        <h2 className="section-title">Sponsors</h2>
        <div className="divider" />
        <p className="section-subtitle">Quienes hacen posible a Las Águilas</p>

        {/* Main Sponsors */}
        <div className="sponsors-main-title">
          <span>🏆 Main Sponsors</span>
        </div>
        <div className="main-sponsors-grid">
          {mainSponsors.map((s, i) => (
            <div key={i} className="main-sponsor-card">
              <div className="sponsor-logo-placeholder">{s.emoji}</div>
              <h4>{s.nombre}</h4>
              <p>{s.descripcion}</p>
            </div>
          ))}
        </div>

        {/* Sponsors Publicitarios */}
        <div className="sponsors-main-title" style={{ marginTop: 60 }}>
          <span>📢 Sponsors Publicitarios</span>
        </div>
        <div className="sponsors-pub-grid">
          {sponsorsPublicitarios.map((s, i) => (
            <div key={i} className="sponsor-pub-card">
              <div className="sponsor-pub-logo">{s.emoji}</div>
              <span>{s.nombre}</span>
            </div>
          ))}
        </div>

        {/* CTA Ser Sponsor */}
        <div className="sponsor-cta">
          <div className="sponsor-cta-inner">
            <h3>¿Querés ser sponsor de Las Águilas?</h3>
            <p>
              Asociá tu marca al club de rugby y hockey más austral del planeta. 
              Formá parte de una institución con más de 40 años de historia, 
              presencia en toda la Patagonia y una comunidad fiel y apasionada.
            </p>
            <div className="sponsor-benefits">
              <div className="benefit">
                <span>📣</span>
                <p>Visibilidad en redes sociales</p>
              </div>
              <div className="benefit">
                <span>👕</span>
                <p>Logo en indumentaria oficial</p>
              </div>
              <div className="benefit">
                <span>🏟️</span>
                <p>Publicidad en cancha</p>
              </div>
              <div className="benefit">
                <span>🤝</span>
                <p>Presencia en eventos del club</p>
              </div>
            </div>
            <a href="mailto:contacto@lasaguilas.com.ar" className="btn-ser-sponsor">
              Quiero ser Sponsor →
            </a>
          </div>
        </div>

        <p className="sponsors-placeholder">
          * Los logos de sponsors reales serán incorporados próximamente.
        </p>
      </div>
    </section>
  )
}
