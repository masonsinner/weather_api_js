function getWeather() {
    const apiKey = '8e731f67f67322818dd51ca17478df94';
    const cityInput = document.getElementById('cityInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=imperial`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherData = document.getElementById('weatherData');
        weatherData.innerHTML = `
          <h2>${data.name}</h2>
          <p>Temperature: ${data.main.temp}°F</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>High Temp: ${data.main.temp_max}°F</p>
          <p>Low Temp: ${data.main.temp_min}°F</p>
          <p>Weather Condition: ${data.weather[0].main}</p>
          <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">
        `;
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  