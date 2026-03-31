import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-logo">🦅 Club Las Águilas</h3>
            <p className="footer-slogan">Rugby & Hockey — Ushuaia, Tierra del Fuego</p>
            <p className="footer-desc">
              Más de 40 años de historia deportiva en la Patagonia austral. Formando jugadores, personas y comunidad.
            </p>
          </div>

          <div className="footer-links">
            <h4>Secciones</h4>
            <ul>
              <li><a href="#institucional">Institucional</a></li>
              <li><a href="#rugby">Rugby</a></li>
              <li><a href="#hockey">Hockey</a></li>
              <li><a href="#titulos">Títulos</a></li>
              <li><a href="#indumentaria">Indumentaria</a></li>
              <li><a href="#sponsors">Sponsors</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contacto</h4>
            <ul>
              <li>📍 Ushuaia, Tierra del Fuego</li>
              <li>📧 <a href="mailto:contacto@lasaguilas.com.ar">contacto@lasaguilas.com.ar</a></li>
            </ul>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📸</a>
              <a href="#" aria-label="Twitter">🐦</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Club Las Águilas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
