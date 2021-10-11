/* LÓGICA DE PROGRAMAÇÃO

O computadore consegue fazer milhões de contas por segundo, mas não é capaz de compreender coisas da forma que o cérebro humano faz

Para que algo aconteça da maneira que a gente quer em um programa, precisamos explicar CADA PASSO

Precisamos, então, organizar nossas ideias e transformar em passos que o computador enteda

Chamamos esse passo a passo de instruções passadas para o computador de Algoritmo

Um Algoritmo é, portanto, uma sequência de passos que visam atingir um objetivo bem definido
    *Receita de um bolo, trocar o pneu de um carro

O algoritmo vai represntar o raciocínio lógico envolvido na resolução do problema

Antes mesmo de começar a programar, você pode pensar COMO resolver o seu problema

Não se preocupe com o javascript nesse momento!
Faça desenhos, diagramas, escreva em linguagem natural a sua ideia

Isso vai te ajudar a entender como o problema funciona e traduzir a solução para código será mais fácil

Temos algumas ferramentas para nos ajudar nesse momento de pensar sobre o problema:
* Descrição textual
*   Pseudocódigo
*       Fluxogramas

DESCRIÇÃO TEXTUAL

A ideia aqui é simplesmente escrever o que você esta pensando para conseguir resolver o problema

Isso ajuda a ter mais clareza do que está se passando pela sua cabeça registrar esses pensamentos, o que será útil quando chegar o momento de programar

Não existe uma regra! Faça da meneira que achar melhor para você

PSEUDOCÓDIGO

Esse é um passo entre a linguagem natural e o código

É um texto estruturado de maneira mais próxima à linguagem de programação, mas você não precisa saber as palavras e sintaxes corretinhas

    ler nome
    let mensagem `Oi eu me chamo {nome}`
    imprimir mensagem

FLUXOGRAMA

Um fluxograma é um diagrama que nos ajuda a entender a ordem em que cada coisa acontece na nossa solução de uma forma visual

                início

                ler nome

                mensagem = `Oi eu sou {nome}`

                imprimir mensagem

                fim

  /* ####################################
  
  OPERADOR ARITMÉTICOS

  Como vimosd na aula passada, podemos ter variáveis que são do tipo número

  E quando falamos de números, lembramos da nossa querida matemática!

  À seguir vamos ver como fazer algumas operações básicas da matemática no Javascript
  
  SOMA

  const primeiroValor = 10
  const segundoValor = 20

  const resultado = primeiroValor + segundoValor +4
  console.log(resultado) // 34

        SUBTRAÇÃO

        const primeiroValor = 10
        const segundoValor = 20

        const resultado = primeiroValor - segundoValor
        console.log(resultado) // -10

              Multiplicação

              const primeiroValor = 10
              const segundoValor = 25

              const resultado = primeiroValor * segundoValor
              console.log(resultado) // 250

                      Divisão

                        const primeiroValor = 345
                        const segundoValor = 10

                        const resultado = primeiroValor / segundoValor
                        console.log(resultado) // 34.5

RESTO DA DIVISÃO

Existem casos em que a divisão não dá um número inteiro (sem vírgula)

Quando acontece isso, dizemos que há um resto na divisão

Por exemplo: dividir 20 por 3:
  Dá o resultado 6, com resto 2
  20 = 3x6 + 2

  const restoDaDivisao = 11 % 4
  console.log(restoDaDivisao) // 3

OBS.: Às vezes, podemos querer alterar o valor de uma variável fazendo alguma conta com ela própria

Por exemplo: vamos supor que temos uma variável  de idade e que a  pessoa fez aniversário

  let minhaIdade = 26
  minhaIdade = minhaIdade +1

  UMA POSSÍVEL SIMPLIFICAÇÃO

  let resultado = 100

  resultado = resultado + 20  OU FAZ ASSIM resultado += 20
  resultado = resultado - 10  OU FAZ ASSIM resultado -= 20
  resultado = resultado * 5  OU FAZ ASSIM resultado *= 5
  resultado = resultado / 10  OU FAZ ASSIM resultado /= 10
 */

/* COMPARADORES ##########################

Comparadores são operadores que permitem comparar variáveis entre si

São eles:

  Igual: ===
  Diferente: !==
  Maior e maior igual: > e >=
  Menor e menor igual: < e <=

  Quando fazemos uma comparação, o nosso resultado sempre vai ser verdadeiro ou falso
    Ex.: 1 é igual a 1: SIM ou NÃO (verdadeiro ou falso)

  Por isso, resultado de uma comparação é sempre um booleano (true ou false)

  Quando a comparação for correta, o resultado é true.
  Caso contrário, é false.

    === VERIFIQUE SE OVALOR E O TIPO SÃO IGUAIS

    "1" === "2" // false, são diferentes
    "2" === "2" //true, são iguais
    2 === "2" // false, tipo diferente

    const condicao = 1 === 2
    // o valor que sai da comparação
    // pode ser guardado em uma variável
    // nesse caso, condicao === false

    !== VERIDICA SE O VALOR E O TIPO SÃO DIFERENTES

    "1" !== "2" //true, são diferentes
    "2" !== "2" //false, são iguais
    2 !== "2" //true, tipos diferentes

    const condicao = 1 !== 2 //true

  > E >=
  Pode ser usado com numbers

  >=: retorna true se os números envolvidos forem iguais ou se o primeiro for maior que o segundo

  >: retorna true só se o primeiro for maior que o segundo

  1 > 2 //false, porque 1 é menor que 2
  2 > 2 //false, porque 2 é igual a 2
  3 > 2 //true, porque 3 é maior que 2
  
  1 >= 2 //false, porque 1 é menor que 2
  2 >= 2 //true, por uqe 2 é igual a 2
  3 >= 2 //true. porque 3 é maior que 2

  Tambem se aplica da mesma forma na subtração.

*/

// OPERADORES LÓGICOS ESPECIAIS

/*

São operadores especiais usados entre booleanos

Retornam um valor booleano

Existem 3 importantes:
  Operador E: &&
  Operador OU: ||
  Operador Não/Negação: !
*/