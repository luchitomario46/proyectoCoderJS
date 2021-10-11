let miFormulario = document.getElementById("formulario");

miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    let formulario = e.target

    console.log(formulario.children[1].value);
    console.log(formulario.children[3].value);
    console.log(formulario.children[5].value);
    console.log(formulario.children[7].value);
    console.log(formulario.children[9].value);
    console.log(formulario.children[11].value);
}