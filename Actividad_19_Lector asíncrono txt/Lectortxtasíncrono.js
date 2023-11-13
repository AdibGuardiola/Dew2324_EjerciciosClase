document.addEventListener('DOMContentLoaded', function() {
  var employeeList = document.getElementById("employee-list");

  fetch('datos_1.txt')
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {
      var employees = data.split('\n');

      employees.forEach(function(employeeData) {
        var employeeInfo = employeeData.split(',');
        var id = employeeInfo[0].trim();
        var name = employeeInfo[1].trim();
        var department = employeeInfo[2].trim();

        var li = document.createElement("li");
        li.textContent = "ID: " + id + ", Nombre: " + name + ", Departamento: " + department;
        employeeList.appendChild(li);
      });
    })
    .catch(function(error) {
      console.error('Error al obtener los datos:', error);
    });
});
