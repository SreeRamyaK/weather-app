const fetchWeatherData = async (city) => {
    const url = `https://yahoo-weather5.p.rapidapi.com/weather?format=json&u=f&location=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com',
            'x-rapidapi-key': '199b974457msh9144fe7d2af71aep1ac5cbjsn89cfe9ab2443'
        }
    };
    
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const { astronomy, condition, wind, atmosphere } = data.current_observation;
        
        document.getElementById("temp").innerHTML = condition.temperature;
        document.getElementById("min_temp").innerHTML = data.forecasts[0].low;
        document.getElementById("max_temp").innerHTML = data.forecasts[0].high;
        document.getElementById("humid").innerHTML = atmosphere.humidity;
        document.getElementById("sunrise").innerHTML = astronomy.sunrise;
        document.getElementById("sunset").innerHTML = astronomy.sunset;
        document.getElementById("wind").innerHTML = wind.speed;
        document.getElementById("wind_degree").innerHTML = wind.direction;
        document.getElementById("feels_like").innerHTML = condition.temperature;

        let imgElement = document.getElementById('weather_image');
        if (condition.temperature > 13) {
            imgElement.src = '/images/sunny.jpeg'; 
        } else if (condition.temperature <= 10 && wind.speed > 4.5) {
            imgElement.src = '/images/windy.jpeg'; 
        } else if (atmosphere.humidity > 80) {
            imgElement.src = '/images/rainy.jpeg'; 
        }

        console.log('Weather Data:', data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const searchItem = document.getElementById("search").value;
    document.getElementById("city_name").innerHTML = searchItem.toUpperCase();
    if (searchItem) {
        fetchWeatherData(searchItem);
    }
});
