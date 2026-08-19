import { useState } from 'react'
import { certificadosPorCategoria, totalCertificados } from '../data/certificates.js'
import './Certificates.css'

export default function Certificates() {
  const [filtro, setFiltro] = useState('todos')

  const grupos =
    filtro === 'todos'
      ? certificadosPorCategoria
      : certificadosPorCategoria.filter((g) => g.chave === filtro)

  return (
    <main className="page certificates">
      <div className="container">
        <span className="eyebrow">Conquistas</span>
        <h1 className="page__titulo">Certificados</h1>
        <p className="page__texto">
          {totalCertificados} certificados concluídos em cursos técnicos, soft skills e eventos.
          Clique para abrir ou baixar o PDF.
        </p>

        <div className="certificates__filtros">
          <button
            className={filtro === 'todos' ? 'certificates__filtro certificates__filtro--ativo' : 'certificates__filtro'}
            onClick={() => setFiltro('todos')}
          >
            Todos ({totalCertificados})
          </button>
          {certificadosPorCategoria.map((grupo) => (
            <button
              key={grupo.chave}
              className={filtro === grupo.chave ? 'certificates__filtro certificates__filtro--ativo' : 'certificates__filtro'}
              onClick={() => setFiltro(grupo.chave)}
            >
              {grupo.nome} ({grupo.itens.length})
            </button>
          ))}
        </div>

        {grupos.map((grupo) => (
          <section key={grupo.chave} className="certificates__grupo">
            {filtro === 'todos' && <h2>{grupo.nome}</h2>}
            <div className="certificates__grid">
              {grupo.itens.map((cert) => (
                <a
                  key={cert.url}
                  className="certificates__card"
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="certificates__icone">PDF</span>
                  <span className="certificates__titulo">{cert.titulo}</span>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
