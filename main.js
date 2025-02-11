const inputnombre = document.getElementById("inputnombre");
const inputnumero = document.getElementById("inputnumero");
const inputemail = document.getElementById("inputemail");
const boton = document.getElementById("boton");

function agregar() {
    const parrafos = document.getElementById("div3");

    let inputnombrevalue = inputnombre.value;
    let inputnumerovalue = inputnumero.value;
    let inputemailvalue = inputemail.value;
    const texto = document.createElement("p");
    parrafos.appendChild(texto);
    texto.innerHTML = inputnombrevalue + inputnumerovalue + inputemailvalue;
}

boton.addEventListener("click", agregar);
