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

    const temperature = weatherData.current_weather.temperature;
    resultDiv.textContent = `🌡️ Current temperature in ${city}: ${temperature}°C`;
  } catch (error) {
    console.error(error);
    resultDiv.textContent = "⚠️ Something went wrong. Please try again later.";
  }
}
