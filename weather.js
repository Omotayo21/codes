import { useState } from "react";
import "./app.scss";
const api = { 
    key : "41efe9a3f10405b0649d355f8f640661",
    base : 'https://api.openweathermap.org/data/2.5'
}

function Weather() {
    const search = evt =>{
        if(evt.key === "Enter"){
           fetch(`${api.base}weather?q=${query}&appid=${api.key}&units=metric`)
           .then(res => res.json())
           .then(result =>{
           setWeather(result);
           setQuery("");
         //  console.log(result)
           })
        }
    }
   
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState("");

     const datebuild = (e) =>{
        let days = ["Sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
        let months = ["jan","feb","mar","apr","may","jun","july","aug","sept","nov","oct","dec",]
     
     let day = days[e.getDay()] ;
     let date = e.getDate();
     let month = months[e.getMonth()]; 
     let year = e.getFullYear();

      return `${day} ${date} ${month} ${year}`
     };
 
return (
        <div className="main">
         <div className="search">
            <input type="text" className="search-box" placeholder = "Search city here" value={query} onChange={e => setQuery(e.target.value)} onKeyPress = {search}/>
         </div>
         {(typeof weather.main != "undefined") ? (
         <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{datebuild(new Date())}</div>
            <div className="weather-box">
                <div className="temp">
                    {Math.round(weather.main.temp)}degree celcius
                </div> 
                <div className="weather">{weather.weather[0].main}</div>
            </div>
         </div>
) : (' ')}

        </div>
    )
}






























export default Weather;