# Calculadora de IMC

**Calculadora de IMC** é uma aplicação web simples que calcula o Índice de Massa Corporal (IMC) com base na altura e peso fornecidos pelo usuário. O projeto é construído utilizando HTML, CSS e JavaScript para a funcionalidade e estilo da aplicação.

## Descrição

Esta aplicação permite que os usuários insiram seu peso e altura e calculem o IMC. O resultado é exibido juntamente com uma classificação do IMC de acordo com os padrões estabelecidos (por exemplo, abaixo do peso, peso normal, sobrepeso, etc.). O design é responsivo e acessível em diferentes dispositivos.

## Funcionalidades

- Calcula o IMC com base na altura e peso inseridos.
- Exibe o resultado do IMC com uma classificação.
- Design responsivo para uma boa experiência em dispositivos móveis e desktops.

## Tecnologias Utilizadas

- **HTML**: Estrutura básica da aplicação.
- **CSS**: Estilização da aplicação, incluindo responsividade.
- **JavaScript**: Lógica para calcular o IMC e manipular o DOM.

## Estrutura do Projeto

O projeto está organizado nos seguintes arquivos e pastas:

- **`index.html`**: Arquivo principal HTML que contém a estrutura da página.
- **`styles/`**: Contém arquivos CSS para estilização da aplicação.
  - **`main.css`**: Arquivo CSS principal com regras de estilo e media queries para responsividade.
- **`scripts/`**: Contém arquivos JavaScript para a lógica da aplicação.
  - **`main.js`**: Arquivo JavaScript com a lógica de cálculo do IMC e manipulação do DOM.

## Exemplos de Código

### HTML

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de IMC</title>
    <link rel="stylesheet" href="styles/main.css">
</head>
<body>
    <div class="container">
        <h1>Calculadora de IMC</h1>
        <form id="imc-form">
            <label for="weight">Peso (kg):</label>
            <input type="number" id="weight" required>
            <label for="height">Altura (m):</label>
            <input type="number" id="height" step="0.01" required>
            <button type="submit">Calcular</button>
        </form>
        <div id="result"></div>
    </div>
    <script src="scripts/main.js"></script>
</body>
</html>
