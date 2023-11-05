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
    <div className='bg-offwhite flex flex-col min-h-screen w-full'>
      <h1 className="text-offwhite text-5xl font-bold text-center bg-navy fixed left-0 right-0 h-16 py-2">TidePal</h1>
      
      <div className="flex mt-16 w-full">
        <div className="flex w-full space-x-14 justify-center">

          <div className="flex flex-col items-center w-52 mt-4">
            <h1 className="text-navy text-lg font-bold ">Longitude</h1>
            <input className="border-navy border-2" type="number" />
          </div>
          <div className="flex flex-col w-52 items-center mt-4">
            <h1 className="text-navy text-lg font-bold">Latitude</h1>
            <input className="border-navy border-2" type="number" />
          </div>
    
        </div>
      </div>
      <button className="text-offwhite w-28 mt-5 self-center bg-navy p-3 font-bold">Calculate</button>
      <h1 className="text-navy mt-2 self-center font-bold text-lg">-OR-</h1>
      <button className="bg-navy text-offwhite p-3 w-42 mt-2 mb-12 self-center font-bold">Get current location</button>

        <div>
          <DisplayInfo 
            data={info}
            tide={highTide}
            activity={activity}
          />
        </div>

    </div>
  )
}

export default App
