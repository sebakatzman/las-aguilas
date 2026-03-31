import React from 'react'
import './Autoridades.css'

const comision = [
  { cargo: 'Presidente', nombre: 'Nombre a confirmar', icon: '👑' },
  { cargo: 'Vicepresidente', nombre: 'Nombre a confirmar', icon: '🦅' },
  { cargo: 'Secretario', nombre: 'Nombre a confirmar', icon: '📋' },
  { cargo: 'Prosecretario', nombre: 'Nombre a confirmar', icon: '📋' },
  { cargo: 'Tesorero', nombre: 'Nombre a confirmar', icon: '💼' },
  { cargo: 'Protesorero', nombre: 'Nombre a confirmar', icon: '💼' },
  { cargo: 'Vocal Titular 1', nombre: 'Nombre a confirmar', icon: '⚡' },
  { cargo: 'Vocal Titular 2', nombre: 'Nombre a confirmar', icon: '⚡' },
  { cargo: 'Vocal Titular 3', nombre: 'Nombre a confirmar', icon: '⚡' },
  { cargo: 'Vocal Suplente 1', nombre: 'Nombre a confirmar', icon: '⚡' },
  { cargo: 'Vocal Suplente 2', nombre: 'Nombre a confirmar', icon: '⚡' },
  { cargo: 'Revisor de Cuentas', nombre: 'Nombre a confirmar', icon: '🔍' },
]

export default function Autoridades() {
  return (
    <section id="autoridades" className="autoridades">
      <div className="container">
        <h2 className="section-title">Autoridades</h2>
        <div className="divider" />
        <p className="section-subtitle">Comisión Directiva — Quiénes somos</p>

        <div className="comision-grid">
          {comision.map((m, i) => (
            <div key={i} className="comision-card">
              <span className="comision-icon">{m.icon}</span>
              <span className="comision-cargo">{m.cargo}</span>
              <span className="comision-nombre">{m.nombre}</span>
            </div>
          ))}
        </div>

        <p className="autoridades-placeholder">
          * Los datos de la comisión directiva serán proporcionados por el club próximamente.
        </p>
      </div>
    </section>
  )
}
