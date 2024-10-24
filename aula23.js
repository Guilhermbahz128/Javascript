// 1. Crie uma variável chamada `nome` e atribua seu nome a ela. Exiba o nome no console.
let nome = "GUilherme"
console.log(nome)

// 2. Crie uma constante chamada `PI` e atribua o valor 3.14. Exiba o valor no console.
const PI =3.14;
console.log(PI)

// 3. Crie uma variável `idade`, atribua um valor e depois altere para um novo valor. Exiba ambos no console.
let idade = 15
console.log(idade)
idade = 19
console.log(idade)
// 4. Crie duas variáveis de string, `primeiroNome` e `sobrenome`, e exiba o nome completo concatenado.
let primeiroNome = "Guilherme"
let segundoNome = "Oliveira"
console.log(primeiroNome + " " + segundoNome)

// 5. Dada a string `mensagem = "Olá, mundo!"`, exiba a mensagem em letras maiúsculas.
let mensagem = "Olá, mundo!"
console.log(mensagem)
let mensagemMaiúsculo = mensagem.toUpperCase();
console.log( mensagemMaiúsculo);

// 6. Crie um array com os nomes de três frutas e exiba o segundo elemento do array.
const lista = ["banana", "laranja", "uva"]
const segundoitem = lista[1]
console.log(segundoitem)

// 7. Crie um array com três números e adicione um novo número no final. Exiba o array atualizado.
const Numeros = ["8", "9", "10"]
Numeros.push(7);
console.log(Numeros);

// 8. Crie duas variáveis, `a` e `b`, atribua valores numéricos a elas e exiba a soma.
let A = 54
let B = 34
console.log(A + B)

// 9. Calcule a média de três números armazenados em variáveis e exiba o resultado.
let numero1 = 10
let numero2 = 78
let numero3 = 69
console.log(numero1 +  numero2 + numero3)

// 10. Crie uma variável `contador` inicializada em 0, incremente-a três vezes e exiba seu valor final.
let contador = 0
contador = contador + 3
console.log(contador)
// 11. Crie duas variáveis booleanas, `chuvendo` e `frio`, e use um operador lógico para verificar se deve levar um guarda-chuva.
let chovendo = true // hoje está chovendo
let frio = false // hoje faz muito calor

let levarguardachuva = chovendo || frio // levar guarda chuvas se tiver chuvendo ou frio
console.log('devo levar um guarda chuva ?', levarguardachuva)

// 12. Crie uma variável `idade` e use um operador lógico para verificar se a pessoa pode dirigir (idade >= 18).
let idade2 = 23
let podedirigir = idade2 >= 18
console.log("pode dirigir ?", podedirigir)

// 13. Crie duas variáveis `x` e `y`, atribua valores diferentes e verifique se são iguais.
let x = 2
let y = 7
let saoIguais = (x==y) 
console.log(saoIguais)

// 14. Crie uma variável `idade` e verifique se a pessoa é maior de idade (idade >= 18) e exiba uma mensagem correspondente.
let idade3 = 15
let maiorIdade = (15==18)
console.log(maiorIdade)

// 15. Crie duas strings, `senha1` e `senha2`, e verifique se elas são iguais.
let senha1
let senha2
console.log(senha1==senha2)

// 16. Crie uma string e exiba o número de caracteres que ela contém.
nome = "ola mundo"
numero_de_caracteres = (nome)
console.log(numero_de_caracteres)



// 18. Crie uma variável numérica e verifique se é par ou ímpar usando um operador aritmético.
let Numerica= 3
let par
let impar
console.log(numerica==par)



// 20. Crie duas variáveis, `nota1` e `nota2`, calcule a média e verifique se a média é maior ou igual a 7.
let nota1 = 4
let nota2 = 3
console.log(nota1 + numero2)