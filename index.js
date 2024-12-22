
// let apikey="4qQ8EVONuHcuew0Xr0F5AQ==2bRUCF5w6sFjAfcs";

// let url="https://api.api-ninjas.com/v1/weather?city=";

const search=document.getElementById("query");
const APILINK='https://api.api-ninjas.com/v1/weather?x-api-key=4qQ8EVONuHcuew0Xr0F5AQ==2bRUCF5w6sFjAfcs&city=';


try{
// returnWeather(APILINK);




function returnWeather(url){
    fetch(url).then(res=> res.json()).then(function(data){
        const temp=data.temp;
        const wind_speed=data.wind_speed;
        const humdity=data.humidity;
        const min_temp=data.min_temp;
        const max_temp=data.max_temp;
        const sunrise=data.sunrise;
        const sunset=data.sunset;
        const wind_degree= data.wind_degrees;
        const feels_like=data.feels_like;
        if(temp>13){
            var imgElement = document.getElementById('weather_image');
            imgElement.src = '/images/sunny.jpeg'; 
        }
        else if(temp<=10 && wind_speed>4.5){
            var imgElement = document.getElementById('weather_image');
            imgElement.src = '/images/windy.jpeg'; 
        }
        else if(humdity>80){
            var imgElement = document.getElementById('weather_image');
            imgElement.src = '/images/rainy.jpeg'; 
        }
        document.getElementById("temp").innerHTML = temp;
        document.getElementById("min_temp").innerHTML = min_temp;
        document.getElementById("max_temp").innerHTML = max_temp;
        document.getElementById("humid").innerHTML = humdity;
        document.getElementById("sunrise").innerHTML = sunrise;
        document.getElementById("sunset").innerHTML = sunset;
        document.getElementById("wind").innerHTML = wind_speed;
        document.getElementById("wind_degree").innerHTML = wind_degree;
        document.getElementById("feels_like").innerHTML = feels_like;
        
        
    })
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const searchItem=search.value;
    document.getElementById("city_name").innerHTML = searchItem.toUpperCase();
    const SEARCHAPI = 'https://api.api-ninjas.com/v1/weather?x-api-key=4qQ8EVONuHcuew0Xr0F5AQ==2bRUCF5w6sFjAfcs&city=';
    if(searchItem){
        returnWeather(SEARCHAPI+searchItem);
    }

})
}
 catch(err){
    console.log(err.message);
}