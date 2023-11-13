var employeeList; 

document.addEventListener('DOMContentLoaded', async function() { 
  employeeList = document.getElementById("employee-list");  
  await fetchData();
});

async function fetchData() {
  try {
    const response = await fetch('datos_1.txt');
    const data = await response.text();
    const employees = data.split('\n');

    employees.forEach(function(employeeData) {
      var employeeInfo = employeeData.split(',');
      var id = employeeInfo[0].trim();
      var name = employeeInfo[1].trim();
      var department = employeeInfo[2].trim();

      var li = document.createElement("li");
      li.textContent = "ID: " + id + ", Nombre: " + name + ", Departamento: " + department;
      employeeList.appendChild(li);
    });
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    // Puedes manejar el error aquí, por ejemplo, mostrando un mensaje al usuario.
  }
}
