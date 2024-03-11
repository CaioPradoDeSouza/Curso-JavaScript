/*

    váriaveis são espaços de memória aonde podemos guardar diversos tipos de informações de vários formatos nomealos e referencialos .

    o  nome nao pode começar por numero, não pode ter espaços entre o nome uza-se _ underline cifrao pode ser usado, não pode usar palavras reservadas de uso do JS.

    existem 3 palavras reservadas para declarar váriaveis: 


    var (é possivel mudar o valor durante a execução),

    let (não pode ser alterada não pode ser redeclarada somente em escopos diferentes),

    const (constante não muda de valor),
*/




// declarção de variáveis 

var a,b,c;

//atribuição de valores para váriaveis

a = 1;
b = 2;
c = 3;

// utilizando as variáveis 

//alert(a+b+c);

// variável escopo global
let carro = "fusca";


function nomeSobrenome(onclick){

    //variável escopo local
    let nome = document.getElementById('nome').value;

    let sobrenome = document.getElementById('sobrenome').value;

    document.getElementById('texto').innerHTML = nome + " " + sobrenome;

};

