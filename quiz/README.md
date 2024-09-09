# Quiz App

**Quiz App** é uma aplicação de quiz desenvolvida com React, que consome uma API para obter perguntas e respostas. O projeto utiliza `fetch` para realizar requisições, organiza as perguntas em arquivos JSON separados, e aplica estilos responsivos com CSS e media queries.

## Descrição

Este projeto é uma aplicação de quiz interativa onde os usuários podem responder a uma série de perguntas. As perguntas são obtidas através de uma API e organizadas em arquivos JSON para facilitar a manutenção e escalabilidade. O design é responsivo, garantindo uma boa experiência de usuário em diferentes dispositivos.

## Funcionalidades

- Consome uma API para obter perguntas e respostas.
- Perguntas são organizadas em arquivos JSON para fácil gerenciamento.
- Interface responsiva utilizando CSS e media queries.
- Feedback interativo para cada resposta fornecida.

## Tecnologias Utilizadas

- **React**: Biblioteca principal para construção da interface de usuário.
- **fetch**: Método para realizar requisições à API e obter dados.
- **CSS**: Utilizado para estilização da aplicação, com media queries para garantir responsividade.

## Estrutura do Projeto

O projeto está organizado nas seguintes pastas e arquivos:

- **`src/`**: Contém o código fonte da aplicação.
  - **`components/`**: Contém os componentes reutilizáveis do quiz.
  - **`assets/`**: Contém arquivos de estilo (CSS) e outros recursos estáticos.
  - **`data/`**: Contém arquivos JSON com as perguntas do quiz.
  - **`App.js`**: Componente principal da aplicação que coordena a lógica do quiz e renderiza os componentes.

- **`public/`**: Contém arquivos estáticos servidos diretamente pela aplicação.

## Dependências

Dependências principais utilizadas no projeto:

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
