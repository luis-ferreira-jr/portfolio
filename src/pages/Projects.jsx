import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '../components/BrandIcons.jsx'
import { projetos } from '../data/projects.js'
import './Projects.css'

export default function Projects() {
  return (
    <main className="page projects">
      <div className="container">
        <span className="eyebrow">Trabalhos</span>
        <h1 className="page__titulo">Meus projetos</h1>
        <p className="page__texto">
          Projetos práticos desenvolvidos em cursos, formações e no programa Trilhas Inova
          Maranhão. Os repositórios estão no meu GitHub.
        </p>
        <div className="projects__grid">
          {projetos.map((projeto) => (
            <article key={projeto.titulo} className="projects__card">
              <h2 className="projects__titulo">{projeto.titulo}</h2>
              <p className="projects__descricao">{projeto.descricao}</p>
              <div className="projects__tecnologias">
                {projeto.tecnologias.map((tec) => (
                  <span key={tec} className="projects__tag">
                    {tec}
                  </span>
                ))}
              </div>
              <div className="projects__links">
                {projeto.links.map((link) => (
                  <a
                    key={link.href}
                    className="btn projects__link"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.tipo === 'github' ? <GithubIcon size={15} /> : <ExternalLink size={15} />}
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
