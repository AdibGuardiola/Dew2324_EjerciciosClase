var datos = [];

function agregarDatos() {
    var nombre = document.getElementById("nombre").value;
    var puesto = document.getElementById("puesto").value;
    var edad = document.getElementById("edad").value;
    var localizacion = document.getElementById("localizacion").value;

    if (nombre && puesto && edad && localizacion) {
        var registro = "Nombre: " + nombre + ", Puesto: " + puesto + ", Edad: " + edad + ", Localización: " + localizacion;
        datos.push(registro);
        document.getElementById("nombre").value = "";
        document.getElementById("puesto").value = "";
        document.getElementById("edad").value = "";
        document.getElementById("localizacion").value = "";
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

function mostrarDatos() {
    var listaDatos = document.getElementById("lista-datos");
    listaDatos.innerHTML = "";
    datos.forEach(function(dato) {
        var li = document.createElement("li");
        li.textContent = dato;
        listaDatos.appendChild(li);
    });
}

function generarArchivo() {
    var contenido = datos.join("\n");
    var blob = new Blob([contenido], { type: "text/plain" });

    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "datos.txt";
    document.body.appendChild(a);
    a.click();

    // Limpiar los datos después de generar el archivo
    datos = [];
    mostrarDatos();
}
