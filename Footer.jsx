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
              Una historia que comenzó hace 36 años y hoy sigue escribiendo grandes capítulos deportivos y sociales.
              <br />
              <strong>AGUANTE EL FUCSIA Y NEGRO</strong>
            </p>
          </div>

          <div className="footer-links">
            <h4>Secciones</h4>
            <ul>
              <li><a href="#institucional">Institucional</a></li>
              <li><a href="#rugby">Rugby</a></li>
              <li><a href="#hockey">Hockey</a></li>
              <li><a href="#indumentaria">Indumentaria</a></li>
              <li><a href="#sponsors">Sponsors</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contacto</h4>
            <ul>
              <li>📍 Ushuaia, Tierra del Fuego</li>
              <li>📧 <a href="mailto:clasaguilas@gmail.com">clasaguilas@gmail.com</a></li>
              <li>📞 <a href="https://wa.me/5492901465578" target="_blank" rel="noopener noreferrer">+54 9 2901 46-5578</a></li>
            </ul>
            <div className="footer-social">
              <a href="https://www.instagram.com/clublasaguilas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📸</a>
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
