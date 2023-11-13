// Obtén el elemento de entrada de archivo
var fileInput = document.getElementById("datos_1");

// Obtén el elemento de lista de empleados
var employeeList = document.getElementById("employee-list");

// Agrega un evento de cambio al elemento de entrada de archivo
fileInput.addEventListener('change', function(event) {
  var file = event.target.files[0];
  var reader = new FileReader();

  // Cuando el archivo se ha cargado completamente
  reader.onload = function() {
    var data = reader.result;
    var employees = data.split('\n');
    employees.forEach(function(employeeData) {
      var employeeInfo = employeeData.split(','); // Suponiendo que los datos en el archivo de texto están separados por comas
      var id = employeeInfo[0].trim();
      var name = employeeInfo[1].trim();
      var department = employeeInfo[2].trim();

      var li = document.createElement("li");
      li.textContent = "ID: " + id + ", Nombre: " + name + ", Departamento: " + department;
      employeeList.appendChild(li);
    });
  };

  // Lee el archivo como texto
  reader.readAsText(file);
});
