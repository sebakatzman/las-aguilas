import React, { useState, useEffect } from 'react'
import './Hero.css'

// Slides alternados rugby / hockey / rugby / hockey ...
// Reemplazar por las fotos definitivas manteniendo el orden alternado.
const slides = [
  '/Fotos/_DSC9629.JPG',        // rugby
  '/Fotos/nacionalhockey.jpg',  // hockey
  '/Fotos/_DSC9759.JPG',        // rugby
  '/Fotos/hok4.jpg',            // hockey (4ª de Fotos Actuales)
  '/Fotos/_DSC9892.JPG',        // rugby
  '/Fotos/hok3.jpg',            // hockey (3ª de Fotos Actuales)
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="hero">
      {slides.map((src, i) => (
        <div
          key={src}
          className={`hero-slide ${i === current ? 'active' : ''}`}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-badge">Fundado en 1990</div>
        <h1 className="hero-title">LAS ÁGUILAS</h1>
        <p className="hero-tagline">El Club de Rugby y Hockey<br />más Austral del Mundo</p>
        <div className="hero-divider" />
        <p className="hero-location">📍 Ushuaia, Tierra del Fuego — Patagonia Argentina</p>
        <div className="hero-buttons">
          <a
            href="#rugby"
            className="btn-primary"
            onClick={e => { e.preventDefault(); document.querySelector('#rugby')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Rugby
          </a>
          <a
            href="#hockey"
            className="btn-secondary"
            onClick={e => { e.preventDefault(); document.querySelector('#hockey')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Hockey
          </a>
          <a
            href="https://www.instagram.com/clublasaguilas/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ig"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
        </div>
      </div>
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button key={i} className={`dot ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)} />
        ))}
      </div>
      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  )
}
