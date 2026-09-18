import React from 'react'
import './Administracion.css'

const TEL_CLUB_DISPLAY = '+54 9 2901 46-5578'
const TEL_CLUB_WA = '5492901465578'
const MAIL_CLUB = 'clasaguilas@gmail.com'
const IG_CLUB = 'https://www.instagram.com/clublasaguilas/'
const MAPS_CLUB = 'https://maps.app.goo.gl/?q=Club+Las+Aguilas+Ushuaia'

export default function Administracion() {
  const waSocio = `https://wa.me/${TEL_CLUB_WA}?text=${encodeURIComponent('Hola, me gustaría asociarme al Club Las Águilas.')}`
  const waQuincho = `https://wa.me/${TEL_CLUB_WA}?text=${encodeURIComponent('Hola, quiero consultar por el alquiler del quincho.')}`
  const mailSocio = `mailto:${MAIL_CLUB}?subject=${encodeURIComponent('Quiero ser socio del Club Las Águilas')}`
  const mailQuincho = `mailto:${MAIL_CLUB}?subject=${encodeURIComponent('Consulta por alquiler del quincho')}`

  return (
    <section id="administracion" className="administracion">
      <div className="container">
        <h2 className="section-title">Administración & Contacto</h2>
        <div className="divider" />
        <p className="section-subtitle">Estamos para ayudarte</p>

        {/* Info de contacto */}
        <div className="contacto-cards">
          <div className="contacto-card">
            <span className="contacto-icon">📞</span>
            <h4>Teléfono del Club</h4>
            <p>{TEL_CLUB_DISPLAY}</p>
            <a
              href={`https://wa.me/${TEL_CLUB_WA}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-contacto-link"
            >
              WhatsApp →
            </a>
          </div>
          <div className="contacto-card">
            <span className="contacto-icon">📧</span>
            <h4>Mail Oficial</h4>
            <p>{MAIL_CLUB}</p>
            <a href={`mailto:${MAIL_CLUB}`} className="btn-contacto-link">Enviar mail →</a>
          </div>
          <div className="contacto-card">
            <span className="contacto-icon">📍</span>
            <h4>Dirección</h4>
            <p>Ushuaia, Tierra del Fuego</p>
            <a href={MAPS_CLUB} target="_blank" rel="noopener noreferrer" className="btn-contacto-link">
              Ver en Google Maps →
            </a>
          </div>
          <div className="contacto-card">
            <span className="contacto-icon">📸</span>
            <h4>Instagram</h4>
            <p>@clublasaguilas</p>
            <a href={IG_CLUB} target="_blank" rel="noopener noreferrer" className="btn-contacto-link">
              Ver perfil →
            </a>
          </div>
        </div>

        <div className="admin-grid">
          {/* Hacerse socio */}
          <div className="admin-box">
            <div className="admin-box-header">
              <span>🦅</span>
              <h3>Quiero ser Socio</h3>
            </div>
            <p className="admin-box-desc">
              Sumate a la familia de Las Águilas. Para hacerte socio comunicate con
              nosotros vía mail o WhatsApp y te contamos los pasos a seguir.
            </p>
            <div className="cta-buttons">
              <a href={waSocio} target="_blank" rel="noopener noreferrer" className="btn-submit verde">
                💬 WhatsApp {TEL_CLUB_DISPLAY}
              </a>
              <a href={mailSocio} className="btn-submit verde alt">
                📧 {MAIL_CLUB}
              </a>
            </div>
          </div>

          {/* Alquilar quincho */}
          <div className="admin-box">
            <div className="admin-box-header">
              <span>🏠</span>
              <h3>Alquilar el Quincho</h3>
            </div>
            <p className="admin-box-desc">
              El club cuenta con instalaciones disponibles para alquilar. Para consultar
              disponibilidad y precios, comunicate vía mail o WhatsApp.
            </p>
            <div className="cta-buttons">
              <a href={waQuincho} target="_blank" rel="noopener noreferrer" className="btn-submit dorado">
                💬 WhatsApp {TEL_CLUB_DISPLAY}
              </a>
              <a href={mailQuincho} className="btn-submit dorado alt">
                📧 {MAIL_CLUB}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
