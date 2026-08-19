import img1 from '../assets/img/image 1.png'
import img2 from '../assets/img/image 2.png'
import img3 from '../assets/img/image 3.png'
import './Projects.css'

const projetos = [
  { src: img1, alt: 'Projeto 1 — Trilhas Inova-MA' },
  { src: img2, alt: 'Projeto 2 — Trilhas Inova-MA' },
  { src: img3, alt: 'Projeto 3 — Trilhas Inova-MA' },
]

export default function Projects() {
  return (
    <main className="page projects">
      <div className="container">
        <span className="eyebrow">Trabalhos</span>
        <h1 className="page__titulo">Meus projetos</h1>
        <p className="page__texto">
          Aqui estão alguns dos projetos concluídos dentro do programa Trilhas Inova-MA.
        </p>
        <div className="projects__grid">
          {projetos.map((projeto) => (
            <figure key={projeto.alt} className="projects__card">
              <img src={projeto.src} alt={projeto.alt} />
            </figure>
          ))}
        </div>
      </div>
    </main>
  )
}
