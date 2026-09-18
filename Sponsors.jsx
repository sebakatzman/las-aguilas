import React from 'react'
import './Sponsors.css'

// Orden = orden de aporte (los que más pagan primero). Archivos en public/Fotos/.
const mainSponsors = Array.from({ length: 11 }, (_, i) => `/Fotos/log${i + 1}.png`)

// Publicitarios 12–37: 12–32 son <n>.png, 33–37 son log<n>.png.
const sponsorsPublicitarios = Array.from({ length: 37 - 12 + 1 }, (_, i) => {
  const n = i + 12
  return n <= 32 ? `/Fotos/${n}.png` : `/Fotos/log${n}.png`
})

export default function Sponsors() {
  // Duplicamos la lista para que el loop del marquee sea continuo (sin salto).
  const mainLoop = [...mainSponsors, ...mainSponsors]
  const pubLoop = [...sponsorsPublicitarios, ...sponsorsPublicitarios]

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
        <div className="sponsors-marquee main">
          <div className="marquee-track">
            {mainLoop.map((src, i) => (
              <div key={`${src}-${i}`} className="marquee-item">
                <img src={src} alt={`Main sponsor ${(i % mainSponsors.length) + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Sponsors Publicitarios */}
        <div className="sponsors-main-title" style={{ marginTop: 60 }}>
          <span>📢 Sponsors Publicitarios</span>
        </div>
        <div className="sponsors-marquee pub reverse">
          <div className="marquee-track">
            {pubLoop.map((src, i) => (
              <div key={`${src}-${i}`} className="marquee-item">
                <img src={src} alt={`Sponsor ${(i % sponsorsPublicitarios.length) + 12}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Ser Sponsor */}
        <div className="sponsor-cta">
          <div className="sponsor-cta-inner">
            <h3>¿Querés ser sponsor de Las Águilas?</h3>
            <p>
              Asociá tu marca al club de rugby y hockey más austral del Mundo.
              Formá parte de una institución con historia, presencia en toda la
              Patagonia y una comunidad fiel y apasionada.
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
            <a
              href="https://wa.me/5492901465578?text=Hola%2C%20quiero%20ser%20sponsor%20de%20Las%20%C3%81guilas"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ser-sponsor"
            >
              Quiero ser Sponsor →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
