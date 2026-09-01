
import React from 'react'
import { useState } from "react"
import "./index.css";
import logo from './assets/articule wm.svg';
import sparkle from './assets/sparkle.svg';


function App () {
  const [showResult, setShowResult] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResult(true);
  };
  

  return (
    <div className="flex items-center justify-center h-screen max-sm:h-fit bg-gray-100 font-[Uto]">
      <div className="bg-white p-12 rounded-2xl shadow-sm w-150 max-sm:w-full max-sm:p-8">

        <div className='flex justify-center flex-col items-center text-center max-sm:mt-17.5'>
          <img src={logo} alt="Articule Logo" className='w-50 mb-2 max-sm:w-40' />
          <p className='text-gray-700 text-[18px] max-sm:text-[16px]'>Say what you mean, We'll help you say it better!</p>
        </div>

          <form onSubmit={handleSubmit} className='flex flex-wrap gap-4 mt-5'>
            <input type="text" placeholder="Type what you're trying to say..." className='w-full p-4 border-[#93b2e5] border-2 rounded-xl mt-4 placeholder:text-[#8cb0e9]' />

            <label className='w-full mt-3'>
              <span className='text-gray-600 text-[18px] font-medium max-sm:text-[16px]'>Situation</span>
              <textarea type="text" placeholder='Describe the situation...' className='w-full p-3 border border-gray-300 rounded-md mt-4 h-20 placeholder:absolute placeholder:top-3 placeholder:text-gray-700 max-sm:placeholder:text-[14px]' />
            </label>

            <label class="relative w-full mt-3">
              <span class="text-gray-600 text-[18px] font-medium max-sm:text-[16px]">Tone</span>
              <select class="w-full p-3 text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mt-4 text-[14px]">
                <option disabled selected >How do you want to sound?</option>
                <option>Casual</option>
                <option>Professional</option>
                <option>Diplomatic</option>
                <option>Polite</option>
                <option>Assertive</option>
              </select>
              {/* <!-- Custom Arrow Graphic --> */}
              <div class="absolute inset-y-0 top-11.25 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </label>

            <label class="relative w-full mt-3">
              <span class="text-gray-600 text-[18px] font-medium max-sm:text-[16px]">Level</span>
              <select class="w-full p-3 text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mt-4 text-[14px]">
                <option disabled selected >How articulate?</option>
                <option>Simple</option>
                <option>Natural</option>
                <option>Articulate</option>
                <option>Advanced </option>
              </select>
              {/* <!-- Custom Arrow Graphic --> */}
              <div class="absolute inset-y-0 top-11.25 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </label>

            <button type='submit' className='p-5 bg-linear-to-b from-[#ABBFDE] to-[#5E92E0] w-full rounded-2xl mt-1.5 font-bold text-xl text-white/90 flex items-center justify-center gap-2 active:scale-[0.95] duration-300 max-sm:mt-4 max-sm:text-lg'> <img src={sparkle} alt="" className='w-6.5 max-sm:w-5.5' /> Articulate</button>

            {showResult && (
              <div className="flex flex-col p-5 bg-[#e9edf3] font-[Uto] border-2 border-[#93b2e5] rounded-2xl mt-4">
                <h2 className='text-[#5E92E0] font-bold text-[20px] max-sm:text-[18px]'>Your articulated version:</h2>
                <p className='text-[#5E92E0] mt-2 text-[18px] max-sm:text-[16px]'>I understand your perspective, but I have some concerns regarding the current requirements.</p>
              </div>
            )}
          </form>
      </div>
    </div>
  )
}

export default App
