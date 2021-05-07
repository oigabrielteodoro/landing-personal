import { v4 as uuid } from 'uuid';

export const techs = [
  {
    id: uuid(),
    name: 'Node.js',
    level: 3,
    img: <img src="/static/img/techs/node.svg" alt="Node.js" />,
    color: '#8CC84B',
    content: 'Utilizamos o Node.js para construir todo o Back-end!',
  },
  {
    id: uuid(),
    name: 'ReactJS',
    level: 3,
    img: <img src="/static/img/techs/react.svg" alt="ReactJS" />,
    color: '#3BC0DD',
    content: 'Utilizamos o ReactJS para construir grande parte das interfaces de nossas aplicações.',
  },
  {
    id: uuid(),
    name: 'React Native',
    level: 3,
    img: <img src="/static/img/techs/react.svg" alt="React Native" />,
    color: '#3BC0DD',
    content: 'Utilizamos o React Native para construir todos os aplicativos Mobile para iOS & Android!',
  },
  {
    id: uuid(),
    name: 'Typescript',
    level: 3,
    img: <img src="/static/img/techs/typescript.svg" alt="Typescript" />,
    color: '#0288D1',
    content: 'Grande parte da codebase dos projetos são criados nessa linguagem!',
  },
  {
    id: uuid(),
    name: 'Next.js',
    level: 3,
    img: <img src="/static/img/techs/next.svg" alt="Next.js" />,
    color: '#000000',
    content:
      'Utilizamos o Next.js para alguns projetos que precisam de SEO ou outra funcionalidade que a ferramenta oferece!',
  },
  {
    id: uuid(),
    name: 'Javascript',
    level: 2,
    img: <img src="/static/img/techs/javascript.svg" alt="Javascript" />,
    color: '#FDE635',
    content: 'Uma pequena parte da codebase pode ser escrita em Javascript, dependendo do projeto.',
  },
];
