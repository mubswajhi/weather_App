# weather_App
🌦️ Weather App

A responsive and interactive weather forecast app built using HTML, Tailwind CSS, and Vanilla JavaScript. This app allows users to search for weather by city name, fetches real time weather data from the Open-Meteo API, and displays:

🌡️Current temperature
💨Wind speed
🌤️Weather description

🚀 How to Navigate & Run the Code

Clone this repository:
git clone https://github.com/mubswajhi/weather_App.git

Navigate to the project folder:
cd weather_App

Start the app
Open weather App.html in your browser to start the app.

🔗 Live Demo
👉 [my link](https://mubswajhi.github.io/weather_App/)

💡 Features

🔍 City-based weather search
📍 Geolocation-based weather fetch (optional enhancement)
🌡️ Displays current temperature
💨 Shows wind speed
🌤️ Describes current weather condition (e.g., Clear, Rain, Snow)
🎨 Simple and responsive UI
⚡ Fast and lightweight with no dependencies

📸 Sample Output

📍 Melbourne
🌡️ Temperature: 24°C | 💨 Wind Speed: 15 km/h | 🌤️ Weather: Clear

🛠️ Tech Stack

HTML5
Tailwind CSS
JavaScript (Vanilla)
Open-Meteo API
Geolocation API

📁 Folder Structure

/weather-app
│
├── Weather App.html       → Main HTML file
├── weather app.css        → Custom styles and layout
├── weather app.js        → Fetch logic and DOM manipulation
└── README.md         → Project documentation

🧠 How It Works

User enters a city name.
App uses Open Meteo's Geocoding API to get latitude and longitude.
App fetches weather details for that location using Open Meteo's Weather API.

Displays:
Temperature (°C)
Wind Speed (km/h)
Weather description (based on weathercode)

🧩 Weather Codes Supported

The app supports mapping of weather codes such as:

0: Clear
61: Light rain
71: Light snow fall
95: Thunderstorm
…and many more.
(Refer to weatherDescriptions object in weather app.js for full list)

🚧 Future Enhancements

Add 7-day or hourly forecasts
Include weather icons or animations
Add ambient sound effects (e.g., rain or wind)
Detect user location automatically
Add dark/light mode toggle

👤 Author

Wajhiha
