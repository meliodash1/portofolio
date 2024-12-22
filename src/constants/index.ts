import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  web,
  javascript,
  java,
  typescript,
  html,
  css,
  nodejs,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Trabalho",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services: TService[] = [
  {
    title: "Desenvolvedor Web",
    icon: web,
  },
  {
    title: "Desenvolvedor React Native",
    icon: mobile,
  },
  {
    title: "Desenvolvedor Backend",
    icon: backend,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Java",
    icon: java,
  },
];

const experiences: TExperience[] = [
  {
    title: "Desenvolvedor React.js",
    companyName: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Janeiro 2021 - Abril 2021",
    points: [
      "Desenvolver e manter aplicações web usando React.js e outras tecnologias relacionadas.",
      "Colaborar com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores para criar produtos de alta qualidade.",
      "Implementando design responsivo e garantindo compatibilidade entre navegadores.",
      "Participar de revisões de código e fornecer feedback construtivo a outros desenvolvedores.",
    ],
  },
  {
    title: "Desenvolvedor React Native",
    companyName: "Tva 7",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Maio 2021 - Outubro 2022",
    points: [
      "Desenvolver e manter aplicações web usando React.js e outras tecnologias relacionadas.",
      "Colaborar com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores para criar produtos de alta qualidade.",
      "Implementando design responsivo e garantindo compatibilidade entre navegadores.",
      "Participar de revisões de código e fornecer feedback construtivo a outros desenvolvedores.",
    ],
  },
  {
    title: "Desenvolvedor Web",
    companyName: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Janeiro 2023 - Dezembro 2023",
    points: [
      "Desenvolver e manter aplicações web usando React.js e outras tecnologias relacionadas.",
      "Colaborar com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores para criar produtos de alta qualidade.",
      "Implementando design responsivo e garantindo compatibilidade entre navegadores.",
      "Participar de revisões de código e fornecer feedback construtivo a outros desenvolvedores.",
    ],
  },
  {
    title: "Desenvolvedor Full stack",
    companyName: "Nada",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Janeiro 2024 - Presente",
    points: [
      "Desenvolver e manter aplicações web usando React.js e outras tecnologias relacionadas.",
      "Colaborar com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores para criar produtos de alta qualidade.",
      "Implementando design responsivo e garantindo compatibilidade entre navegadores.",
      "Participar de revisões de código e fornecer feedback construtivo a outros desenvolvedores.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Eu achava que era impossível fazer um site tão bonito quanto o nosso produto, mas Jeff provou que eu estava errado.",
    name: "Sara",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    testimonial:
      "Nunca conheci um desenvolvedor web que realmente se importasse com o sucesso de seus clientes como Jeff.",
    name: "Fernando",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    testimonial:
      "Depois que Jeff otimizou nosso site, nosso tráfego aumentou em 50%. Não podemos agradecer o suficiente!",
    name: "Elisa",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Aluguel de carros",
    description:
      "Plataforma baseada na web que permite aos usuários pesquisar, reservar e gerenciar aluguéis de carros de vários fornecedores, fornecendo uma solução conveniente e eficiente para necessidades de transporte.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trabalho TI",
    description:
      "Aplicativo da Web que permite aos usuários pesquisar vagas de emprego, visualizar estimativas de faixas salariais para cargos e localizar empregos disponíveis com base em sua localização atual.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Guia de viagem",
    description:
      "Uma plataforma abrangente de reservas de viagens que permite aos usuários reservar voos, hotéis e alugar carros, além de oferecer recomendações selecionadas para destinos populares.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
