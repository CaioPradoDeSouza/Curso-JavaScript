

function pessoaVota(){
    var idade, eleitor;

    idade = document.getElementById('idade').value;

    eleitor = (idade < 17) ? "Não vota" : "Vota";

    alert("Essa pessoa vota ? "+eleitor+" a idade dela é "+idade);
};

