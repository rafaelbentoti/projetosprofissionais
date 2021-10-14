/* STRINGS

Strings são os tipos referentes à textos.

Temos 3 maneiras de escrever uma striong:

    1 - Aspas Duplas: "Olá mundo"
    2 - Aspas Simples: 'Olá Mundo'
    3 - Crase (Template String ou Tamplate Literals): `Olá Mundo`

Concatenação de Strings

    Também podemos juntas várias strings para formar uma nova
    Chamamos esse processo de concatenação e utilizamos o sinal de + para fazê-lo

    const nome = "Rafael"
    const idade = 35
    const frase = "Meu nome é " + nome + " e tenho " + idade + " anos"

Template Strings

    Não há diferença entre usar aspas simples ou duplas!
    A única diferente é a TEMPLATE STRING, pois ela nos permite colocar variáveis javascript no meio da string

    const nome = "Rafael"
    const idade = 27
    const frase = `Meu nome é ${nome} e tenho ${idade} anos`

    // Meu nome é Rafael e tenho 35 anos

*/

/* PROTÓTIPO DE STRINGS

O javascript nos fornece algumas informações (propriedades) e ações (métodos) que podemos realizar sobre uma string

    Propriedade length
    A propriedade length nos diz qual é o tamanho de uma string, incluindo espaços

            const nome = "Rafael Bento"
            console.log(nome.length) //12

    Método toLowerCase()
    Transforma todas as letras da sua string em ninúsculas

            const frase = "OieEeEee!"
            const fraseMinuscula = frase.toLowerCase()

            // fraseMinuscula = oieeeeee!

    Método toUpperCase()
    Transforma todas as letras da sua string em maiúsculas

            const frase = "OieEeEee!"
            const fraseMaiuscula = frase.toUpperCase()

            // fraseMaiuscula = OIEEEEEE!

    Método trim()
    Retira os espaços que existem antes e depois da sua string

            const email = "    rafaelbento.ti@gmail.com     "

            console.log(email.trim())
            // "rafaelbenti.ti@gmail.com"

    Método includes(caracteres)

    Determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false

            const frase = "Hoje comi cenoura"
            frase.includes("cenoura") //true
            frase.includes("batata") //false

    Método relaceAll(chars1, chars2)

    Troca todas as ocorrências de um conjunto de caracteres (chars1) pro alguma outra coisa (chars2)

            const frase = "Hoje comi cenoura, adoro cenoura"
            const novaFrase = frase.replaceAll("cenoura","batata")

            // novaFrase = Hoje comi batata, adoro batata
#############################################################
*/ 

/* ARRAYS

Arrays nada mais são do que listas de elementos
    Ex.: lista de compras, lista de alunos, lista de números da loteria, lista telefônica...

No javascript, usamos colchetes para agrupar os itens de uma lista:

    const listaDeCompras = ["batata", "alface", "queijo"]
    const listaDeNumerosMega = [2, 13, 26, 35, 41, 60]

Podemos colocar elementos de qualquer tipo que vimos até agora dentro de um array!
    Números, strings e booleanos

Também podemos ter elementos de tipos diferentes dentro de um mesmo array

    const meuArray = ["batatinha", 15, true]

Acessando um elemento no ARRAY

Em um array, acessamos os elementos através da posição deles na lista!

Funciona como se fosse uma lista numerada:

Lista de Compras
1. Batata
2. Alface
3. Queijo

    Qual é o item na posição 2?
    Resposta: Alface

    Mas no caso dos arrays, a numeração não começa no 1, mas sim no 0

    0. Batata
    1. Alface
    2. Queijo

    Para acessar um item, colocamos a sua posição (índice) entre colchetes após o nome do array

        const listaDeCompras = ["batata", "alface", "queijo"]
        const segundoItem = listaDeCompras[1] //"alface"

*/

/* PROTÓTIPO DE ARRAY

O javascript nos fornece algumas informações (propriedades) e ações (métodos) que podemos realizar sobre uma lista (array)]

A propriedade length nos diz qual é a quantidade de itens de um array

    const pokemons = ["bulbasauro", "squirtle", "charmander"]
    console.log(pokemons.length) //3

O método push(elemento) adiciona um ou mais elementos ao final de um array

    const numeros = [1, 2, 3]

    numeros.push(4)
    console.log(numeros) // [1, 2, 3, 4]

    numeros.push(5, 6, 7)
    console.log(numeros) // [1, 2, 3, 4, 5, 6, 7]

O método pop() remove o último elemento de um array

    const meusPeixes = ["palhaço", "mandarim", "esturjão"]
    meusPeixes.pop()
    console.log(meusPeixes) // ["palhaço", "mandarim"]

O método includes(elementos) determin se um array contém um determinado elemento, retornando true ou false 

*/