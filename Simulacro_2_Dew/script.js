// Obtener el formulario por su ID
const formulario = document.getElementById('searchForm');

// Agregar un evento al formulario para capturar su envío
formulario.addEventListener('submit', function(event) {
  // Evitar el comportamiento predeterminado del formulario (evitar que se recargue la página)
  event.preventDefault();

  const cilindrada = document.getElementById("cilindrada").value
  const combustible = document.getElementById("tipocombustible").value
  const year = document.getElementById("ano").value

  trabaja(cilindrada, combustible, year);
});

async function trabaja(cil, comb, anio) {
  if (cil != "" && comb != "" && anio != "") {
    try {
      const respuesta = await fetch("Talleres.json");
      const data = await respuesta.json();

      const resultado = verificarResultado(data.Talleres, cil, comb, anio);
      mostrarResultado(resultado);

    } catch (error) {
      console.error("Error al cargar datos: " + error);
    }
  } else {
    alert("Debes rellenar todos los campos");
  }
}

function verificarResultado(data, cilindrada, combustible, year) {
  let coches = data.filter(result => {
    if (
      (cilindrada === "N/A (vehiculos eléctricos)" && combustible === "Electrico") ||
      (result.cilindrada === cilindrada && result.tipocombustible === combustible)
    ) {
      return result.anofabricacion >= parseInt(year);
    }
    return false;
  });

  return coches;
}


function mostrarResultado(resultado) {
  let texto = `<h1>Talleres </h1>`;
  let otro = "";

  resultado.forEach(result => {
    otro += `${result.nombre} </br> ${result.cilindrada} </br> ${result.anofabricacion} </br></br>`;
  });

  document.getElementById("resultados").innerHTML = texto + otro;
}
