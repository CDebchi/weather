$(document).ready(function(){

    if ("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(showcityname);
        function showcityname (position){
            var lat = position.coords.latitude;
            var longit = position.coords.longitude;
            var altitude = position.coords.altitude;
            var city_name;
            var temp;
            var pressure;
            var wind_speed;
            var country_name;
            var weather_description;
            var apiKey = "9ef5bc4ed4eeb6002b10cedee4b40782";
            var latitude_text = document.getElementById("latitude-val");
            var altitude_text = document.getElementById("altit");
            altitude_text.innerHTML = "Altitude is " + altitude;
            latitude_text.innerHTML = "Latitude is " + lat;
      
            $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + longit + "&appid=" + apiKey, function(data) {
                console.log(data);
                city_name = data["name"];
                country_name = data.sys.country;
                weather_description = data.weather[0].description.toUpperCase();
                temp = data["main"]["temp"];
                pressure = data["main"]["pressure"];
                wind_speed = data["wind"]["speed"];

                $("#cityname").html(city_name + " &#40;" + country_name + "&#41; " + "has " + weather_description);
                $(".temp").html(temp);
                $(".pressure").html(pressure + " mBar");
                $(".wind-spd").html(wind_speed + " m/s");
            })
        }
    }
})
