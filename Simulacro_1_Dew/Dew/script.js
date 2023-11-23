// Función para mostrar las personas según las selecciones en el formulario
function mostrarPersonasSeleccionadas() {
    // Obtener las selecciones del formulario
    const cargoSeleccionado = document.getElementById('cargo').value;
    const categoriaSeleccionada = document.getElementById('categoria').value;
    const tipoTrabajoSeleccionado = document.getElementById('tipoTrabajo').value;
  
    // Obtener los datos desde el archivo JSON usando fetch
    fetch('empleados.json')
      .then(response => response.json())
      .then(personasJSON => {
        // Filtrar las personas según las selecciones
        const personasFiltradas = personasJSON.filter(persona => {
          return (
            (cargoSeleccionado === '' || persona.Cargo === cargoSeleccionado) &&
            (categoriaSeleccionada === '' || persona.Categoría === categoriaSeleccionada) &&
            (tipoTrabajoSeleccionado === '' || persona['Tipo de Trabajo'] === tipoTrabajoSeleccionado)
          );
        });
  
        // Mostrar el resultado en la página
        mostrarResultado(personasFiltradas);
      })
      .catch(error => console.error('Error al obtener los datos:', error));
  }
  
  // Función para mostrar el resultado en la página
  function mostrarResultado(personas) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';
  
    if (personas.length === 0) {
      resultadoDiv.innerHTML = '<p>No se encontraron personas que coincidan con los criterios seleccionados.</p>';
    } else {
      const listaPersonas = document.createElement('ul');
      personas.forEach(persona => {
        const itemPersona = document.createElement('li');
        // Mostrar todos los detalles de cada empleado
        itemPersona.textContent = `
          Nombre: ${persona.Nombre}
          Cargo: ${persona.Cargo}
          Tipo de Titulación: ${persona['Tipo de Titulación']}
          Categoría: ${persona.Categoría}
          Localidad: ${persona.Localidad}
          Código Postal: ${persona['Código Postal']}
          Edad: ${persona.Edad}
          Tipo de Trabajo: ${persona['Tipo de Trabajo']}
        `;
        listaPersonas.appendChild(itemPersona);
      });
      resultadoDiv.appendChild(listaPersonas);
    }
  }
  