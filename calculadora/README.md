# Calculadora

Este é um projeto de uma calculadora desenvolvida com princípios de design orientado a objetos, incluindo o uso de classes, polimorfismo e o princípio da responsabilidade única.

## Funcionalidades

- Realiza operações básicas: adição, subtração, multiplicação e divisão.
- Interface de usuário simples e intuitiva.
- Arquitetura modular com classes separadas para diferentes responsabilidades.

## Tecnologias Utilizadas

- **JavaScript**: Linguagem principal para lógica da aplicação.
- **Classes e Polimorfismo**: Utilizados para implementar operações e funcionalidades de forma modular e extensível.
- **Export**: Usado para modularizar o código e garantir que cada classe tenha uma única responsabilidade.

## Estrutura do Projeto

O projeto está estruturado em diferentes classes, cada uma com uma responsabilidade específica. Abaixo está um resumo das principais classes e suas funções:

### `Calculator`

- **Responsabilidade**: Coordena as operações matemáticas e a interação com a interface do usuário.
- **Métodos**:
  - `add(x, y)`: Realiza a adição de dois números.
  - `subtract(x, y)`: Realiza a subtração de dois números.
  - `multiply(x, y)`: Realiza a multiplicação de dois números.
  - `divide(x, y)`: Realiza a divisão de dois números.

### `Operation`

- **Responsabilidade**: Define a interface para operações matemáticas e permite a implementação do polimorfismo.
- **Métodos**:
  - `execute(x, y)`: Método abstrato que deve ser implementado por classes derivadas para realizar a operação específica.

### `AddOperation`, `SubtractOperation`, `MultiplyOperation`, `DivideOperation`

- **Responsabilidade**: Implementam operações matemáticas específicas. Cada classe estende a classe `Operation` e implementa o método `execute`.
- **Métodos**:
  - `execute(x, y)`: Implementa a lógica para a operação matemática específica.

## Princípios de Design

- **Princípio da Responsabilidade Única**: Cada classe tem uma única responsabilidade e motivo para mudar. Isso facilita a manutenção e a escalabilidade do código.
- **Polimorfismo**: Permite que diferentes operações matemáticas sejam tratadas de maneira uniforme através de uma interface comum.

## Exemplo de Uso

```javascript
// Importa a classe Calculator e as operações
import Calculator from './Calculator';
import AddOperation from './AddOperation';
import SubtractOperation from './SubtractOperation';

// Cria uma instância da calculadora
const calculator = new Calculator();

// Configura as operações
calculator.setOperation(new AddOperation());

// Realiza uma operação
console.log(calculator.calculate(5, 3)); // Saída: 8

// Configura uma nova operação
calculator.setOperation(new SubtractOperation());
console.log(calculator.calculate(5, 3)); // Saída: 2
