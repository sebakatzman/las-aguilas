import React from 'react'
import './Indumentaria.css'

export default function Indumentaria() {
  return (
    <section id="indumentaria" className="indumentaria">
      <div className="container">
        <h2 className="section-title">Indumentaria</h2>
        <div className="divider" />
        <p className="section-subtitle">Vestí los colores del club más austral del Mundo</p>

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

