import { Link } from 'react-router-dom'
import { Download, MessageCircle, Mail, Terminal, GraduationCap, ChevronDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/BrandIcons.jsx'
import fotoLuis from '../assets/img/luis.jpeg'
import './Home.css'

const cvUrl = '/cv/Luis-Carlos-Ferreira-Junior-CV.pdf'

const redes = [
  {
    nome: 'LinkedIn',
    href: 'https://www.linkedin.com/in/luis-carlos-ferreira-junior-27512422b',
    Icone: LinkedinIcon,
  },
  { nome: 'GitHub', href: 'https://github.com/luis-ferreira-jr', Icone: GithubIcon },
  { nome: 'WhatsApp', href: 'https://wa.me/qr/BI556XQKYDS4L1', Icone: MessageCircle },
  { nome: 'Instagram', href: 'https://www.instagram.com/luiisferreiraj', Icone: InstagramIcon },
  { nome: 'E-mail', href: 'mailto:juniorferreira1367@gmail.com', Icone: Mail },
]

const stack = ['Python', 'SQL', 'Node.js', 'JavaScript', 'Java']

export default function Home() {
  return (
    <main className="page home">
      <div className="container home__grid">
        <section className="home__conteudo">
          <span className="eyebrow">Portfólio</span>
          <h1 className="home__titulo">
            Luis <strong>Carlos</strong>
          </h1>
          <p className="home__badge-estudo">
            <GraduationCap size={16} />
            Estudante de Sistemas da Informação (CEST)
          </p>
          <p className="page__texto">
            Olá! Eu sou Luis Carlos. Sou um desenvolvedor focado em transformar
            problemas em soluções práticas através da programação, com foco em
            back-end e análise de dados. Explore meus projetos e conheça as
            habilidades que estou desenvolvendo neste início de carreira.
          </p>
          <div className="home__stack">
            <Terminal size={14} className="home__stack-icone" />
            {stack.map((tec) => (
              <span key={tec} className="home__stack-tag">
                {tec}
              </span>
            ))}
          </div>
          <div className="home__links">
            <a className="btn btn--solid home__cv" href={cvUrl} download>
              <Download size={18} />
              Baixar CV
            </a>
            <h2 className="home__subtitulo">Acesse minhas redes</h2>
            <div className="home__redes">
              {redes.map(({ nome, href, Icone }) => (
                <a
                  key={nome}
                  className="btn home__rede"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icone size={15} />
                  {nome}
                </a>
              ))}
            </div>
          </div>
        </section>
        <div className="home__foto-wrap">
          <div className="home__foto-borda">
            <img className="home__foto" src={fotoLuis} alt="Foto de Luis Carlos" />
          </div>
        </div>
      </div>
      <Link to="/projetos" className="home__scroll">
        Role para conhecer meus projetos
        <ChevronDown size={18} />
      </Link>
    </main>
  )
}
