const modules = import.meta.glob('../assets/certificados/**/*.pdf', {
  eager: true,
  query: '?url',
  import: 'default',
})

const categorias = {
  'cursos-alura': 'Cursos técnicos',
  'soft-skills': 'Soft skills',
  eventos: 'Eventos & reconhecimentos',
}

function tituloAPartirDoArquivo(nomeArquivo) {
  let titulo = nomeArquivo.replace(/\.pdf$/i, '')
  titulo = titulo.replace(/^Luis Carlos Ferreira Junior - /i, '')
  titulo = titulo.replace(/^Curso /i, '')
  titulo = titulo.replace(/ - Alura$/i, '')
  titulo = titulo.replace('_', ':')
  return titulo
}

function parseCaminho(caminho) {
  const partes = caminho.split('/')
  const arquivo = partes[partes.length - 1]
  const pasta = partes[partes.length - 2]
  return { arquivo, pasta }
}

const todos = Object.entries(modules).map(([caminho, url]) => {
  const { arquivo, pasta } = parseCaminho(caminho)
  return {
    titulo: tituloAPartirDoArquivo(arquivo),
    categoriaChave: pasta,
    categoria: categorias[pasta] ?? pasta,
    url,
  }
})

todos.sort((a, b) => a.titulo.localeCompare(b.titulo, 'pt-BR'))

export const totalCertificados = todos.length

export const certificadosPorCategoria = Object.keys(categorias).map((chave) => ({
  chave,
  nome: categorias[chave],
  itens: todos.filter((c) => c.categoriaChave === chave),
}))
