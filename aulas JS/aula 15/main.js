/*

for (let i=0; i<100; i++){
    //document.getElementById('teste').innerHTML +=i + ",";
}

*/

var ano = new Date().getFullYear();

var anoSelecionado = document.getElementById('ano');

for (let i = ano; i >= 1900; i--){
    document.getElementById("ano").innerHTML += "<option value'" + i + "'>" +i+"</option>"
}

function mostraData(){
    document.getElementById('p').innerHTML = "Você selecionou o ano de " + anoSelecionado.value;
}

const carros = ["gol", "fusca", "brasilia", "del rey", "chevette"];

var tamanho = carros.length;

for(let i=0; i<tamanho;i++){
    document.write(carros[i]+ "-");
}