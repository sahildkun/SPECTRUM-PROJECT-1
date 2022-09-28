import React from 'react'
import './App.css'
import img from './images/InShot_20220927_211259576.png'
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
          <div className='flex flex-auto '>
          {/* <img alt="File:Apple TV Plus Logo.svg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/512px-Apple_TV_Plus_Logo.svg.png?20200320181329" decoding="async" width="62" height="40" srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/768px-Apple_TV_Plus_Logo.svg.png?20200320181329 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/1024px-Apple_TV_Plus_Logo.svg.png?20200320181329 2x" data-file-width="512" data-file-height="194"></img> */}
            <img src={img} alt=""  className='h-1/6 w-1/6'/>
            <svg xmlns="http://www.w3.org/2000/svg" height="-200" viewBox="43.2 212.3 505.5 175.3" width="150" ><path  d="m148.7 240.8c6.5-8 9.6-18.2 8.7-28.4-10 1-19.3 5.8-25.9 13.4-6.6 7.4-10 17.1-9.3 27 10.1.4 20-4.1 26.5-12"/><path fill="#FFFFFF" d="m148.7 240.1c6.3-7.8 9.4-17.8 8.7-27.8-10 1-19.3 5.8-25.9 13.4-6.6 7.4-10 17.1-9.3 27 10.3.3 20.1-4.4 26.5-12.6m8.5 14.3c-14.4-.9-26.7 8.2-33.3 8.2s-17.4-7.8-28.9-7.6c-15.2.4-29 8.9-36.2 22.2-15.6 26.8-4.1 66.8 11.1 88.2 7.3 11.1 16.1 22.2 27.8 22.2s15.3-7.1 28.7-7.1 17.2 7.1 28.9 6.9 19.6-11.1 26.9-21.6c5.2-7.6 9.2-16 12-24.8-14.2-6.3-23.3-20.4-23.2-35.9.2-13.6 7.4-26.2 19-33.3-7.4-10.5-19.3-17-32.1-17.4m113-14.2v27.7h22.2v19.1h-22.2v65c0 10.1 4.4 14.8 14.3 14.8 2.7 0 5.3-.2 8-.6v19c-4.4.8-8.9 1.2-13.4 1.1-23.9 0-33.3-9-33.3-31.8v-67.2h-16.8v-19.4h17.1v-27.7zm103.5 145.8h-25.8l-42.6-118.1h25.8l29.6 94.2 30-94.2h25.3zm174.3-70.8h-47v-47.1h-22.4v47.1h-46.8v22.1h46.8v47.4h22.4v-47.4h47z"/></svg>
          </div>
         </footer>


          

       
    </div>
  )
}

export default Hero