document.getElementById("menu-item").addEventListener("click", function() {
    var dropdown = document.getElementById("menu-dropdown");
    dropdown.classList.toggle("active");
});

// Cerrar el menú cuando se hace clic fuera de él
document.addEventListener("click", function(event) {
    var dropdown = document.getElementById("menu-dropdown");
    var menuButton = document.getElementById("menu-item");
    if (event.target !== dropdown && event.target !== menuButton) {
        dropdown.classList.remove("active");
    }
});

// Evitar que los clics dentro del menú lo cierren
document.getElementById("menu-dropdown").addEventListener("click", function(event) {
    event.stopPropagation();
});
