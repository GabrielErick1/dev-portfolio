# API Node.js com TypeScript e SOLID

**API Node.js com TypeScript e SOLID** é uma API desenvolvida utilizando Node.js e TypeScript, seguindo os princípios SOLID para garantir um design de software sustentável e escalável. A API inclui suporte a autenticação, manipulação de arquivos, e um sistema de banco de dados com TypeORM.

## Descrição

Este projeto implementa uma API RESTful utilizando Node.js e TypeScript. A API foi desenvolvida com base nos princípios SOLID para garantir um código limpo e de fácil manutenção. Inclui autenticação JWT, upload de arquivos com Multer, e uma camada de abstração para acesso a banco de dados usando TypeORM. O projeto também está configurado para usar Docker para facilitar o gerenciamento de ambiente.

## Funcionalidades

- **Autenticação JWT**: Protege as rotas da API usando tokens JWT.
- **Upload de Arquivos**: Permite o upload de arquivos usando Multer.
- **Banco de Dados**: Gerencia dados usando TypeORM com suporte a migrações.
- **Documentação**: Documenta a API com Swagger UI.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Express**: Framework para criação de APIs em Node.js.
- **TypeORM**: ORM para interação com bancos de dados SQL.
- **Swagger UI**: Ferramenta para documentação interativa da API.
- **JWT**: Para autenticação baseada em tokens.
- **Multer**: Middleware para manipulação de arquivos multipart/form-data.
- **Docker**: Para containerização da aplicação.
- **Jest**: Framework de testes para garantir a qualidade do código.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- **`src/`**: Contém o código-fonte da API.
  - **`server/`**: Configuração e inicialização do servidor.
    - **`server.ts`**: Ponto de entrada da aplicação.
  - **`controllers/`**: Controladores que gerenciam as requisições.
  - **`middlewares/`**: Middlewares para autenticação e validação.
  - **`models/`**: Definições de entidades e esquemas de banco de dados.
  - **`repositories/`**: Repositórios para acesso e manipulação de dados.
  - **`services/`**: Serviços que contêm a lógica de negócios.
  - **`utils/`**: Funções utilitárias e helpers.
  - **`routes/`**: Definições das rotas da API.
  - **`config/`**: Configurações da aplicação e do banco de dados.