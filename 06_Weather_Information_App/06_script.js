let weatherData = {
    delhi:{
        emoji:"☀️",
        temperature:"38°C",
        condition:"Sunny",
        humidity:"35%",
        wind:"12 km/h"
    },
    mumbai:{
        emoji:"🌧️",
        temperature:"30°C",
        condition:"Rainy",
        humidity:"82%",
        wind:"18 km/h"
    },
    jaipur:{
        emoji:"🌤️",
        temperature:"40°C",
        condition:"Hot",
        humidity:"28%",
        wind:"10 km/h"
    },
    chandigarh:{
        emoji:"⛅",
        temperature:"33°C",
        condition:"Partly Cloudy",
        humidity:"55%",
        wind:"14 km/h"
    },
    amritsar:{
        emoji:"☀️",
        temperature:"36°C",
        condition:"Sunny",
        humidity:"40%",
        wind:"11 km/h"
    },
    kolkata:{
        emoji:"⛈️",
        temperature:"31°C",
        condition:"Thunderstorm",
        humidity:"85%",
        wind:"20 km/h"
    },
    chennai:{
        emoji:"🌦️",
        temperature:"32°C",
        condition:"Rain Showers",
        humidity:"76%",
        wind:"16 km/h"
    },
    lucknow:{
        emoji:"☀️",
        temperature:"37°C",
        condition:"Sunny",
        humidity:"42%",
        wind:"13 km/h"
    },
    pune:{
        emoji:"🌥️",
        temperature:"29°C",
        condition:"Cloudy",
        humidity:"60%",
        wind:"15 km/h"
    },
    hyderabad:{
        emoji:"🌤️",
        temperature:"34°C",
        condition:"Partly Sunny",
        humidity:"50%",
        wind:"12 km/h"
    }
};

document.getElementById("searchBtn").addEventListener("click", showWeather);
function showWeather(){
    let cityInput=document.getElementById("city");
    let city=cityInput.value.trim().toLowerCase();
    let output=document.getElementById("output");
    if(city===""){
        alert("Please enter a city name.");
        return;
    }
    if(weatherData[city]){
        let weather=weatherData[city];
        output.innerHTML=`
        <div class="weather-card">
            <h2>${weather.emoji} ${city.charAt(0).toUpperCase()+city.slice(1)}</h2>
            <p><strong>Temperature :</strong> ${weather.temperature}</p>
            <p><strong>Condition :</strong> ${weather.condition}</p>
            <p><strong>Humidity :</strong> ${weather.humidity}</p>
            <p><strong>Wind Speed :</strong> ${weather.wind}</p>
        </div>
        `;
    }
    else{
        output.innerHTML=`
        <div class="weather-card">
            <h2>❌ City Not Found</h2>
            <p>Please enter a valid city.</p>
        </div>
        `;
    }
    cityInput.value="";
    cityInput.focus();
}