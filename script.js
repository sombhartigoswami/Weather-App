let inputBox = document.querySelector("input");
let searchBtn = document.querySelector(".search-btn");
let cityName = document.querySelector(".city-name");
let Temp = document.querySelector(".temp");
let weatherImg = document.querySelector("#weatherImg");
let Windspeed = document.querySelector(".wind-speed");
let humidity = document.querySelector("#humidity-percentage");
let moreInformation = document.querySelector(".moreInformation");
let errormsg = document.querySelector(".error");
//console.table([inputBox,searchBtn,cityName,Temp,weatherImg]);
  
let Apikey = "ded8b5d4d5ef919999b7cd14e077c1fb";
 
//async function -->
let Data = async function(searchCity) {
    let obtainData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${Apikey}&units=metric`);
    console.log(obtainData);

    //json data -->
    let jsondata =  await obtainData.json();
    console.log(jsondata);

    //display error message -->
    if(jsondata.cod == 404){   

        Temp.style.visibility = "hidden";
        cityName.style.visibility = "hidden";
        moreInformation.style.visibility = "hidden";
        weatherImg.src = "image/error1.webp";
        errormsg.innerHTML = "please enter right loction"
    }

    if(jsondata.cod == 400){

        Temp.style.visibility = "hidden";
        cityName.style.visibility = "hidden";
        moreInformation.style.visibility = "hidden";
        weatherImg.src = "image/error2.png";
        errormsg.innerHTML = "please enter a loction";
    }

    //display  weather data on screen -->
    cityName.innerHTML = jsondata.name;
    Temp.innerHTML = Math.floor(jsondata.main.temp)+"°C";
    Windspeed.innerHTML = jsondata.wind.speed+"km/h";
    humidity.innerHTML = jsondata.main.humidity+"%";

    //display image according to weather condiotion -->
    if(jsondata.weather[0].main == "Clouds"){
        weatherImg.src = "image/clouds.png";
    } 
    else if(jsondata.weather[0].main == "Clear"){
        weatherImg.src = "image/clear.png";
    }
    else if(jsondata.weather[0].main == "Drizzle"){
        weatherImg.src = "image/drizzle.png";
    }
    else if(jsondata.weather[0].main == "Mist"){
        weatherImg.src = "image/mist.png";
    }
    else if(jsondata.weather[0].main == "Snow"){
        weatherImg.src = "image/snow.png";
    }
    else if(jsondata.weather[0].main == "Rain"){
        weatherImg.src = "image/rain.png";
    }
    else if(jsondata.weather[0].main == "Haze"){
        weatherImg.src = "image/haze.png";
    }
    else if(jsondata.weather[0].main == "Smoke"){
         weatherImg.src ="image/smoke.png";
     }
    else{
        //if the image does not match with weather conditions -->
       let imgstyle = weatherImg.src = "image/random.jpg";
       imgstyle.style.objectfit = "contain";
    }
    
}

//addeventlistener -->
searchBtn.addEventListener("click",function(e){

    let searchCity = inputBox.value;
    Data(searchCity);
    inputBox.value = "";
    weatherImg.style.visibility = "visible";
    Temp.style.visibility = "visible";
    cityName.style.visibility = "visible";
    moreInformation.style.visibility = "visible";
    errormsg.innerHTML = "";
    document.querySelector(".link").style.display = "none";

})

