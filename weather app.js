async function getTemperature() {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("result");

  resultDiv.textContent = "";

  if (!city) {
    resultDiv.textContent = "⚠️ Please enter a city name.";
    return;
  }

  try {
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`);
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      resultDiv.textContent = "❌ City not found.";
      return;
    }

    const { latitude, longitude } = geoData.results[0];

    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const weatherData = await weatherRes.json();

     const { temperature, windspeed, weathercode } = weatherData.current_weather;
     const weatherDescriptions = {
      0: "Clear",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Fog",
      48: "Depositing rime fog",
      51: "Light drizzle",
      53: "Moderate drizzle",
      55: "Dense drizzle",
      61: "Light rain",
      63: "Moderate rain",
      65: "Heavy rain",
      71: "Light snow fall",
      73: "Moderate snow fall",
      75: "Heavy snow fall",
      80: "Rain showers",
      81: "Moderate rain showers",
      82: "Violent rain showers",
      95: "Thunderstorm",
      96: "Thunderstorm with hail",
      99: "Heavy thunderstorm with hail"
    };

  const weatherDescription = weatherDescriptions[weathercode] || "Unknown";

  resultDiv.textContent = `📍 ${city}\n🌡️ Temperature: ${temperature}°C | 💨 Wind Speed: ${windspeed} km/h | 🌤️ Weather: ${weatherDescription}`;
  } catch (error) {
    console.error(error);
    resultDiv.textContent = "⚠️ Something went wrong. Please try again later.";
  }
}
