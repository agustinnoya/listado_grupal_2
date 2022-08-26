const limipiar = document.getElementById("limpiar");
const agregar = document.getElementById("agregar");
const itemText = document.getElementById("item");
const contenedor = document.getElementById("contenedor");

let i = 0;
let content = [];

if (localStorage.getItem("localContent") != null) {
    contenedor.innerHTML = ""
    let test = localStorage.getItem("localContent");
    let content = JSON.parse(test);
    for (i = 0; i < content.length; i++) {
        contenedor.innerHTML += `
        ${content[i]}<hr>
        `}
}

agregar.addEventListener("click", () => {
    console.log(itemText.value);
    if (itemText.value == "") {
        alert("No se ingreso ningun valor.");
    } else {
        content[i] = itemText.value;
        contenedor.innerHTML += `
        ${content[i]}<hr>
        `
        i += 1;
        localStorage.setItem("localContent", JSON.stringify(content))
    }
});

limipiar.addEventListener("click", () => {
    localStorage.clear;
    contenedor.innerHTML = ""
});

/* Crear array
guardar como json (stringify)
guardar en localstorage
llamar localstorage
convertir json a array (parse)
hacer lo que haya que hacer con eso */