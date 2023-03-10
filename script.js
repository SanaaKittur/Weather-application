function getlocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(async position=>{
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            console.log("lat"+lat  + " long"+long);
            
            const data = await getWeatherData(lat,long);
            renderWeatherData(data);
            var map = L.map('map').setView([20.9716, 80.5946], 5);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            let marker = L.marker([lat,long]).addTo(map);
            marker.bindPopup(data.name).openPopup();

            map.on('click',async function(e){
                console.log("lat: "+ e.latlng.lat + " long: " + e.latlng.lng);
                const data = await getWeatherData(e.latlng.lat ,e.latlng.lng );
                renderWeatherData(data);
            })
        })
    }
}
async function getWeatherData(lat,long){
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=ddfaba4398b491fa4ef3e29a5e934c6e`;
    let response = await fetch(api);
    let data = await response.json(); 
    console.log(data);
    return data;
}
function renderWeatherData(data){
    document.getElementById("name").innerHTML = "City: " + data.name;
    document.getElementById("humidity").innerHTML = "Humidity: " + data.main.humidity;
    document.getElementById("temp_max").innerHTML = "Maximum temparature: " + data.main.temp_max;
    document.getElementById("temp_min").innerHTML = "Minimum temparature: " + data.main.temp_min;
    document.getElementById("pressure").innerHTML = "Pressure: " +  data.main.pressure;
    document.getElementById("temp").innerHTML = "Temparature: " + data.main.temp;
}
getlocation();
