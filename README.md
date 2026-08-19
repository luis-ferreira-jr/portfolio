# Portfólio — Luis Carlos Ferreira Junior

Portfólio pessoal em React + Vite, com página de Certificados que lista
automaticamente todos os PDFs guardados em `src/assets/certificados/`.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:5173

## Build de produção

```bash
npm run build
npm run preview   # para conferir o build localmente
```

## Estrutura

```
src/
  assets/certificados/
    cursos-alura/    # certificados de cursos técnicos
    soft-skills/      # certificados de soft skills
    eventos/           # certificados de eventos/congressos
  data/certificates.js # lê os PDFs acima automaticamente (import.meta.glob)
  pages/                # Home, Skills, Projects, Certificates
  components/           # Navbar, Footer
```

### Adicionando um novo certificado

Basta colocar o arquivo `.pdf` dentro da subpasta de categoria correta em
`src/assets/certificados/`. Ele aparece automaticamente na página de
Certificados no próximo build/dev — não é preciso editar código.

O título exibido é gerado a partir do nome do arquivo. Para os certificados
da Alura, o padrão `Curso Nome_ subtítulo - Alura.pdf` já é interpretado
corretamente. Para certificados de outras fontes, o nome do arquivo (sem a
extensão) é usado como título.

## Deploy na Vercel

1. Suba este projeto para um repositório no GitHub.
2. Em https://vercel.com, clique em "Add New… → Project" e importe o
   repositório.
3. A Vercel detecta automaticamente que é um projeto Vite (build command
   `npm run build`, output `dist`) — não precisa mudar nada.
4. O arquivo `vercel.json` já está incluído para garantir que as rotas do
   React Router (`/habilidades`, `/projetos`, `/certificados`) funcionem
   corretamente ao acessar a URL diretamente ou dar refresh na página.

## Pasta `legacy-html/`

Contém o site estático original (HTML/CSS) e os arquivos avulsos de um
início de migração para Angular, mantidos apenas como referência. Pode ser
apagada quando não for mais necessária.
