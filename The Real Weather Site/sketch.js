//Jeg gør de fire elementer jeg gerne vil vise på min side til variabler.
var icon;
var weather;
var temp;

//Her henter jeg mit api, jeg splitter linket op i flere dele/variabler, 
//så jeg nemt kan tilgå forskellige elementer af linket.
var api = 'http://api.openweathermap.org/data/2.5/weather?';
var apiKey = '&APPID=a3e9549bfd2396cc888a0e2b5e780dd4';
var units = '&units=metric';
var city = 'q=Copenhagen';

var input;

//Jeg laver en funktion, der connecter søgefeltet til søgeknappen. 
//Det gør jeg ved at tilføje en weatherAsk funktion.
//Koden nedenunder "connecter" også dette søgefelt til en variabel jeg har kaldt for "city".
//Denne variabel finder data/navnet på den bestemte by, man søger på fra det valgte API.
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

//Nu "caller" jeg den data jeg har brug for fra mit API og skriver hvor programmet kan finde dem. 
//f.eks. data.name er dér i API'et hvor man kan finde navnet på den valgte by.
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
