import React from 'react'

export default function Calculator() {
  return (
    <div className='bg-gray-800 text-white w-screen h-screen flex justify-center items-center'>
      <div className='main w-64 h-auto bg-green-800 rounded-2xl shadow-2xl border-4 border-black'>
        <div className="screen p-2">
            <input type="text" className='text-green-600 w-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] placeholder-green-600 px-1 rounded-lg bg-gray-800 text-2xl pt-10 outline-none text-right' placeholder="0" />
        </div>
      </div>
    </div>
  )
}
