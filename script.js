const cityName = document.querySelector("#city-name");
const temp = document.querySelector("#temp");
const feelsLike = document.querySelector("#feels-like");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#wind-kph");
const country = document.querySelector("#country");
const region = document.querySelector("#region");
const city = document.querySelector("#city");
const updated = document.querySelector("#updated");
const errorMessage = document.querySelector("#error-message");
const loadingMessage = document.querySelector("#loading-message");
let answer;

getWeather = async (event) => {
    try {
        event.preventDefault();
        
    let cityInput = cityName.value.trim();
    if (cityInput === "") {
        errorMessage.innerHTML = "Please enter a city name.";
        errorMessage.style.color = "red";
        temp.innerHTML = "";
        feelsLike.innerHTML = "";
        humidity.innerHTML = "";
        windSpeed.innerHTML = "";
        country.innerHTML = "";
        region.innerHTML = "";
        city.innerHTML = "";
        updated.innerHTML = "";
        loadingMessage.innerHTML = "Loading...";
        return;
    }else {
        answer = await axios(
        `https://api.weatherapi.com/v1/current.json?key=60e0a3d2f152486e950213038260606&q=${cityInput}`
        );
        console.log("Answer " , answer.data.current.temp_c);
        temp.innerHTML = answer.data.current.temp_c + "°C";
        feelsLike.innerHTML = answer.data.current.feelslike_c + "°C";
        humidity.innerHTML = answer.data.current.humidity + "%";
        windSpeed.innerHTML = answer.data.current.wind_kph + " km/h";
        country.innerHTML = answer.data.location.country;
        region.innerHTML = answer.data.location.region;
        city.innerHTML = answer.data.location.name;
        updated.innerHTML = answer.data.current.last_updated;
        errorMessage.innerHTML = "";
        loadingMessage.innerHTML = "";
    }
} catch (error) {
    console.error("Error fetching weather data:", error);
    loadingMessage.innerHTML = "Loading...";
    errorMessage.innerHTML = error.response.data.error.message;
    temp.innerHTML = "";
    feelsLike.innerHTML = "";
    humidity.innerHTML = "";
    windSpeed.innerHTML = "";
    country.innerHTML = "";
    region.innerHTML = "";
    city.innerHTML = "";
    updated.innerHTML = "";
}
};
