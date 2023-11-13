function calcularFibonacci(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [];
    } else if (n === 2) {
        return [0, 1];
    } else if (n === 3) {
        return [0, 1, 1];
    } else {
        const fibo = calcularFibonacci(n - 1);
        fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
        return fibo;
    }
}

function rellena() {
    let valor = document.getElementById("valor2").value;
    const resultado = calcularFibonacci(parseInt(valor));

    // Mostrar resultado en la consola
    console.log(`El Fibonacci de {valor} es {resultado.join(", ")}`);
    


    // Mostrar resultado en el elemento HTML
    document.getElementById("resultado2").innerText = `El Fibonacci de ${valor} es ${resultado.join(", ")}`;
}
