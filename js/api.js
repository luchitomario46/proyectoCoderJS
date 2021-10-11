$.getJSON('https://mindicador.cl/api', function(data) {
    var dailyIndicators = data;
    $("<p/>", {
        html: 'El valor actual del DOLAR es $' + dailyIndicators.dolar.valor
    }).appendTo("body");
    $("<p/>", {
        html: 'El valor actual del EURO es $' + dailyIndicators.euro.valor
    }).appendTo("body");
    $("<p/>", {
        html: 'El valor actual del BITCOIN es US$' + dailyIndicators.bitcoin.valor
    }).appendTo("body");
}).fail(function() {
    alert('Error de conexion con el provedor de valores');
});


function convertir(){
    var valor = parseFloat(document.getElementById("cantidad").value);
    document.getElementById("valor").innerHTML = valor;

    var de = document.getElementById("de").value;
    var a = document.getElementById("a").value;

    var dolar = 800;
    var euro = 900;

    resultado = 0;

    //Peso a Dolar

    if(de==1 && a==2){
        resultado = valor/dolar;
    }
    //Peso a euro
    else if(de==1 && a==3){
        resultado = valor/euro;
    }
    //Dolar a peso
    else if(de==2 && a==1){
        resultado = valor * dolar;
    }
    //Dolar a Euro
    else if(de==2 && a==3){
        resultado = dolar/euro;
    }
    //Euro a peso
    else if(de==3 && a==1){
        resultado = valor * euro;
    }
    //Euro a Dolar
    else if(de==3 && a==2){
        resultado = valor*(euro/dolar);
    }
    else{
        resultado = valor
    }
    document.getElementById("resultado").innerHTML="Resultado: $"+ resultado.toFixed(2);
}