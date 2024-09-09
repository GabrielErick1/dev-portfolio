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

```bash
# Código básico do jogo (você pode implementar isso em JavaScript):
let min = 1;
let max = 100;
let guess;
let feedback;

do {
    guess = Math.floor((min + max) / 2);
    feedback = prompt(`Meu palpite é ${guess}. Está muito alto, muito baixo ou correto?`);
    
    if (feedback === 'Muito Alto') {
        max = guess - 1;
    } else if (feedback === 'Muito Baixo') {
        min = guess + 1;
    }
} while (feedback !== 'Correto');

alert('Eu acertei!');
