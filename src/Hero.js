import React from 'react'
import './App.css'
import img from './images/photo_2022-09-27_19-24-28.jpg'
function Hero() {
  return (
    <div id='blue'>
        <nav className='flex  pb-36 ' >
        
        <h1 className='mt-5'>logo</h1>
        <div className='flex flex-auto justify-end mt-7 '>
        <button className='bg-indigo-800 px-5 py-3 space-x-3 rounded text-white'>Sign in</button>
        <button  className='mx-4 bg-teal-400 px-5 py-3 space-x-3 rounded text-white'>Join Minnow</button>
        
        </div>
        </nav>

        <div className='text-center text-gray-500 mb-9	'>
          Discover minnow
        </div>

        <div className='text-center text-white font-sans font-medium text-7xl antialiased mb-10'>
          <p>Your streaming services,</p>
          <p>finally in one place</p>
        </div>

        <div className=' text-center  text-gray-500 mb-11'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint quibusda</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint quibusda</p>
          <button className='bg-violet-700 text-white p-3 text-center mt-20 mb-20 '>discover minnow</button>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint quibusda</p>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint quibusda</p>
</div>
          

          {/* <p>TV DISPLAY IMAGE</p> */}

        <div className='mt-80  pt-96  mb-80  pb-96'>
           THE IMAGE WILL BE HERE
        </div>
        
            


         {/* FOOTER SECTION */}
       
         <footer className='p-40 text-center ' id='pallete'>
          <div className='flex flex-auto'>
          <img alt="File:Apple TV Plus Logo.svg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/512px-Apple_TV_Plus_Logo.svg.png?20200320181329" decoding="async" width="62" height="40" srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/768px-Apple_TV_Plus_Logo.svg.png?20200320181329 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/1024px-Apple_TV_Plus_Logo.svg.png?20200320181329 2x" data-file-width="512" data-file-height="194"></img>
            
          </div>
         </footer>


          

       
    </div>
  )
}

export default Hero