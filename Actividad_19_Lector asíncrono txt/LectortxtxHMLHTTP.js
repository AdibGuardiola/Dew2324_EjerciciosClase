document.addEventListener('DOMContentLoaded', function() {
  var employeeList = document.getElementById('employee-list');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'datos_1.txt', true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
          if (xhr.status === 200) {
              var employees = xhr.responseText.split('\n');
              employees.forEach(function(employeeData) {
                  var employeeInfo = employeeData.split(',');
                  var id = employeeInfo[0].trim();
                  var name = employeeInfo[1].trim();
                  var department = employeeInfo[2].trim();

                  var li = document.createElement('li');
                  li.textContent = 'ID: ' + id + ', Nombre: ' + name + ', Departamento: ' + department;
                  employeeList.appendChild(li);
              });
          } else {
              console.error('Error al cargar los datos:', xhr.status);
          }
      }
  };
  xhr.send();
});
