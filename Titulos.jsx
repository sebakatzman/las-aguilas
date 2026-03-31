import React from 'react'
import './Titulos.css'

const titulos = [
  { year: '2023', titulo: 'Campeón Patagónico M18', deporte: 'Rugby' },
  { year: '2022', titulo: 'Campeón Patagónico Primera', deporte: 'Rugby' },
  { year: '2022', titulo: 'Campeón Regional Primera', deporte: 'Hockey' },
  { year: '2021', titulo: 'Campeón Patagónico M16', deporte: 'Rugby' },
  { year: '2019', titulo: 'Campeón Patagónico M18', deporte: 'Rugby' },
  { year: '2018', titulo: 'Campeón Patagónico Primera', deporte: 'Rugby' },
  { year: '2017', titulo: 'Campeón Regional Sub-16', deporte: 'Hockey' },
  { year: '2016', titulo: 'Campeón Seven Interno', deporte: 'Rugby' },
  { year: '2014', titulo: 'Campeón Patagónico Veteranos', deporte: 'Rugby' },
  { year: '2010', titulo: 'Campeón Patagónico Primera', deporte: 'Rugby' },
  { year: '2005', titulo: 'Campeón Regional Primera', deporte: 'Rugby' },
  { year: '1998', titulo: 'Campeón Patagónico Primera', deporte: 'Rugby' },
]

export default function Titulos() {
  return (
    <section id="titulos" className="titulos">
      <div className="titulos-bg" />
      <div className="container">
        <h2 className="section-title">Títulos Obtenidos</h2>
        <div className="divider" />
        <p className="section-subtitle">El palmarés de Las Águilas</p>

        <div className="titulos-stats">
          <div className="stat-box">
            <span className="stat-num">12+</span>
            <span className="stat-label">Títulos totales</span>
          </div>
          <div className="stat-box">
            <span className="stat-num">40+</span>
            <span className="stat-label">Años de historia</span>
          </div>
          <div className="stat-box">
            <span className="stat-num">2</span>
            <span className="stat-label">Disciplinas</span>
          </div>
          <div className="stat-box">
            <span className="stat-num">∞</span>
            <span className="stat-label">Pasión aguileña</span>
          </div>
        </div>

        <div className="titulos-lista">
          {titulos.map((t, i) => (
            <div key={i} className={`titulo-item ${t.deporte === 'Hockey' ? 'hockey' : 'rugby'}`}>
              <span className="titulo-year">{t.year}</span>
              <div className="titulo-info">
                <span className="titulo-nombre">{t.titulo}</span>
                <span className={`titulo-deporte ${t.deporte === 'Hockey' ? 'badge-hockey' : 'badge-rugby'}`}>
                  {t.deporte === 'Rugby' ? '🏉' : '🏑'} {t.deporte}
                </span>
              </div>
              <div className="titulo-trofeo">🏆</div>
            </div>
          ))}
        </div>

        <p className="titulos-placeholder">
          * Palmarés completo y definitivo a confirmar por el club.
        </p>
      </div>
    </section>
  )
}
