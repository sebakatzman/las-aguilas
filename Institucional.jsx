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
            <p>
              El Club de Rugby y Hockey Las Águilas nació en 1982 en la ciudad de Ushuaia,
              en el corazón de la Patagonia argentina. Un grupo de apasionados por el deporte
              decidió fundar lo que hoy es el club más austral del planeta, en uno de los rincones
              más extremos del mundo. Desde sus primeros años, el club creció en valores, esfuerzo
              y hermandad, convirtiéndose en un pilar fundamental de la comunidad ushuaiense.
            </p>
            <p>
              A lo largo de más de cuatro décadas, Las Águilas forjó generaciones de deportistas
              que no solo se destacaron dentro del campo de juego, sino que llevaron los colores
              del club con orgullo en toda la Patagonia y el país. El viento de la estepa, el frío
              del sur y la pasión por el rugby y el hockey son parte del ADN de este club único en
              el mundo.
            </p>
            <p>
              <em>— Texto completo próximamente proporcionado por el presidente del club —</em>
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
          <div className="fundadores-grid">
            {[
              { nombre: 'Federico Sciurano', rol: 'Fundador', relato: '"Llegamos a Ushuaia con la pelota oval bajo el brazo y la convicción de que el rugby llegaría al fin del mundo. Y lo logramos."' },
              { nombre: 'Ramiro Requejado', rol: 'Fundador', relato: '"Aquellos primeros entrenamientos en el frío patagónico nos curtieron de una manera que ningún otro lugar hubiera logrado. Las Águilas es más que un club."' },
            ].map(f => (
              <div key={f.nombre} className="fundador-card">
                <div className="fundador-avatar">{f.nombre.charAt(0)}</div>
                <h4>{f.nombre}</h4>
                <span className="fundador-rol">{f.rol}</span>
                <p>{f.relato}</p>
              </div>
            ))}
          </div>
          <p className="inst-placeholder">
            * Los relatos reales de fundadores y ex jugadores serán incorporados próximamente.
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
