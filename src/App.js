
import './App.css';
import Axios from 'axios';
import { useState } from 'react';
const key='4f407b4303ceed4499a7263147e07e3c';

const  App= () => {
  const [city,setCity]=useState("");
  const [data,setData]=useState();
  const fetchData = async()=>{
    try{
      const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
      setData(response.data);
    }
    catch{
      alert("Enter the City Name Correctly")
    }
  }
  return (
    <div className='App'>
      <h1 className='title'>Weather App</h1>
      <div className='input-container'>
        <input
        type='text'
        className='input'
        value={city}
        onChange={(e) =>setCity(e.target.value)}
        placeholder=' Enter the City Name '
        
        ></input>
        <button className='button' onClick={fetchData}>Fetch</button>

      </div>
      <div>
        {data &&(
          <div className='container'>
            <h1 className='city-name'>{data.name},{data.sys.country}</h1>
            <div className='weather-info'>
             <div className='temp'>{Math.round(data.main.temp)}C</div>
             <div className='coordinates'>
              <div>Lattitude-{data.coord.lat}</div> 
              <div>Longitude-{data.coord.lon}</div> 

             </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;



//React-Router-Dom-Properties
 //1.BrowserRouter
  //2.Routes
  //3.Route
  //4.Link
  //5.Outlet
