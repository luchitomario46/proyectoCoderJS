let miFormulario = document.getElementById("formulario");

//miFormulario.addEventListener("submit", validarFormulario);

$("div.botonSubmitClean").prepend('<button id="btnSend">Enviar</button>')

$("#btnSend").click((e) => {
    alert("Nombre: " + formulario.children[1].value + " " + formulario.children[3].value);
    alert("Pais agregado: " + formulario.children[7].value)
    alert("Capital: " + formulario.children[9].value)
    alert("Moneda: " + formulario.children[11].value)
    alert("Continente: " + formulario.children[9].value)
    alert("La informacion sera revisada por nuestro equipo, y posteriormente agregada a nuestra Base de Datos, muchas gracias por participas en Viajeros.com")
});