type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Jeferson Almeida — Portfolio",
    fullName: "Jeferson Almeida",
    email: "jefersonalmeida4444@mail.com",
  },
  hero: {
    name: "Jeferson Almeida",
    p: ["Desenvolvedor de sites e aplicativos. Transformo ideias em soluções digitais incríveis."],
  },
  contact: {
    p: "Entre em contato",
    h2: "Contato.",
    form: {
      name: {
        span: "Seu Nome",
        placeholder: "Qual é o Seu Nome?",
      },
      email: { span: "seu email?", placeholder: "Qual é o seu email?" },
      message: {
        span: "Sua Menssagem",
        placeholder: "Oq vc quer dizer?",
      },
    },
  },
  sections: {
    about: {
      p: "Introdução",
      h2: "Visão geral.",
      content: `Sou um desenvolvedor de software qualificado com experiência em TypeScript, html5, css3, java e
JavaScript, e conhecimento em frameworks como React e Node.js. Sou um aprendiz rápido e colaboro de perto com os clientes para
criar soluções eficientes, escaláveis ​​e fáceis de usar que resolvam
problemas do mundo real. Vamos trabalhar juntos para dar vida às suas ideias!`,
    },
    experience: {
      p: "O que eu fiz até agora",
      h2: "Experiência de trabalho.",
    },
    feedbacks: {
      p: "O que os outros dizem",
      h2: "Depoimentos.",
    },
    works: {
      p: "Meu trabalho",
      h2: "Projetos.",
      content: `Os projetos a seguir demonstram minhas habilidades e experiência por meio de
exemplos reais do meu trabalho. Cada projeto é brevemente descrito com
links para repositórios de código e demonstrações ao vivo. Ele reflete minha
capacidade de resolver problemas complexos, trabalhar com diferentes tecnologias,
e gerenciar projetos de forma eficaz.`,
    },
  },
};
