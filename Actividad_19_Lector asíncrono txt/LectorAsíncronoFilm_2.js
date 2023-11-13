const cargarPeliculas = async () => {
    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=aa162b9b4277cd5d415a09f0d1314f57&language=es-MX`);
        const datos = await respuesta.json();
        let peliculasHTML = '';

        // Itera sobre las dos primeras películas en el array 'results'
        for (let i = 0; i < 2; i++) {
            const pelicula = datos.results[i];
            // Verifica si la película actual tiene datos válidos
            if (pelicula && pelicula.title && pelicula.poster_path) {
                // Agrega la información de la película al string 'peliculasHTML'
                peliculasHTML += `
                    <div class="pelicula">
                        <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                        <h3 class="titulo">${pelicula.title}</h3>
                    </div>
                `;

                // Imprime el título de la película en la consola
                console.log(pelicula.title);
            }
        }

        // Agrega el contenido de las dos primeras películas al elemento con el id 'employee-list'
        document.getElementById('employee-list').innerHTML = peliculasHTML;
    } catch (error) {
        console.error('Error al cargar las películas:', error);
    }
};

// Llama a la función cargarPeliculas después de definirla
cargarPeliculas();

