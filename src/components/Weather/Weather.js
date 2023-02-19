import axios from "axios";
import { useEffect, useState } from "react";
import { WeatherContainer,Temp,City } from "./WeatherStyle";
import { api } from "./weatherapi";

const url=`https://api.openweathermap.org/data/2.5/weather?q=Austin&units=metric&appid=${api}`
const url2= 'https://api.openweathermap.org/data/2.5/weather';
function Weather() {
    const [data,setData]=useState();
    const [city,setCity]=useState();

    useEffect(()=>{
        // axios.get(url)
        // .then(res=>setData(res.data))
        // .catch(error=>console.log(error))
        navigator.geolocation.getCurrentPosition(position=>{
            axios.get(url2,{
                params:{
                    lat:position.coords.latitude,
                    lon:position.coords.longitude,
                    units:'metric',
                    appid:api
                }
            })
            .then(res=>{
                setCity(res.data.name+', '+res.data.sys.country);
                setData(res.data);
            })
        })
    },[])
    

    return ( 
    <WeatherContainer>
        <Temp>{data?Math.round(data.main.temp)+"°c":"Please enable location access and refresh"}</Temp>
        <City>{city?city:"Please enable location access and refresh"}</City>
    </WeatherContainer> );
}

export default Weather;