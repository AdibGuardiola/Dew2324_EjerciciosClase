var datos = [];

function agregarDatos() {
    var nombre = document.getElementById("nombre").value;
    var puesto = document.getElementById("puesto").value;
    var localizacion = document.getElementById("localizacion").value;
    if (nombre && puesto && localizacion) {
        var registro = "Nombre: " + nombre + ", Puesto: " + puesto + ", Localización: " + localizacion;
        datos.push(registro);
        document.getElementById("nombre").value = "";
        document.getElementById("puesto").value = "";
        document.getElementById("localizacion").value = "";
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

function generarArchivo() {
    var contenido = datos.join("\n");
    var blob = new Blob([contenido], { type: "text/plain" });

    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "datos.xls";
    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);
}
