import DisplayInfo from "./components/DisplayInfo.jsx";
import highTide from './images/high-tide.png';

function App() {
  let info = {
    height: "1.18",
    time: "2019-03-15 18:40:44+00:00",
    type: "high"
  };
  const activity = 'fishing';
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
