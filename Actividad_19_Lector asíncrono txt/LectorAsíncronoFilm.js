const cargarPeliculas = async () => {
    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=aa162b9b4277cd5d415a09f0d1314f57&language=es-MX`);
        const datos = await respuesta.json();
        console.log(datos.results);
        let peliculas = '';
        datos.results.forEach(pelicula => {
            peliculas += `
                <div class="pelicula">
                    <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                    <h3 class="titulo">${pelicula.title}</h3>
                </div>
            `;
        });
        // Agrega el contenido de las películas al elemento con el id 'employee-list'
        document.getElementById('employee-list').innerHTML = peliculas;
    } catch (error) {
        console.error('Error al cargar las películas:', error);
    }
};

// Llama a la función cargarPeliculas después de definirla
cargarPeliculas();
