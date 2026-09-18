import React from 'react'
import './Autoridades.css'

const comision = [
  { cargo: 'Presidente', nombre: 'Esteban Moscoso', icon: '👑' },
  { cargo: 'Vicepresidente', nombre: 'Germán Thompson', icon: '🦅' },
  { cargo: 'Secretario', nombre: 'Juan Pablo Castro Videla', icon: '📋' },
  { cargo: 'Pro Secretaria', nombre: 'María Castro Videla', icon: '📋' },
  { cargo: 'Tesorero', nombre: 'Tolkar Lacaze', icon: '💼' },
  { cargo: 'Pro Tesorero', nombre: 'Ramiro Cofreces', icon: '💼' },
  { cargo: 'Vocal 1°', nombre: 'Julieta Ponce', icon: '⚡' },
  { cargo: 'Vocal 2°', nombre: 'Victoria Magni', icon: '⚡' },
  { cargo: 'Vocal 2° Suplente', nombre: 'Carlos Leonardi', icon: '⚡' },
  { cargo: '1° Revisor de Cuentas', nombre: 'Marcelo Salazar', icon: '🔍' },
]

export default function Autoridades() {
  return (
    <section id="autoridades" className="autoridades">
      <div className="container">
        <h2 className="section-title">Autoridades</h2>
        <div className="divider" />
        <p className="section-subtitle">Comisión Directiva 2024 / 2026</p>

        <div className="comision-grid">
          {comision.map((m, i) => (
            <div key={i} className="comision-card">
              <span className="comision-icon">{m.icon}</span>
              <span className="comision-cargo">{m.cargo}</span>
              <span className="comision-nombre">{m.nombre}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
