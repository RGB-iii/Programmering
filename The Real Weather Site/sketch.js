importScripts("index.html");

var icon;
var weather;
var temp;

function setup() {

    loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Copenhagen&units=metric&APPID=a3e9549bfd2396cc888a0e2b5e780dd4' , 
    gotData
    )
}


function gotData(data) {
    icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
    weather = data.weather[0].description;
    temp = Math.floor(data.main.temp);
    city = data.name;

    createImg(icon);
    createP(weather);
    createP(temp);
    createP(city);
}
