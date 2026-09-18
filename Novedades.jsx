import React, { useEffect, useState } from 'react'
import './Novedades.css'

const fotosPlaza = [
  '/Fotos/plaza1.jpeg',
  '/Fotos/plaza2.jpeg',
  '/Fotos/plaza3.jpeg',
  '/Fotos/plaza4.jpeg',
]

const fotosProyecto = [
  '/Fotos/proyecto1.jpeg',
  '/Fotos/proyecto2.jpeg',
  '/Fotos/proyecto3.jpeg',
  '/Fotos/proyecto4.jpeg',
  '/Fotos/proyecto5.jpeg',
]

export default function Novedades() {
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = (images, index, title) => {
    setLightbox({ images, index, title })
  }

  const closeLightbox = () => setLightbox(null)

  const showPrev = () => {
    setLightbox(current => ({
      ...current,
      index: current.index === 0 ? current.images.length - 1 : current.index - 1,
    }))
  }

  const showNext = () => {
    setLightbox(current => ({
      ...current,
      index: current.index === current.images.length - 1 ? 0 : current.index + 1,
    }))
  }

  useEffect(() => {
    if (!lightbox) return

    const handleKeyDown = event => {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowLeft') showPrev()
      if (event.key === 'ArrowRight') showNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightbox])

  return (
    <section id="novedades" className="novedades">
      <div className="container">
        <h2 className="section-title">Novedades</h2>
        <div className="divider" />
        <p className="section-subtitle">Todo lo que se viene en el club</p>

        <div className="novedades-stack">
          <div className="novedad-card">
            <span className="novedad-badge">🎉 Inauguración</span>
            <h3>Plaza "Piedra de los Deseos"</h3>
            <p>
              El 03/02/2026 inauguramos la Plaza, gracias a la colaboración de las familias
              de los Socios: Bongiovanni, Funes y Begue.
            </p>

            <div className="novedad-galeria plaza-galeria">
              {fotosPlaza.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  className="novedad-item"
                  onClick={() => openLightbox(fotosPlaza, i, 'Plaza Piedra de los Deseos')}
                >
                  <img src={src} alt={`Plaza Piedra de los Deseos ${i + 1}`} loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          <div className="novedad-card master-plan-card">
            <span className="novedad-badge">Planificación</span>
            <h3>Master Plan</h3>
            <p>
              Proyecto a futuro para seguir creciendo como club, ordenando espacios y soñando
              nuevas mejoras para toda la comunidad de Las Águilas.
            </p>

            <div className="novedad-galeria">
              {fotosProyecto.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  className="novedad-item"
                  onClick={() => openLightbox(fotosProyecto, i, 'Master Plan')}
                >
                  <img src={src} alt={`Master Plan ${i + 1}`} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {lightbox && (
        <div className="novedad-lightbox" role="dialog" aria-modal="true" aria-label={lightbox.title}>
          <button type="button" className="lightbox-backdrop" aria-label="Cerrar imagen" onClick={closeLightbox} />
          <div className="lightbox-content">
            <button type="button" className="lightbox-close" aria-label="Cerrar imagen" onClick={closeLightbox}>×</button>
            <button type="button" className="lightbox-nav lightbox-prev" aria-label="Imagen anterior" onClick={showPrev}>‹</button>
            <img src={lightbox.images[lightbox.index]} alt={`${lightbox.title} ${lightbox.index + 1}`} />
            <button type="button" className="lightbox-nav lightbox-next" aria-label="Imagen siguiente" onClick={showNext}>›</button>
            <div className="lightbox-caption">
              <span>{lightbox.title}</span>
              <span>{lightbox.index + 1} / {lightbox.images.length}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
