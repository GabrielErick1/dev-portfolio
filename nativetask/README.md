# Gerenciador de Tarefas

**Gerenciador de Tarefas** é uma aplicação para gerenciamento de tarefas desenvolvida com React Native para o frontend e Prisma com Express para o backend. A aplicação permite a criação, visualização, atualização e exclusão de tarefas, e utiliza a inversão de dependências para uma arquitetura mais flexível e testável.

## Descrição

Este projeto é um gerenciador de tarefas que inclui uma API construída com Express e Prisma, e um frontend mobile desenvolvido com React Native. O backend fornece endpoints para gerenciar tarefas e o frontend se conecta a essa API para exibir e manipular as tarefas.

## Funcionalidades

- **Backend**:
  - API RESTful para gerenciar tarefas.
  - Utiliza Prisma para interação com o banco de dados.
  - Implementa princípios de inversão de dependências para uma arquitetura limpa e escalável.

- **Frontend**:
  - Aplicação mobile desenvolvida com React Native.
  - Consome a API do backend usando Axios.
  - Permite a criação, visualização, atualização e exclusão de tarefas.
  - Configuração com `.env` para conectar-se à API.

## Tecnologias Utilizadas

### Backend

- **Express**: Framework para construir a API RESTful.
- **Prisma**: ORM para interação com o banco de dados.
- **Node.js**: Ambiente de execução para o servidor.
- **dotenv**: Carrega variáveis de ambiente.

### Frontend

- **React Native**: Biblioteca para construir aplicações mobile.
- **Axios**: Cliente HTTP para realizar requisições à API.
- **dotenv**: Gerencia variáveis de ambiente.

## Estrutura do Projeto

### Backend

- **`src/`**: Contém o código fonte do backend.
  - **`controllers/`**: Contém os controladores para a lógica de negócios.
  - **`prisma/`**: Contém arquivos de configuração do Prisma e scripts de migração.
  - **`routes/`**: Define as rotas da API.
  - **`services/`**: Contém a lógica de acesso ao banco de dados.
  - **`utils/`**: Contém utilitários e helpers.
  - **`server.js`**: Arquivo principal que inicia o servidor Express.

### Frontend

- **`src/`**: Contém o código fonte do frontend.
  - **`components/`**: Contém os componentes reutilizáveis da aplicação.
  - **`screens/`**: Contém as telas principais da aplicação.
  - **`services/`**: Contém funções para interagir com a API.
  - **`App.js`**: Arquivo principal que configura a navegação e a aplicação.

## Dependências

### Backend

```json
{
  "express": "^4.19.2",
  "prisma": "^4.0.0",
  "dotenv": "^16.4.5"
}
