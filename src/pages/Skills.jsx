import { Link } from 'react-router-dom'
import { formacao, grupoHabilidades } from '../data/skills.js'
import './Skills.css'

export default function Skills() {
  return (
    <main className="page skills">
      <div className="container">
        <span className="eyebrow">Sobre mim</span>
        <h1 className="page__titulo">Minhas habilidades</h1>
        <p className="page__texto">
          Tenho curso de Redes de Computadores pela instituição Senai e estou cursando
          Sistemas de Informação pelo CEST. Sou aluno das plataformas Udemy e Alura,
          construindo minha base em desenvolvimento web, back-end e dados.
        </p>

        <div className="skills__formacao">
          {formacao.map((item) => (
            <div key={item.titulo} className="skills__formacao-card">
              <strong>{item.titulo}</strong>
              <span>{item.instituicao}</span>
              <span className="skills__status">{item.status}</span>
            </div>
          ))}
        </div>

        <div className="skills__grupos">
          {grupoHabilidades.map((grupo) => (
            <section key={grupo.categoria} className="skills__grupo">
              <h2>{grupo.categoria}</h2>
              <div className="skills__tags">
                {grupo.itens.map((item) => (
                  <span key={item} className="skills__tag">
                    {item}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>

        <Link to="/certificados" className="btn btn--solid skills__cta">
          Ver certificados
        </Link>
      </div>
    </main>
  )
}
