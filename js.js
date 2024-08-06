const apikey = "e5e3bb906a5f375c1602e0164d5d2162";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q= ";

const searchbar = document.querySelector(".searchbtn input")
const searchbtn = document.querySelector(".searchbtn button")
const weatherImg = document.querySelector(".weather-icon")

async function checkweather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);

  
  var data = await response.json();

  
  console.log(data);
  
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";
 
  if(data.weather[0].main == "clouds"){
  weatherImg.src ="photo/clouds.png"

  }
  else if(data.weather[0].main == "Rain"){
    weatherImg.src = "photo/rain.png"
    
  }
  else if(data.weather[0].main == "Wind"){
    weatherImg.src = "photo/wind.png"

  }
  else if(data.weather[0].main == "Clear"){
    weatherImg.src = "photo/clear.png"

  }
  else if(data.weather[0].main == "Mist"){
    weatherImg.src ="photo/mist.png"

  }
  else if(data.weather[0].main == "Drizzle"){
    weatherImg.src = "photo/drizzle.png"

  }
  else if(data.weather[0].main == "Lightning"){
    weatherImg.src = "photo/lighting.png"
  }


}
  searchbtn.addEventListener("click", ()=>{
    checkweather(searchbar.value);
  })
