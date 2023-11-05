import DisplayInfo from "./components/DisplayInfo.jsx";
import highTide from './images/high-tide.png';
import {useState} from 'react';

function App() {
  let info = {
    height: "1.18",
    time: "2019-03-15 18:40:44+00:00",
    type: "high"
  };
  const activity = 'fishing';
  const [lat, setLat] = useState(0);
  const [lng, setLon] = useState(0);
  const [tideInfo, setTideInfo] = useState({});
  const [moonPhase, setMoonPhase] = useState({});

  const fetchTideInfo = () => {
    return fetch(`https://api.stormglass.io/v2/tide/extremes/point?lat=${lat}&lng=${lng}&${Date()}&end=${Date()}`, {
      headers: {
        'Authorization': `${import.meta.env.VITE_STORMGLASS_TOKEN}`
      }
    }).then((response) => response.json())
    .then((jsonData) => {
      setTideInfo(jsonData.data);
    })
  }
  
  const fetchMoonPhase = () => {
    return fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Herndon,VA?unitGroup=us&key=${import.meta.env.VITE_VISUAL_CROSSING_TOKEN}&include=days&elements=moonphase`, {
      headers: {
        'Authorization': `${import.meta.env.VITE_VISUAL_CROSSING_TOKEN}`
      }
    }).then((response) => response.json())
    .then((jsonData) => {
      setMoonPhase(jsonData.currentConditions.moonphase);
    })
  }

  return (
    <div className='bg-offwhite flex min-h-screen w-full'>
      <div className="flex justify-center bg-navy fixed left-0 right-0 h-10 py-2">
        <h1 className="text-offwhite text-lg font-bold">TidePal</h1>
      </div>
      <div className="flex flex-col min-h-screen w-full">
        <div className="flex mt-16 justify-evenly">
          <h1 className="text-navy text-lg font-bold ">Longitude</h1>
          <h1 className="text-navy text-lg font-bold">Latitude</h1>
        </div>
        <div className="flex justify-evenly mt-10">
          <input className="border-navy border-2 remove-arrow" type="number"></input>
          <input className="border-navy border-2 remove-arrow" type="number"></input>
        </div>
        <div className="flex justify-center mt-10">
          <button className="text-offwhite bg-navy p-3 font-bold">Calculate</button>
        </div>
        <div className="flex justify-center mt-10">
          <h1 className="text-navy font-bold text-lg">-OR-</h1>
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-navy text-offwhite p-3">Get current location</button>
        </div>
      </div>
    </div>
  )
}

export default App
