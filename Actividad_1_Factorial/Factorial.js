function calcularFactorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * calcularFactorial(n - 1);
    }
}

function rellena() {
    let valor = document.getElementById("valor").value;
    const resultado = calcularFactorial(parseInt(valor));

    // Mostrar resultado en la consola
    console.log(`Factorial de {valor} es {resultado}`);

    // Mostrar resultado en el elemento HTML
    document.getElementById("resultado").innerText = `El Factorial de ${valor} es ${resultado}`;
}



