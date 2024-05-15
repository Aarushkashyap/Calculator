import React, { useState } from 'react'
import { BsFillCalculatorFill } from "react-icons/bs";

export default function Calculator() {
  
  const [result, setresult] = useState('')

  const clickHandle = (e) => {
    setresult(result.concat(e.target.value))
  }

  const clearScreen = () => {
    setresult("");
  }

  const calculate = () => {
    setresult(eval(result).toString());
  }

    return (
    <div className='bg-gray-800 text-white w-screen h-screen flex justify-center items-center'>
      <div className='main w-64 h-auto bg-green-800 rounded-2xl shadow-2xl border-4 border-black'>
        <div className="screen p-2">
            <input type="text" value={result} className='text-green-600 w-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]
             placeholder-green-600 px-1 rounded-lg bg-gray-800 text-2xl pt-10 outline-none text-right' 
             placeholder="0" />
        </div>
        
        <div className='logo bg-green-800 bg-opacity-90 mb-2'>
            <h1 className='text-black text-sm font-bold justify-center text-center flex gap-1 items-center'> Calculator <BsFillCalculatorFill /></h1>
        </div>

        <div className="keyword">
            
               <div className="flex justify-between m-2">
                <input type="button"  onClick={clearScreen} value="C" className='bg-black shadow-md w-12 h-12 rounded-lg text-center text-green-800 font-medium'/>
                <input type="button"  onClick={clickHandle} value="<" className='bg-black shadow-md w-12 h-12 rounded-lg text-center text-green-800 font-medium'/>
                <input type="button"  onClick={clickHandle} value="%" className='bg-black shadow-md w-12 h-12 rounded-lg text-center text-green-800 font-medium'/>
                <input type="button"  onClick={clickHandle} value="/" className='bg-black shadow-md w-12 h-12 rounded-lg text-center text-green-800 font-medium'/>
            </div>
            <div className="flex justify-between m-2">
                <input type="button"  onClick={clickHandle} value="1" className='bg-black shadow-md w-12 h-12 rounded-lg text-center text-green-800 font-medium'/>
                <input type="button"  onClick={clickHandle} value="2" className='bg-black shadow-md w-12 h-12 rounded-lg text-center text-green-800 font-medium'/>
                <input type="button"  onClick={clickHandle} value="3" className='bg-black shadow-md w-12 h-12 rounded-lg text-center text-green-800 font-medium'/>
                <input type="button"  onClick={clickHandle} value="+" className='bg-black shadow-md w-12 h-12 rounded-lg text-center text-green-800 font-medium'/>
            </div>
            
            <div className="flex justify-between m-2">
                <input type="button"  onClick={clickHandle} value="4" className='bg-black shadow-md w-12 h-12 rounded-lg text-center text-green-800 font-medium'/>
                <input type="button"  onClick={clickHandle} value="5" className='bg-black shadow-md w-12 h-12 rounded-lg text-center text-green-800 font-medium'/>
                <input type="button"  onClick={clickHandle} value="6" className='bg-black shadow-md w-12 h-12 rounded-lg text-center text-green-800 font-medium'/>
                <input type="button"  onClick={clickHandle} value="-" className='bg-black shadow-md w-12 h-12 rounded-lg text-center text-green-800 font-medium'/>
            </div>

            <div className="flex justify-between m-2">
                <input type="button"  onClick={clickHandle} value="7" className='bg-black shadow-md w-12 h-12 rounded-lg text-center text-green-800 font-medium'/>
                <input type="button"  onClick={clickHandle} value="8" className='bg-black shadow-md w-12 h-12 rounded-lg text-center text-green-800 font-medium'/>
                <input type="button"  onClick={clickHandle} value="9" className='bg-black shadow-md w-12 h-12 rounded-lg text-center text-green-800 font-medium'/>
                <input type="button"  onClick={clickHandle} value="*" className='bg-black shadow-md w-12 h-12 rounded-lg text-center text-green-800 font-medium'/>
            </div>

            <div className="flex justify-between m-2">
                <input type="button"  onClick={clickHandle} value="0" className='bg-black shadow-md w-12 h-12 rounded-lg text-center text-green-800 font-medium'/>
                <input type="button"  onClick={clickHandle} value="00" className='bg-black shadow-md w-12 h-12 rounded-lg text-center text-green-800 font-medium'/>
                <input type="button"  onClick={clickHandle} value="." className='bg-black shadow-md w-12 h-12 rounded-lg text-center text-green-800 font-medium'/>
                <input type="button"  onClick={calculate} value="=" className='bg-black shadow-md w-12 h-12 rounded-lg text-center text-green-800 font-medium'/>
            </div>
        </div>

      </div>
    </div>
  )
}
