$(document).ready(function(){

    if ("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(showcityname);
        function showcityname (position){
            console.log(position);
            var lat = position.coords.latitude;
            var longit = position.coords.longitude;
            var city_name;
            var temp;
            var humidite;
            var pressure;
            var wind_speed;
            var country_name;
            var weather_description;
            var apiKey = "9ef5bc4ed4eeb6002b10cedee4b40782";
            var latitude_text = document.getElementById("latitude-val");
            var altitude_text = document.getElementById("altit");
            altitude_text.innerHTML = "Longitude: " + longit;
            latitude_text.innerHTML = "Latitude: " + lat;
      
            $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + longit + "&appid=" + apiKey, function(data) {
                console.log(data);
                console.log("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + longit + "&appid=" + apiKey);
                city_name = data.name;
                country_name = data.sys.country;
                weather_description = data.weather[0].description.toUpperCase();
                temp = data.main.temp;
                pressure = data.main.pressure;
                wind_speed = data.wind.speed;
                humidite =  data.main.humidity;
                $("#cityname").html(city_name + " (" + country_name + ") " + "has " + weather_description);
                temp -= 273.15 ;
                temp = parseFloat(temp).toFixed(2);
                $(".nuages").html(`Nuages: ${data.clouds.all}% <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">`);
                $(".temp").html("Température: "+temp+" °C");
                $(".hum").html("Humidité :"+ humidite+ " %");
                $(".pressure").html("Préssion: "+pressure + " mBar");
                $(".wind-spd").html("Vitesse du vents: "+wind_speed + " m/s "+data.wind.deg+"°");
            })
        }
    }
})
