api="2566505f14a3812323cacd6d821b8aec"
var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var humidity=document.querySelector('#humidity')
var wind = document.querySelector('#wind')
var visibility=document.querySelector('#visibility')
var weatherIcon = document.querySelector(".weather-icon")
var date = new Date();
	var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
	var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
	var date_time = current_date+" "+current_time;	
  
//apik = "3045dd712ffe6e702e3245525ac7fa38"
function convertion(val)
{
    return (val - 273).toFixed(2)
}

btn.addEventListener('click', function()
{
  fetch('https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore'+inputval.value+'&appid='+api)
  .then(res => res.json())

  .then(data => 
  {   
    var nameval = data['name']
    var descrip = data['weather']['0']['description']
    var temperature = data['main']['temp']
    var humidity=data['main']['humidity']
    var wndspd = data['wind']['speed']
    var visibility=data['main']['visibility']
    city.innerHTML=`Weather of <span>${nameval}<span>`
    document.getElementById("date1").innerHTML =`Date & Time: ${(date_time)}`
    temp.innerHTML = `Temperature: <span>${ convertion(temperature)} C</span>`
    description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
    humidity.innerHTML=`Humidity: <span>${ (humidity)} % <span>`
    wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`
    visibility.innerHTML=`visibility: <span>${visibility}<span>`

   
    /*(console.log(description)
    switch (description) {
        case "clear sky":
          document.body.style.background = "url(/img/weather-clear-sky.jpg)";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundRepeat = "no-repeat";
          break;
        case "cloudy":
          document.body.style.background = "url(/img/weather-cloudy.jpg)";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundRepeat = "no-repeat";
          break;
        case "scattered clouds":
            document.body.style.background = "url(/img/scattered clouds.jpg)";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundRepeat = "no-repeat";    
        case "broken clouds":
          document.body.style.background = "url(/img/weather-broken-cloud.jpg)";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundRepeat = "no-repeat";
      
          break;
    
        case "rain":
          document.body.style.background = "url(/img/weather-rain.jpg)";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundRepeat = "no-repeat";
      
          break;
        case "shower rain" :
          document.display.style.background = "url(/img/weather-rain.jpg)";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundRepeat = "no-repeat";
          break;
        case "thunderstrome":
          document.body.style.background = "url(img/weather-thunderstrome.jpg)";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundRepeat = "no-repeat";
          break;
        case "snow":
          document.body.style.background = "url(img/weather-snow.jpg)";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundRepeat = "no-repeat";
          break;
        case "mist":
          document.body.style.background = "url(img/weather-mist.jpg)";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundRepeat = "no-repeat";
          break;
        case "haze":
          document.body.style.background = "url(img/weather-mist.jpg)";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundRepeat = "no-repeat";
          break;    
        default : 
        document.body.style.background = "url(img/weather-earth.jpg)";

    } */     
   })
  .catch(err => alert('You entered Wrong city name'))
})

