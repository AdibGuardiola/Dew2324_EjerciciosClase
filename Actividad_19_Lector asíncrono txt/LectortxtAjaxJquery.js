$(document).ready(function() {
    var employeeList = $("#employee-list");

    $.ajax({
        url: "datos_1.txt",
        method: "GET",
        dataType: "text",
        success: function(data) {
            var employees = data.split('\n');
            employees.forEach(function(employeeData) {
                var employeeInfo = employeeData.split(',');
                var id = employeeInfo[0].trim();
                var name = employeeInfo[1].trim();
                var department = employeeInfo[2].trim();

                var listItem = $("<li>").text("ID: " + id + ", Nombre: " + name + ", Departamento: " + department);
                employeeList.append(listItem);
            });
        },
        error: function() {
            alert("Error al cargar la lista de empleados.");
        }
    });
});
