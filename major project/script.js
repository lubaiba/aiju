const apiKey="2566505f14a3812323cacd6d821b8aec";
//const apiUrl="https://api.openweathermap.org/data/2.5/forecast?q=";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")

var date = new Date();
var current_date=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
var date_time = current_date+" "+current_time;

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}&days=6`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML=data.name; 
   document.querySelector(".descrip").innerHTML=data.weather[0].main;
  // document.querySelector(".descrip").innerHTML=data.list[0].weather[0].icon;
   //document.querySelector(".temp").innerHTML=Math.floor(data.main.temp) + "°C";
   document.querySelector(".temp").innerHTML=Math.floor(data.main.temp) + "°C";
   document.querySelector(".feels-like").innerHTML="Feels like "+ data.main.feels_like+"°C" ;
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";
    document.querySelector(".date").innerHTML =`Date & Time: ${(date_time)}`

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
        document.body.style.background="url(img/weather-cloudy.jpg)";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
        document.body.style.background = "url(img/weather-clear-sky.jpg)";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
        document.body.style.background = "url(img/weather-rain.jpg)";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundRepeat = "no-repeat";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
        document.body.style.background = "url(img/drizzle.jpg)";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundRepeat = "no-repeat";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
        document.body.style.background = "url(img/weather-mist.jpg)";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundRepeat = "no-repeat";
    }
    else if(data.weather[0].main=="Haze"){
        weatherIcon.src=" https://openweathermap.org/img/wn/50d@2x.png";
        document.body.style.background = "url(img/haze.jpg)";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundRepeat = "no-repeat";
    }
    document.querySelector(".weather").style.display="block";

    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ city+'&appid=2566505f14a3812323cacd6d821b8aec')
.then(response => response.json())
.then(data => {
 
    //Getting the min and max values for each day
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°";
        //Number(1.3450001).toFixed(2); // 1.35
    }

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
    }
    //------------------------------------------------------------

    //Getting Weather Icons
     for(i = 0; i<5; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
    }
    //------------------------------------------------------------
    console.log(data)
})

//Getting and displaying the text for the upcoming five days of the week
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array
function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }

   
}



searchBtn.addEventListener("click",()=>{
     checkWeather(searchBox.value);
})



