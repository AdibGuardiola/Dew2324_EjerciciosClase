// main.js

const apiKey = 'a7a6acf4bb38c97fe6bfa1a3c782bd77';
const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const forecastApiUrl = 'https://api.openweathermap.org/data/2.5/onecall';
const airQualityApiUrl = 'https://api.openweathermap.org/data/2.5/air_pollution';

// Selectores de elementos HTML
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const cityElement = document.querySelector('.city');
const tempElement = document.querySelector('.temp');
const humidityElement = document.querySelector('.humidity');
const windElement = document.querySelector('.wind');
const weatherIcon = document.querySelector('.weather-icon');
const airQualityElement = document.querySelector('.air-quality');
const forecastElement = document.querySelector('.forecast');

// Manejador de eventos para el botón de búsqueda
searchBtn.addEventListener('click', () => {
    if (!searchBox.value) {
        return alert('Introduce una ciudad');
    }
    fetchWeatherData(searchBox.value);
});

// Función para obtener datos del clima
function fetchWeatherData(city) {
    // Primero, obtenemos datos actuales del clima
    fetch(`${weatherApiUrl}?q=${city}&units=metric&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // Actualizamos la información actual del clima en la página
            updateCurrentWeather(data);
            // Luego, obtenemos datos de pronóstico y calidad del aire
            fetchForecastAndAirQuality(city);
        })
        .catch((error) => {
            console.error('Error al obtener datos de clima:', error);
        });
}

// Función para actualizar información actual del clima
function updateCurrentWeather(data) {
    const city = data.name;
    const temperature = Math.round(data.main.temp) + '°C';
    const humidity = data.main.humidity + '%';
    const windSpeed = data.wind.speed + ' km/h';
    const weather = data.weather[0].main;

    cityElement.textContent = city;
    tempElement.textContent = temperature;
    humidityElement.textContent = humidity;
    windElement.textContent = windSpeed;
    setWeatherIcon(weatherIcon, weather);
}

// Función para establecer el icono del clima
function setWeatherIcon(element, weather) {
    const weatherIcons = {
        Clear: 'sol.png',
        Clouds: 'nubes.png',
        Rain: 'lluvia.png',
        Drizzle: 'llovizna.png',
    };
    element.src = `images/${weatherIcons[weather]}`;
}

// Función para obtener datos de pronóstico y calidad del aire
function fetchForecastAndAirQuality(city) {
    // Obtenemos datos de pronóstico
    fetch(`${forecastApiUrl}?q=${city}&units=metric&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // Actualizamos el pronóstico del tiempo en la página
            updateWeatherForecast(data);
        })
        .catch((error) => {
            console.error('Error al obtener datos de pronóstico:', error);
        });

    // Obtenemos datos de calidad del aire
    fetch(`${airQualityApiUrl}?q=${city}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // Actualizamos la calidad del aire en la página
            updateAirQuality(data);
        })
        .catch((error) => {
            console.error('Error al obtener datos de calidad del aire:', error);
        });
}

// Función para actualizar el pronóstico del tiempo
function updateWeatherForecast(data) {
    const dailyForecast = data.daily.slice(1, 5); // Excluye el día actual
    forecastElement.innerHTML = '';
    dailyForecast.forEach((day, index) => {
        const dayName = getDayName(index + 1);
        const dayTemp = Math.round(day.temp.day) + '°C';
        const dayIcon = day.weather[0].main;
        const dayIconSrc = `images/${getWeatherIcon(dayIcon)}`;

        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.innerHTML = `
            <p class="day-name">${dayName}</p>
            <img src="${dayIconSrc}" class="day-icon">
            <p class="day-temp">${dayTemp}</p>
        `;

        forecastElement.appendChild(dayElement);
    });
}

// Función para obtener el nombre del día de la semana
function getDayName(dayIndex) {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return days[(new Date().getDay() + dayIndex) % 7];
}

// Función para obtener el icono del clima
function getWeatherIcon(weather) {
    const weatherIcons = {
        Clear: 'sol.png',
        Clouds: 'nubes.png',
        Rain: 'lluvia.png',
        Drizzle: 'llovizna.png',
    };
    return weatherIcons[weather] || 'sol.png';
}

// Función para actualizar la calidad del aire
function updateAirQuality(data) {
    const airQualityIndex = data.list[0].main.aqi;
    const airQualityColor = getAirQualityColor(airQualityIndex);
    airQualityElement.style.borderBottomColor = airQualityColor;
}

// Función para obtener el color según el índice de calidad del aire
function getAirQualityColor(airQualityIndex) {
    if (airQualityIndex === 1) {
        return '#00ff00'; // Bueno (Good)
    } else if (airQualityIndex === 2) {
        return '#ffff00'; // Aceptable (Fair)
    } else if (airQualityIndex === 3) {
        return '#ff9900'; // Moderado (Moderate)
    } else if (airQualityIndex === 4) {
        return '#ff0000'; // Pobre (Poor)
    } else if (airQualityIndex === 5) {
        return '#990066'; // Muy pobre (Very Poor)
    } else {
        return '#000'; // Valor desconocido
    }
}

// Ejecutamos una búsqueda inicial
fetchWeatherData('Las Palmas');
