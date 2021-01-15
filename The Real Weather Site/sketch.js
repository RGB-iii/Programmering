var icon;
var weather;
var temp;

var api = 'http://api.openweathermap.org/data/2.5/weather?';
var apiKey = '&APPID=a3e9549bfd2396cc888a0e2b5e780dd4';
var units = '&units=metric';
var city = 'q=Copenhagen';

var input;

function setup() {

    var button = select('#submit');
  button.mousePressed(weatherAsk);

    
}

function weatherAsk() {
    input = select('#city');
    city = 'q=' + input.value();

    var link = api + city + units + apiKey


    loadJSON(link , gotData)
  }


function gotData(data) {
    cityName = data.name;
    icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
    weather = data.weather[0].description;
    temp = Math.floor(data.main.temp);
    

    createP(cityName);
    createImg(icon);
    createP(weather);
    createP(temp);
}
