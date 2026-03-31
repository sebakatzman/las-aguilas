import React, { useState } from 'react'
import './Administracion.css'

export default function Administracion() {
  const [formSocio, setFormSocio] = useState({ nombre: '', email: '', tel: '', mensaje: '' })
  const [formQuincho, setFormQuincho] = useState({ nombre: '', email: '', tel: '', fecha: '', evento: '' })

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
            <p>+54 (0)2966 — A confirmar</p>
            <span className="contacto-horario">Lunes a Viernes 9:00 – 18:00</span>
          </div>
          <div className="contacto-card">
            <span className="contacto-icon">📧</span>
            <h4>Mail Oficial</h4>
            <p>contacto@lasaguilas.com.ar</p>
            <a href="mailto:contacto@lasaguilas.com.ar" className="btn-contacto-link">Enviar mail →</a>
          </div>
          <div className="contacto-card">
            <span className="contacto-icon">📍</span>
            <h4>Dirección</h4>
            <p>Ushuaia, Tierra del Fuego</p>
            <span className="contacto-horario">Patagonia Argentina</span>
          </div>
          <div className="contacto-card">
            <span className="contacto-icon">📸</span>
            <h4>Instagram</h4>
            <p>@lasaguilasrugby</p>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="btn-contacto-link">Ver perfil →</a>
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
              Sumate a la familia de Las Águilas. Como socio vas a poder acceder a beneficios exclusivos,
              participar en asambleas y ser parte de la historia del club más austral del planeta.
            </p>
            <form className="admin-form" onSubmit={e => e.preventDefault()}>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Tu nombre completo"
                  value={formSocio.nombre}
                  onChange={e => setFormSocio({ ...formSocio, nombre: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Tu email"
                  value={formSocio.email}
                  onChange={e => setFormSocio({ ...formSocio, email: e.target.value })}
                />
              </div>
              <input
                type="tel"
                placeholder="Tu teléfono"
                value={formSocio.tel}
                onChange={e => setFormSocio({ ...formSocio, tel: e.target.value })}
              />
              <textarea
                placeholder="¿Alguna consulta adicional? (opcional)"
                rows={3}
                value={formSocio.mensaje}
                onChange={e => setFormSocio({ ...formSocio, mensaje: e.target.value })}
              />
              <button type="submit" className="btn-submit verde">
                Quiero ser socio 🦅
              </button>
            </form>
          </div>

          {/* Alquilar quincho */}
          <div className="admin-box">
            <div className="admin-box-header">
              <span>🏠</span>
              <h3>Alquilar el Quincho</h3>
            </div>
            <p className="admin-box-desc">
              El club cuenta con instalaciones disponibles para alquilar. Ideal para cumpleaños, 
              eventos corporativos, reuniones y celebraciones. Consultanos disponibilidad y precios.
            </p>
            <form className="admin-form" onSubmit={e => e.preventDefault()}>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Tu nombre completo"
                  value={formQuincho.nombre}
                  onChange={e => setFormQuincho({ ...formQuincho, nombre: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Tu email"
                  value={formQuincho.email}
                  onChange={e => setFormQuincho({ ...formQuincho, email: e.target.value })}
                />
              </div>
              <div className="form-row">
                <input
                  type="tel"
                  placeholder="Tu teléfono"
                  value={formQuincho.tel}
                  onChange={e => setFormQuincho({ ...formQuincho, tel: e.target.value })}
                />
                <input
                  type="date"
                  value={formQuincho.fecha}
                  onChange={e => setFormQuincho({ ...formQuincho, fecha: e.target.value })}
                />
              </div>
              <input
                type="text"
                placeholder="Tipo de evento"
                value={formQuincho.evento}
                onChange={e => setFormQuincho({ ...formQuincho, evento: e.target.value })}
              />
              <button type="submit" className="btn-submit dorado">
                Consultar disponibilidad 🏠
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
