function aviso(){
    alert("Bienvenido al mundo JavaScript");
}

function confirmacion(){
    let confirmacion = confirm("¿Desea salir de la Sesión?");
    alert (`Valor seleccionado ${confirmacion}`);
}

function capturarDatos(){
    let nombre = prompt("¿Cuál es su nombre?");
    let edad = prompt("¿Cuál es du edad?", 0);
    alert (`Su nombre es ${nombre} y su edad ${edad}`);
}

function dibujarParrafo(){
    let parrafo = prompt(
        "Escriba la informacion que desea visualizar en el parrafo"
    );

    const p = document.querySelector("#idParrafo");
    p.innerHTML = parrafo;
}

