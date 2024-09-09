# Aula2

**Aula2** é uma API desenvolvida para fins de aprendizado, utilizando o framework Express e o query builder Knex. O projeto aplica princípios de arquitetura limpa e inclui diversas pastas para uma estrutura modular e organizada.

## Descrição

Esta API foi desenvolvida com o objetivo de proporcionar uma base sólida para entender e implementar funcionalidades de backend com Express e Knex. O projeto inclui estruturação por meio de controladores, roteadores, e utilitários para tratamento de erros.

## Tecnologias Utilizadas

- **Express**: Framework web para construir a API.
- **Knex**: Query builder para interagir com o banco de dados.
- **SQLite**: Banco de dados utilizado para armazenar dados.
- **bcryptjs**: Biblioteca para hashing de senhas.
- **nodemon**: Utilitário para reinicialização automática do servidor durante o desenvolvimento.

## Estrutura do Projeto

A estrutura do projeto está organizada nas seguintes pastas:

- **`controllers/`**: Contém os controladores da aplicação, responsáveis pela lógica de negócios e manipulação das requisições.
  
- **`database/`**: Inclui a configuração e scripts do banco de dados, bem como a integração com Knex.

- **`routers/`**: Define as rotas da API, conectando as requisições HTTP aos controladores apropriados.

- **`utils/`**: Contém funções auxiliares, como utilitários para tratamento de erros.

## Dependências

As dependências principais do projeto são:

```json
{
  "bcryptjs": "^2.4.3",
  "express": "^4.19.2",
  "express-async-error": "^0.0.2",
  "knex": "^3.1.0",
  "mon": "^0.0.8",
  "node": "^20.12.1",
  "sqlite": "^5.1.1",
  "sqlite3": "^5.1.7"
}
