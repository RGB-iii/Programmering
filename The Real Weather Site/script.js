$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=a3e9549bfd2396cc888a0e2b5e780dd4", 
    function(data){
    console.log(data)

    var icon = 
        "http://openweathermap.org/img/w/" + data.weather.icon + ".png";

    $('.icon').attr('src', icon);
    
});