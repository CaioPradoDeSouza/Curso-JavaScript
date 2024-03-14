const carro = {
    marca: "fiat",
    modelo: "uno",
    ano: "2005",
    placa: "efd-9899",
    

    completo: function(){
        return "A marca é "+ this.marca+" e o modelo é "+this.modelo 
    },

};

function buzina (){
    alert('biiii, cabo o frei do uno')
};

//buzina()


console.log(carro.completo());