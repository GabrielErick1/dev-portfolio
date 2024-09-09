# GitHub Repos Viewer

**GitHub Repos Viewer** é uma aplicação que consome a API do GitHub para exibir os repositórios de um usuário, mostrando o nome e o número de links de cada repositório. A aplicação é construída com HTML, CSS e JavaScript, e é projetada para ser responsiva.

## Descrição

Esta aplicação permite que você insira o nome de um usuário do GitHub e visualize uma lista de seus repositórios. Para cada repositório, são exibidos o nome e a quantidade de links encontrados no repositório. O projeto é construído com HTML, CSS e JavaScript, e utiliza uma abordagem modular com classes para manter o código organizado e reutilizável.

## Funcionalidades

- Consome a API do GitHub para obter informações sobre os repositórios de um usuário.
- Exibe o nome e o número de links de cada repositório.
- Interface responsiva para uma boa experiência em diferentes dispositivos.

## Tecnologias Utilizadas

- **HTML**: Estrutura básica da aplicação.
- **CSS**: Estilização da aplicação, incluindo media queries para responsividade.
- **JavaScript**: Lógica para consumir a API do GitHub e manipular o DOM.

## Estrutura do Projeto

O projeto está organizado nas seguintes pastas e arquivos:

- **`index.html`**: Arquivo principal HTML que estrutura a página.
- **`styles/`**: Contém arquivos CSS para estilização da aplicação.
  - **`main.css`**: Arquivo CSS principal com regras de estilo e media queries para responsividade.
- **`scripts/`**: Contém arquivos JavaScript para a lógica da aplicação.
  - **`api.js`**: Funções para consumir a API do GitHub e processar dados.
  - **`ui.js`**: Manipulação do DOM e atualização da interface com os dados obtidos.
  - **`app.js`**: Arquivo principal que coordena a lógica entre `api.js` e `ui.js`.

## Dependências

O projeto não utiliza bibliotecas ou frameworks externos além dos nativos do JavaScript. 

## Instalação e Execução

Para executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```sh
   git clone https://github.com/SeuUsuario/github-repos-viewer.git
