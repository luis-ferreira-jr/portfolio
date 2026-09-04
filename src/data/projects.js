export const projetos = [
  {
    titulo: 'Desafio V — Turismo no Maranhão',
    descricao:
      'Aplicação full-stack desenvolvida na Trilha Backend do programa Trilhas Inova Maranhão (SECTI/FAPEMA). O back-end expõe uma API REST de destinos e atrações turísticas; o front-end consome essa API e exibe os pontos no mapa com a Google Maps API.',
    tecnologias: ['Node.js', 'Express', 'MongoDB', 'JavaScript', 'HTML', 'CSS', 'Google Maps API'],
    links: [
      { label: 'Demo', href: 'https://frontend-turismo.vercel.app', tipo: 'demo' },
      { label: 'Repositório (Frontend)', href: 'https://github.com/luis-ferreira-jr/DesafioV-frontend', tipo: 'github' },
      { label: 'Repositório (Backend)', href: 'https://github.com/luis-ferreira-jr/DesafioV-backend', tipo: 'github' },
    ],
  },
  {
    titulo: 'Sistema de Gerenciamento de Usuários',
    descricao:
      'Aplicação full-stack para cadastro, listagem, edição e exclusão de usuários. Front-end em Angular consumindo uma API REST em Spring Boot, com validação de CPF, hash de senha com BCrypt e DTOs separados de request/response.',
    tecnologias: ['Angular', 'TypeScript', 'Spring Boot', 'Java', 'PostgreSQL'],
    links: [
      { label: 'Demo', href: 'https://projeto-angular-jade.vercel.app', tipo: 'demo' },
      { label: 'Repositório (Frontend)', href: 'https://github.com/luis-ferreira-jr/ProjetoAngular', tipo: 'github' },
      { label: 'Repositório (Backend)', href: 'https://github.com/luis-ferreira-jr/gerenciamento-backend', tipo: 'github' },
    ],
  },
]
