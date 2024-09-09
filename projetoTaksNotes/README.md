# TaskNotes

**TaskNotes** é um projeto completo que inclui uma API backend desenvolvida com Express e Knex, e um front-end construído com Next.js e Vite. O projeto aplica princípios de arquitetura limpa e utiliza diversas tecnologias para criar uma aplicação robusta e escalável.

## Arquitetura e Tecnologias

### Backend

O backend da aplicação foi desenvolvido utilizando os seguintes princípios e tecnologias:

- **Express**: Framework para construir a API.
- **Knex**: Biblioteca de query builder para interagir com o banco de dados.
- **Arquitetura Limpa**: Implementação de controllers, repositories, e utils para uma estrutura organizada e fácil de manter.
- **SQLite**: Banco de dados utilizado para armazenar dados.

#### Estrutura do Projeto Backend

- **`src/server.js`**: Arquivo principal do servidor.
- **Controllers**: Gerenciam a lógica de controle da aplicação.
- **Repositories**: Encapsulam o acesso ao banco de dados.
- **Utils**: Contêm funções auxiliares, incluindo tratamento de erros.

#### Scripts

- `dev`: Inicia o servidor em modo de desenvolvimento com `nodemon`.
- `start`: Inicia o servidor em produção utilizando `pm2`.
- `migrate`: Executa as migrações do banco de dados com Knex.

#### Dependências

```json
{
  "axios": "^1.6.8",
  "bcryptjs": "^2.4.3",
  "cors": "^2.8.5",
  "dotenv": "^16.4.5",
  "express": "^4.19.2",
  "express-async-error": "^0.0.2",
  "jsonwebtoken": "^9.0.2",
  "knex": "^3.1.0",
  "modules": "^0.4.0",
  "mon": "^0.0.8",
  "multer": "^1.4.5-lts.1",
  "node": "^20.12.1",
  "pm2": "^5.4.0",
  "sqlite": "^5.1.1",
  "sqlite3": "^5.1.7"
}

## Front-End

O front-end da aplicação foi desenvolvido utilizando **Next.js** e **Vite**, com diversas bibliotecas e ferramentas modernas para criar uma interface de usuário rica e responsiva. 

### Tecnologias e Ferramentas

- **Next.js**: Framework React para renderização do lado do servidor e geração de sites estáticos. Facilita a criação de páginas e roteamento, além de otimizar o desempenho da aplicação com renderização prévia e geração de páginas estáticas.

- **Vite**: Ferramenta de construção moderna e rápida, usada para desenvolvimento e otimização do front-end. Proporciona uma experiência de desenvolvimento fluida e eficiente.

- **React**: Biblioteca para construção de interfaces de usuário. Utilizada como base para a criação de componentes reutilizáveis e gestão de estado.

- **Styled-Components**: Biblioteca para estilização de componentes utilizando CSS-in-JS, permitindo um estilo modular e escopo encapsulado.

- **React Router DOM**: Biblioteca para roteamento dentro da aplicação React, facilitando a navegação entre diferentes páginas e componentes.

- **Axios**: Biblioteca para fazer requisições HTTP, facilitando a comunicação com a API backend e o gerenciamento de dados.

### Estrutura do Projeto Front-End

- **`pages/`**: Contém as páginas principais da aplicação Next.js. Cada arquivo dentro dessa pasta corresponde a uma rota da aplicação.

- **`components/`**: Contém componentes reutilizáveis que são usados em várias páginas da aplicação.

- **`styles/`**: Contém arquivos de estilo global e específicos para componentes, utilizando Styled-Components para estilização.

- **`public/`**: Contém arquivos estáticos, como imagens e fontes, que são servidos diretamente pela aplicação.

### Scripts

- `dev`: Inicia o servidor de desenvolvimento com Vite.
  ```sh
  npm run dev

