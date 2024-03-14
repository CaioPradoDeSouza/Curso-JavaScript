
// ARRAY ou MATRIZ LITERAL

const lista = [
    "arroz", // [0] posição 0
    "feijão", // [1] posição 1 
    "macarrão", // [2] posição 2
    "leite" // [3] posição 3
];

console.log(lista);


// INSERINDO NOVO DADO NA ARRAY

lista[0]="café";

lista[4]="bolacha";

lista.push("batata");


//alert(lista[0]);

// DIFERENÇA ENTRE LISTA E MATRIZ

// MATRIZ

const pessoa = ["dimitri", "teixeira", 30];

// LISTA OBJETO

const pessoa1 = {nome:"dimitri", sobrenome:"teixeira", idade:30};

// muda a forma de criação, de uso também, arrays tem mais metodos, objetos são mais simples.

console.log(pessoa.length);

console.log(Array.isArray(pessoa));