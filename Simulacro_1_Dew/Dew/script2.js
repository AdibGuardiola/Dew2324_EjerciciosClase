// Función para mostrar los empleados menores de la edad especificada con la categoría seleccionada
function mostrarEmpleadosMenores() {
    // Obtener las selecciones del formulario
    const edadSeleccionada = document.getElementById('edad').value;
    const categoriaSeleccionada = document.getElementById('categoriaEdad').value;
  
    // Obtener los datos desde el archivo JSON usando fetch
    fetch('empleados.json')
      .then(response => response.json())
      .then(personasJSON => {
        // Filtrar los empleados menores de la edad especificada con la categoría seleccionada
        const empleadosFiltrados = personasJSON.filter(persona => {
          return (
            persona.Edad < edadSeleccionada &&
            persona.Categoría === categoriaSeleccionada
          );
        });
  
        // Mostrar el resultado en la página
        mostrarResultadoEmpleados(empleadosFiltrados);
      })
      .catch(error => console.error('Error al obtener los datos:', error));
  }
  
  // Función para mostrar el resultado de los empleados en la página
  function mostrarResultadoEmpleados(empleados) {
    const resultadoDiv = document.getElementById('resultadoEdad');
    resultadoDiv.innerHTML = '';
  
    if (empleados.length === 0) {
      resultadoDiv.innerHTML = '<p>No se encontraron empleados que coincidan con los criterios seleccionados.</p>';
    } else {
      const listaEmpleados = document.createElement('ul');
      empleados.forEach(empleado => {
        const itemEmpleado = document.createElement('li');
        // Mostrar todos los detalles de cada empleado
        itemEmpleado.textContent = `
          Nombre: ${empleado.Nombre}
          Cargo: ${empleado.Cargo}
          Tipo de Titulación: ${empleado['Tipo de Titulación']}
          Categoría: ${empleado.Categoría}
          Localidad: ${empleado.Localidad}
          Código Postal: ${empleado['Código Postal']}
          Edad: ${empleado.Edad}
          Tipo de Trabajo: ${empleado['Tipo de Trabajo']}
        `;
        listaEmpleados.appendChild(itemEmpleado);
      });
      resultadoDiv.appendChild(listaEmpleados);
    }
  }
  