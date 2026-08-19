import fotoLuis from '../assets/img/luis.jpeg'
import './Home.css'

const redes = [
  { nome: 'GitHub', href: 'https://github.com/LuisCarlosJr00' },
  { nome: 'LinkedIn', href: 'https://www.linkedin.com/in/luis-carlos-ferreira-junior-27512422b' },
  { nome: 'WhatsApp', href: 'https://wa.me/qr/BI556XQKYDS4L1' },
]

export default function Home() {
  return (
    <main className="page home">
      <div className="container home__grid">
        <section className="home__conteudo">
          <span className="eyebrow">Portfólio</span>
          <h1 className="home__titulo">
            Luis <strong>Carlos</strong>
          </h1>
          <p className="page__texto">
            Olá! Eu sou Luis Carlos, estudante de Sistemas da Informação (CEST).
            Sou um desenvolvedor focado em transformar problemas em soluções práticas
            através da programação. Explore meus projetos e conheça as habilidades
            que estou desenvolvendo neste início de carreira.
          </p>
          <div className="home__links">
            <h2 className="home__subtitulo">Acesse minhas redes</h2>
            <div className="home__redes">
              {redes.map((rede) => (
                <a key={rede.nome} className="btn" href={rede.href} target="_blank" rel="noreferrer">
                  {rede.nome}
                </a>
              ))}
            </div>
          </div>
        </section>
        <div className="home__foto-borda">
          <img className="home__foto" src={fotoLuis} alt="Foto de Luis Carlos" />
        </div>
      </div>
    </main>
  )
}
