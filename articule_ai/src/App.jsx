import React from 'react'
import "./index.css";
import logo from './assets/articule wm.svg';
import sparkle from './assets/sparkle.svg';


const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 font-[Uto]">
      <div className="bg-white p-12 rounded-xl shadow-sm w-150">

        <div className='flex justify-center flex-col items-center'>
          <img src={logo} alt="Articule Logo" className='w-50 mb-2' />
          <p className='text-gray-700 text-[18px]'>Say what you mean, We'll help you say it better!</p>
        </div>

          <form className='flex flex-wrap gap-4 mt-5'>
            <input type="text" placeholder='What are you trying to say?' className='w-full p-4 border-[#93b2e5] border-2 rounded-xl mt-4 placeholder:text-[#8cb0e9]' />

            <label className='w-full mt-3'>
              <span className='text-gray-600 text-[18px] font-medium'>Situation</span>
              <input type="text" placeholder='Describe the situation...' className='w-full p-3 border border-gray-300 rounded-md mt-4 h-20 placeholder:absolute placeholder:top-3 placeholder:text-gray-700 ' />
            </label>

            <label class="relative w-full mt-3">
              <span class="text-gray-600 text-[18px] font-medium">Tone</span>
              <select class="w-full p-3 text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mt-4 ">
                <option disabled selected >How do you want to sound?</option>
                <option>Casual</option>
                <option>Professional</option>
                <option>Diplomatic</option>
                <option>Polite</option>
                <option>Assertive</option>
              </select>
              {/* <!-- Custom Arrow Graphic --> */}
              <div class="absolute inset-y-0 top-[45px] right-0 flex items-center px-3 pointer-events-none text-gray-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </label>

            <label class="relative w-full mt-3">
              <span class="text-gray-600 text-[18px] font-medium">Level</span>
              <select class="w-full p-3 text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mt-4 ">
                <option disabled selected >How articulate?</option>
                <option>Simple</option>
                <option>Natural</option>
                <option>Articulate</option>
                <option>Advanced </option>
              </select>
              {/* <!-- Custom Arrow Graphic --> */}
              <div class="absolute inset-y-0 top-[45px] right-0 flex items-center px-3 pointer-events-none text-gray-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </label>

            <button className='p-5 bg-linear-to-b from-[#ABBFDE] to-[#5E92E0] w-full rounded-2xl mt-1.5 font-bold text-xl text-white/90 flex items-center justify-center gap-2'> <img src={sparkle} alt="" className='w-6.5' /> Articulate</button>

          </form>
      </div>
    </div>
  )
}

export default App
