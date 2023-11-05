import React from 'react'
import { format } from 'date-fns';

const DisplayInfo = ({data, tide, activity}) => {
  let date = data.time.split(' ')[0].split('-');
  let time = data.time.split(' ')[1];
  time = time.split('+')[0];
  time = time.split(':');
  let midday = 'AM';
  if (Number(time[0] > 12)) {
    time[0] = (time[0] - 12).toString();
    midday = 'PM';
  }
  return (
    <div className='flex w-2/5 p-2 text-offwhite bg-navy rounded-lg'>
      <div className='flex flex-2 flex-col mr-8 w-3/5'>
        <div className='text-center text-xl'>{format(new Date(date), 'MM/dd/yyyy')} &nbsp; {time[0]}:{time[1]} {midday}</div>
        <div className='text-5xl font-bold my-6 text-center'>{data.type.charAt(0).toUpperCase() + data.type.slice(1)}</div>
        <div className='text-lg mb-3 text-center'>Suggested Activity: {activity}</div>
      </div>
      <div className='items-center justify-center flex'>
        <img className='flex-1 w-28 h-28 rounded-full bg-offwhite' src={tide} alt="Tide image" />
      </div>
    </div>
  )
}

export default DisplayInfo