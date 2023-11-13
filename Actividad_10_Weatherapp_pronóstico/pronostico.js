const apiKey = 'a7a6acf4bb38c97fe6bfa1a3c782bd77';
const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const cityElement = document.querySelector('.city');
const tempElement = document.querySelector('.temp');
const humidityElement = document.querySelector('.humidity');
const windElement = document.querySelector('.wind');
const weatherIcon = document.querySelector('.weather-icon');
const forecastElement = document.querySelector('.forecast');

searchBtn.addEventListener('click', () => {
  if (!searchBox.value) {
    return alert('Introduce una ciudad');
  }
  fetchWeatherData(searchBox.value);
});

function fetchWeatherData(city) {
  fetch(`${apiUrl}?q=${city}&units=metric&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // Datos del clima actual
      const currentWeather = data.list[0].main;
      cityElement.innerHTML = city;
      tempElement.innerHTML = Math.round(currentWeather.temp) + '°C';
      humidityElement.innerHTML = currentWeather.humidity + '%';
      windElement.innerHTML = data.list[0].wind.speed + ' km/h';
      setWeatherIcon(weatherIcon, data.list[0].weather[0].main);

      // Pronóstico para los próximos cuatro días
      const fourDayForecast = data.list.filter((item, index) => index % 8 === 0 && index !== 0);

      renderForecast(fourDayForecast);
    })
    .catch((error) => {
      console.error('Error al obtener datos de clima:', error);
    });
}

function setWeatherIcon(element, weather) {
  const weatherIcons = {
    Clear: 'sol.png',
    Clouds: 'nubes.png',
    Rain: 'lluvia.png',
    Drizzle: 'llovizna.png',
  };
  element.src = `images/${weatherIcons[weather]}`;
}

function renderForecast(forecastData) {
  forecastElement.innerHTML = '';
  forecastData.forEach((item, index) => {
    const dayName = getDayName(index);
    const dayTemp = Math.round(item.main.temp) + '°C';
    const dayIcon = item.weather[0].main;
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

function getDayName(dayIndex) {
  const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + dayIndex);
  return days[currentDate.getDay()];
}

function getWeatherIcon(weather) {
  const weatherIcons = {
    Clear: 'sol.png',
    Clouds: 'nubes.png',
    Rain: 'lluvia.png',
    Drizzle: 'llovizna.png',
  };
  return weatherIcons[weather] || 'sol.png';
}

// Realizar una solicitud inicial para la ubicación predeterminada (puedes cambiar esto si lo deseas)
fetchWeatherData('Las Palmas');
