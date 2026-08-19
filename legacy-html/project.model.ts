export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  /** Breve resumo exibido no card */
  summary: string;
  /** Tecnologias/tags usadas no projeto */
  technologies: string[];
  /** Imagens/prints do projeto — adicione quantas quiser */
  images: ProjectImage[];
  /** Link para o repositório GitHub (opcional) */
  githubUrl?: string;
  /** Link para demo online (opcional) */
  demoUrl?: string;
  /** Categoria do projeto para filtragem */
  category: 'web' | 'mobile' | 'backend' | 'ia' | 'outro';
  /** Data de conclusão (formato: 'YYYY-MM') */
  completedAt: string;
  featured?: boolean;
}

// ============================================================
// 👇 COMO ADICIONAR UM NOVO PROJETO
// ============================================================
//
// 1. Copie o bloco abaixo para o arquivo `projects.data.ts`
// 2. Preencha cada campo conforme as instruções nos comentários
// 3. Coloque os prints na pasta `src/assets/portfolio/projects/`
//    e referencie o caminho em `images`
//
// EXEMPLO:
// {
//   id: 4,                                     // próximo número sequencial
//   title: 'Nome do Projeto',
//   summary: 'Resumo curto para o card',        // 1-2 frases
//   description: `Descrição completa.           // markdown é suportado
//     Explique o problema que resolve,
//     as decisões técnicas e os resultados.`,
//   technologies: ['Angular', 'Node.js'],       // lista de tags
//   images: [
//     {
//       url: 'assets/portfolio/projects/meu-projeto-1.png',
//       alt: 'Tela principal do projeto',
//       caption: 'Dashboard com métricas em tempo real'
//     }
//   ],
//   githubUrl: 'https://github.com/seu-usuario/repo',
//   demoUrl: 'https://meu-projeto.vercel.app',  // opcional
//   category: 'web',                             // web | mobile | backend | ia | outro
//   completedAt: '2025-03',
//   featured: true                               // aparece em destaque na home
// }
