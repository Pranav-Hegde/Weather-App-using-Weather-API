import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import "./search.css";
export default function Search({ updateInfo }){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "6dd4a18cbc013ce6364bce6b6a11e670";

    let getWeatherInfo = async () => {
      try {
         let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
         
         let jsonresponse = await response.json();
        
         let result = {
            city:city,
            temp : jsonresponse.main.temp,
            tempMin: jsonresponse.main.temp_min,
            tempMax:jsonresponse.main.temp_max,
            humidity:jsonresponse.main.humidity,
            feelsLike:jsonresponse.main.feels_Like,
            weather : jsonresponse.weather[0].description,
        };
        console.log(result);
        return result;
    } catch(errr){
           throw error;
    };
}

    let HandleChange = (evt) =>{
        setCity(evt.target.value);
    }
    let Submit = async (evt) => {
    try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
      }catch(err){
          setError(true);
     }
    };
   return( 
    <>
    <div className="search">
    <form onSubmit={Submit}>
    <TextField id="outlined-basic" label="Search City" variant="outlined" onChange={HandleChange}></TextField>
    <br></br>
    <br></br>
    <Button variant="contained" type="submit">Search</Button>
    {error && <p style={{color:"red"}}>No Such a Place found!</p>}
   </form>
   </div>
   </>

   );
}

