# Dogs

**Dogs** é uma aplicação web desenvolvida em React que funciona como uma rede social para cães. A aplicação permite que os usuários se cadastrem, façam login, publiquem mensagens e fotos, e participem de conversas em um chat. A aplicação consome uma API utilizando `fetch` para obter e enviar dados.

## Descrição

O projeto **Dogs** simula uma rede social voltada para cães, semelhante ao Facebook, mas com funcionalidades específicas para compartilhamento de informações sobre cães. Os usuários podem criar uma conta, fazer login, postar atualizações e fotos de seus cães, e interagir com outros usuários através de um chat.

## Funcionalidades

- **Cadastro de Usuários**: Permite que novos usuários se registrem na aplicação.
- **Login de Usuários**: Usuários registrados podem fazer login na aplicação.
- **Postagens**: Usuários podem criar postagens com texto e fotos.
- **Feed de Postagens**: Visualize as postagens feitas pelos usuários.
- **Chat de Conversa**: Funcionalidade de chat para interações em tempo real entre os usuários.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface do usuário.
- **Fetch API**: Para consumo de dados da API.
- **CSS**: Para estilização e design da aplicação.
- **React Router**: Para navegação entre diferentes páginas da aplicação.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- **`src/`**: Contém o código-fonte da aplicação.
  - **`components/`**: Componentes reutilizáveis da aplicação.
    - **`Header.js`**: Cabeçalho da aplicação.
    - **`PostForm.js`**: Formulário para criação de postagens.
    - **`PostList.js`**: Lista de postagens.
    - **`Login.js`**: Página de login.
    - **`Register.js`**: Página de registro.
    - **`Chat.js`**: Componente de chat.
  - **`pages/`**: Páginas principais da aplicação.
    - **`Home.js`**: Página inicial com feed de postagens.
    - **`Profile.js`**: Página de perfil do usuário.
  - **`api/`**: Funções para comunicação com a API.
    - **`fetchData.js`**: Funções para fazer requisições à API.
  - **`App.js`**: Componente principal que configura as rotas.
  - **`index.js`**: Ponto de entrada da aplicação.