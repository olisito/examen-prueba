const inputnombre = document.getElementById("inputnombre");
const inputnumero = document.getElementById("inputnumero");
const inputemail = document.getElementById("inputemail");
const boton = document.getElementById("boton");
const div3 = document.getElementById("div3");

function agregar() {
    const card = document.createElement("div");
    const newp = document.createElement("p");
    newp.innerHTML = inputnombrevalue;
    card.appendChild(newp);
    div3.appendChild(card);

    let inputnombrevalue = inputnombre.value;
    let inputnumerovalue = inputnumero.value;
    let inputemailvalue = inputemail.value;
    const texto = document.createElement("p");
    parrafos.appendChild(texto);
    texto.innerHTML = inputnombrevalue + inputnumerovalue + inputemailvalue;
}

boton.addEventListener("click", agregar);
