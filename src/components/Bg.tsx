import { faAdd, faCircleDown, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function Bg() {
  return (
    <div className='flex flex-row gap-3 relative left-3 md:flex-col'>
      <label className="relative">
        <img src="/colorwheel.png" className="border-0 absolute top-0 left-0 w-9 h-7 pointer-events-none" />
        <input type="color" className="opacity-0 w-7 h-7 cursor-pointer " />
      </label>
      <label className="relative">
          <FontAwesomeIcon
            icon={faAdd}
            className='bg-amber-50 p-1.5 rounded-full text-sm cursor-pointer text-blue-900'
          />
          <input
            type="file"
              className="opacity-0 absolute w-full h-full cursor-pointer top-0 left-0"
          />
      </label>
      <label >
        <FontAwesomeIcon icon={faCircleDown} className='bg-white p-1 text-lg rounded-2xl cursor-pointer text-blue-900'/>
      </label>
      <label >
        <FontAwesomeIcon icon={faShareNodes} className='bg-white p-1.5 text-md rounded-2xl cursor-pointer text-blue-900'/>
      </label>
    </div>
  )
}

export default Bg;