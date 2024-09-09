# 💻 DEV Portfolio

Bem-vindo ao meu portfólio! Aqui você encontrará projetos que desenvolvi utilizando React, Node.js, JavaScript e Next.js. Explore e sinta-se à vontade para entrar em contato!

## 🚀 Desenvolvimento e Projetos

### 🔧 Projetos Gerais

- 🧮 [Calculadora](https://github.com/GabrielErick1/dev-portfolio/tree/main/calculadora)
- ⚖️ [Teste de IMC (JavaScript, HTML, CSS3)](https://github.com/GabrielErick1/dev-portfolio/tree/main/javaScript/testedeobsidade/)
- 🌐 [Landing Page 1](https://github.com/GabrielErick1/dev-portfolio/tree/main/htmlsite/site/)
- 🌐 [Landing Page 2](https://github.com/GabrielErick1/dev-portfolio/tree/main/htmlsite/sitenv/)
- ⭐ [GitHub Favoritos](https://github.com/GabrielErick1/dev-portfolio/tree/main/projetogit01/)

### ⚛️ Projetos em React

- 🧠 [Quiz React](https://github.com/GabrielErick1/dev-portfolio/tree/main/quiz/)
- 🐶 [Dogs Front Completo](https://github.com/GabrielErick1/dev-portfolio/tree/main/dogs)

### 📱 Projetos em React Native

- 📋 [Task (Back e Front)](https://github.com/GabrielErick1/dev-portfolio/tree/main/nativetask)

### 🛠️ Projetos Back-End

- 📝 [Projeto Notas API](https://github.com/GabrielErick1/dev-portfolio/tree/main/taskUser)
- 🚗 [Loja de Carro API](https://github.com/GabrielErick1/dev-portfolio/tree/main/taskUser)

## 🎮 Mini Jogo: Adivinhe o Número!

**Como Jogar:**

1. Pense em um número entre 1 e 100.
2. Eu tentarei adivinhar o número.
3. Você me dirá se meu palpite é "Muito Alto", "Muito Baixo" ou "Correto".

**Vamos jogar?**


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo de Adivinhação</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        #game {
            text-align: center;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        button {
            margin-top: 10px;
            padding: 10px 20px;
            border: none;
            background-color: #007bff;
            color: white;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div id="game">
        <h1>Adivinhe o Número!</h1>
        <p id="message">Pense em um número entre 1 e 100.</p>
        <button onclick="playGame()">Começar!</button>
    </div>

    <script>
        function playGame() {
            let min = 1;
            let max = 100;
            let guess;
            let feedback;

            do {
                guess = Math.floor((min + max) / 2);
                feedback = prompt(`Meu palpite é ${guess}. Está "Muito Alto", "Muito Baixo" ou "Correto"?`);

                if (feedback.toLowerCase() === 'muito alto') {
                    max = guess - 1;
                } else if (feedback.toLowerCase() === 'muito baixo') {
                    min = guess + 1;
                }
            } while (feedback.toLowerCase() !== 'correto');

            alert('Eu acertei!');
            document.getElementById('message').innerText = 'Jogo finalizado. Obrigado por jogar!';
        }
    </script>
</body>
</html>

