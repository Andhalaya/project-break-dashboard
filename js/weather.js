const apiKey = 'ac3c86948cc243dfa6795416230712';
const city = 'oviedo';
const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`;

async function getWeather() {
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayWeather(data);
    }
    catch(error){
        throw error;
    }
}

function displayWeather (data){
    const currentWeather = document.getElementById('current');
    const forecastWeather = document.getElementById('forecast');
    const locationEl = document.getElementById('location');

    let {humidity, feelslike_c, wind_kph, precip_mm, temp_c} = data.current;
    let condition = data.current.condition;
    let location = data.location

    const currentCard = `
        <div class='condition'>
            <div class='temperature'>${temp_c}°C</div>
            <div>
                <img src='${condition.icon}' alt='${condition.text}'>
                <p>${condition.text}</p>
            </div>
        </div>
        <div class='weather-info'>
            <div class='weather-item1'>
                <div>Humidity:</div>
                <div>Feels like:</div>
                <div>Wind Speed:</div>
                <div>Precipitations:</div>  
            </div>
            <div class='weather-item2'>
                <div>${humidity}%</div>
                <div>${feelslike_c}°C</div>
                <div>${wind_kph} km/h</div>
                <div>${precip_mm} mm</div>
        </div>
    `
    const locationCard = `
    <div class='location'>
    <i class='bx bx-current-location'></i>${location.name}, ${location.country}
    </div>`
    currentWeather.innerHTML = currentCard;
    locationEl.innerHTML = locationCard;

    const forecastHour = data.forecast.forecastday[0].hour;

    forecastHour.forEach(hour =>{
        const time = hour.time.slice(11);
        console.log(hour);
        let forecastCard = `
        <div class='forecast-display'>
            <p>${time}</p>
            <img src='${hour.condition.icon}'>
            <p>${hour.temp_c} °C</p>
        </div>
        `
        forecastWeather.innerHTML += forecastCard;
    })

}

getWeather();