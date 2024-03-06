let text = document.getElementById('texto');

function voltaBack(){
    
    if(document.body.style.backgroundColor = "red"){

        document.body.style.backgroundColor = "darkseagreen";
    }
};

function mudaBack(){
    
    if(document.body.style.backgroundColor == "darkseagreen"){

        document.body.style.backgroundColor = "red";
    }
    else{
        onclick(voltaBack());
    }
};

function mudaTexto(onclick){

    document.getElementById("text_area").innerHTML=text.value;
};


function alerta(){

    alert("olá isto é um alert");

};

console.log("Função exibir no console");

