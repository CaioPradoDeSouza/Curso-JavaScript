/*

/var interruptor = "on";

if(interruptor == "on"){
    alert('A lampada está ligada');
}else{
    alert('A lampada está desligada');
}

 Pegando a hora do sistema

var hora = new Date().getHours();

if(hora<12){
    alert('bom dia !');
}else if(hora > 12 && hora < 18){
    alert('boa tarde !');
}else{
    alert('boa noite!');
}

*/

function verificar(){
    let nome = document.getElementById("nome").value;

    let p = document.getElementById("teste");

    if(nome == "" || nome==null){
        p.innerHTML = "O campo não pode ser vazio animal"
    }else{
        p.innerHTML="Parabens animal! você escreveu algo.";
        p.style.color = "blue";
    }
}