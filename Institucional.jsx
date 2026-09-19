import React, { useState } from 'react'
import './Institucional.css'

const RESENA_PARRAFOS = [
  'El club Las Águilas inicia sus actividades en el año 1988, contando únicamente en aquel entonces con la disciplina rugby. Ello se dio a partir de la visión distinta de un grupo de jóvenes, que se atrevieron a soñar con un club que propague los principios básicos de ese deporte. Ellos son el sacrificio, el respeto, el compañerismo, la humildad, el bien común por sobre el individual, entre otros.',
  'Luego y con el transcurrir de los años, se logra el 09 de abril de 1990 el hecho fundacional al conseguir su personería jurídica ante el organismo estatal que nuclea a dichos entes. Allí, empieza a tomar cada vez más forma el sueño tan anhelado. Y es así que en ese mismo año, se suma la disciplina Hockey, constituyendo junto al Rugby, las bases deportivas de la institución con el transcurrir del tiempo.',
  'Ya en el año 1994, se celebra el convenio con la Municipalidad de Ushuaia por el predio sito en el Valle del Río Pipo, donde se fija la sede del club. Ello permitió darle una mayor identidad y crecimiento, y a su vez un gran sentido de pertenencia a los socios, siendo sin duda un hecho sobresaliente en la historia de la institución. Y esto posibilitó que en el año 1995, se comience con la construcción del quincho, que se transformará en el punto de encuentro de esa gran familia que es el club fucsia y negro.',
  'A través de los años, la institución ha ido creciendo en sus tres pilares fundamentales, siendo ellos lo institucional, lo deportivo y lo social, sin olvidar las premisas que constituyeron las semillas del club. Si bien la mirada que se pretende tener siempre, es apuntando a formar personas íntegras por sobre lo estrictamente deportivo, no ha sido un impedimento para obtener grandes logros en esta última faz para ambas disciplinas, lográndose la participación en torneos provinciales y regionales, con destacadas actuaciones.',
  'En los últimos años y actualmente, la Comisión Directiva se ha abocado a realizar diferentes obras edilicias como así también la de riego de la cancha principal, para de este modo ofrecer tanto al asociado actual como a los futuros integrantes, mejores instalaciones que redundarán en un espacio de contención y esparcimiento para toda la familia.',
  'El Club Las Águilas es el fiel reflejo del esfuerzo de muchas manos desinteresadas, que colaboran día a día para forjarla como una institución modelo y donde, a través del rugby y el hockey, pueda ser una escuela de vida, teniendo como premisas el divertirse, relacionarse y jugar.',
]

const PARRAFOS_VISIBLES = 3

export default function Institucional() {
  const [expandido, setExpandido] = useState(false)
  const parrafosAMostrar = expandido
    ? RESENA_PARRAFOS
    : RESENA_PARRAFOS.slice(0, PARRAFOS_VISIBLES)

  return (
    <section id="institucional" className="institucional">
      <div className="container">
        <h2 className="section-title">Institucional</h2>
        <div className="divider" />
        <p className="section-subtitle">Nuestra historia, nuestras raíces</p>

        <div className="inst-grid">
          <div className="inst-historia">
            <h3>Reseña Histórica</h3>
            <div className={`inst-historia-texto ${expandido ? 'expandido' : 'colapsado'}`}>
              {parrafosAMostrar.map((texto, i) => (
                <p key={i}>{texto}</p>
              ))}
            </div>
            {RESENA_PARRAFOS.length > PARRAFOS_VISIBLES && (
              <button
                type="button"
                className="inst-toggle"
                onClick={() => setExpandido(v => !v)}
                aria-expanded={expandido}
              >
                {expandido ? 'Mostrar menos' : 'Seguir leyendo'}
              </button>
            )}
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
