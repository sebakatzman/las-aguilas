import React from 'react'
import './Institucional.css'

export default function Institucional() {
  return (
    <section id="institucional" className="institucional">
      <div className="container">
        <h2 className="section-title">Institucional</h2>
        <div className="divider" />
        <p className="section-subtitle">Nuestra historia, nuestras raíces</p>

        <div className="inst-grid">
          <div className="inst-historia">
            <h3>Reseña Histórica</h3>
            <p className="inst-placeholder">
              <em>— Texto próximamente proporcionado por el club —</em>
            </p>
          </div>

          <div className="inst-fotos-historia">
            <div className="foto-historica">
              <img src="/Fotos/PRIMERA1992.jpg" alt="Primera 1992" />
              <span>Primera — 1992</span>
            </div>
            <div className="foto-historica">
              <img src="/Fotos/PRIMERA1996.jpg" alt="Primera 1996" />
              <span>Primera — 1996</span>
            </div>
            <div className="foto-historica">
              <img src="/Fotos/PRIMERA1998.jpg" alt="Primera 1998" />
              <span>Primera — 1998</span>
            </div>
          </div>
        </div>

        <div className="inst-fundadores">
          <h3>Fundadores & Relatos</h3>
          <p className="inst-placeholder">
            <em>— Fundadores y relatos próximamente proporcionados por el club —</em>
          </p>
        </div>

        <div className="inst-presidentes">
          <h3>Presidentes del Club</h3>
          <div className="presidentes-lista">
            {[
              { nombre: 'Federico Sciurano', periodo: '1990 – 1992' },
              { nombre: 'Horacio Roque Vedia', periodo: '1992 – 1997' },
              { nombre: 'José Monte de Oca', periodo: '1997 – 2000' },
              { nombre: 'Jorge Dante Caldelari', periodo: '2000 – 2002' },
              { nombre: 'Francisco Lerario', periodo: '2002 – 2004' },
              { nombre: 'Mariana Begue', periodo: '2004 – 2006' },
              { nombre: 'Francisco Lerario', periodo: '2006 – 2011' },
              { nombre: 'Juan Castro Videla', periodo: '2011 – 2012' },
              { nombre: 'Alejandro Aguirre Gonzalez', periodo: '2012 – 2013' },
              { nombre: 'Maximilano Gonzalez', periodo: '2013 – 2014' },
              { nombre: 'Juan Castro Videla', periodo: '2014 – 2016' },
              { nombre: 'Ramiro Requejado', periodo: '2016 – 2020' },
              { nombre: 'Sebastián Robelin', periodo: '2020 – 2024' },
              { nombre: 'Esteban Moscoso', periodo: '2024 – 2026' },
            ].map(p => (
              <div key={`${p.nombre}-${p.periodo}`} className="presidente-item">
                <span className="presidente-nombre">{p.nombre}</span>
                <span className="presidente-periodo">{p.periodo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
