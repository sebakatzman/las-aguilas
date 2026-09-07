import React from 'react'
import './Indumentaria.css'

const productos = [
  { nombre: 'Camiseta Primera', descripcion: 'Camiseta oficial de primera división. Verde y dorado.', precio: 'Consultar precio', emoji: '🏉' },
  { nombre: 'Camiseta Alternativa', descripcion: 'Camiseta alternativa blanca con detalles verdes.', precio: 'Consultar precio', emoji: '👕' },
  { nombre: 'Buzo Institucional', descripcion: 'Buzo de entrenamiento con logo bordado del club.', precio: 'Consultar precio', emoji: '🧥' },
  { nombre: 'Short de Juego', descripcion: 'Short oficial para partidos. Negro con logo club.', precio: 'Consultar precio', emoji: '🩳' },
  { nombre: 'Gorra Águilas', descripcion: 'Gorra bordada con el escudo del club.', precio: 'Consultar precio', emoji: '🧢' },
  { nombre: 'Remera Polo', descripcion: 'Polo institucional para eventos y actos del club.', precio: 'Consultar precio', emoji: '👔' },
  { nombre: 'Botines', descripcion: 'Botines de rugby disponibles en talles limitados.', precio: 'Consultar precio', emoji: '👟' },
  { nombre: 'Medias Oficiales', descripcion: 'Medias de juego rayadas verde y dorado.', precio: 'Consultar precio', emoji: '🧦' },
]

export default function Indumentaria() {
  return (
    <section id="indumentaria" className="indumentaria">
      <div className="container">
        <h2 className="section-title">Indumentaria & Merchandising</h2>
        <div className="divider" />
        <p className="section-subtitle">Vestí los colores del club más austral del planeta</p>

        <div className="indumentaria-grid">
          {productos.map((p, i) => (
            <div key={i} className="producto-card">
              <div className="producto-emoji">{p.emoji}</div>
              <h4>{p.nombre}</h4>
              <p>{p.descripcion}</p>
              <span className="producto-precio">{p.precio}</span>
              <button className="btn-consultar">Consultar</button>
            </div>
          ))}
        </div>

        <div className="indumentaria-cta">
          <div className="cta-box">
            <h3>Boutique del Club</h3>
            <p>
              Pasate por nuestra boutique en el club los días Martes y Jueves de 18.30 a 20hs
              y los Sábados de 12 a 16hs. Contactanos por WhatsApp con July o con el Oso para
              consultar por indumentaria.
            </p>
            <div className="cta-buttons">
              <a
                href="https://wa.me/5492901458251?text=Hola%20July%2C%20quiero%20consultar%20por%20la%20boutique%20del%20club"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-cta"
              >
                💬 WhatsApp con July
              </a>
              <a
                href="https://wa.me/5492901476742?text=Hola%2C%20quiero%20consultar%20por%20la%20boutique%20del%20club"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-cta"
              >
                💬 WhatsApp con el Oso
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
