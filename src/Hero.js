import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import img from './images/InShot_20220927_211259576.png'
function Hero() {
  return (
    <>
    <nav class="bg-[#6d09b0] text-white p-4 text-center ">
    Minnow is completely free to use! Create your account now and discover powerful features.
    </nav>
    <div id='blue'>
        <nav className='flex  pb-36 ' >
        
        <h1 className='mt-5'>logo</h1>
        <div className='flex flex-auto justify-end mt-7 '>
        <button className='bg-[#4a4f9b] px-5 py-3 space-x-3 rounded text-white'>Sign in</button>
        <button  className='mx-4 bg-[#0fdb8d] px-5 py-3 space-x-3 rounded text-white'>Join Minnow</button>
        
        </div>
        </nav>

        <div className='text-center text-[#546e8e] mb-9	'>
          Discover Minnow
        </div>
       
        

        <div className='text-center text-white font-sans font-medium text-7xl antialiased mb-10'>
          <p>Your streaming services,</p>
          <p>finally in one place</p>
        </div>

        <div className=' text-center  text-[#546e8e] mb-11'>
          <p>Meet Minnow, the free app that combines all the most popular streaming services for easy search</p>
          <p>and discovery anywhere you watch movies and shows.</p>
          <Link to="/discover">
          <button className='bg-[#6d09b0] text-white p-3 text-center mt-20 mb-20 '>Discover Minnow</button>
          </Link>
          <p className='text-sm'>Minnow is completely free to use! Download wherever you watch your movies</p>
          <p className='text-sm'>and tv shows(all mobile, TV and tablet devices)</p>
</div>
          

          {/* <p>TV DISPLAY IMAGE</p> */}

        <div className='mt-80  pt-96  mb-80  pb-96'>
           THE IMAGE WILL BE HERE
        </div>
        
            


         {/* FOOTER SECTION */}
       
         <footer className='p-40 text-center ' id='pallete'>
          <div className='flex flex-auto space-x-5'>
          {/* <img alt="File:Apple TV Plus Logo.svg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/512px-Apple_TV_Plus_Logo.svg.png?20200320181329" decoding="async" width="62" height="40" srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/768px-Apple_TV_Plus_Logo.svg.png?20200320181329 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/1024px-Apple_TV_Plus_Logo.svg.png?20200320181329 2x" data-file-width="512" data-file-height="194"></img> */}
          <svg xmlns="http://www.w3.org/2000/svg" height="-200" viewBox="43.2 212.3 505.5 175.3" width="150" ><path  d="m148.7 240.8c6.5-8 9.6-18.2 8.7-28.4-10 1-19.3 5.8-25.9 13.4-6.6 7.4-10 17.1-9.3 27 10.1.4 20-4.1 26.5-12"/><path fill="#FFFFFF" d="m148.7 240.1c6.3-7.8 9.4-17.8 8.7-27.8-10 1-19.3 5.8-25.9 13.4-6.6 7.4-10 17.1-9.3 27 10.3.3 20.1-4.4 26.5-12.6m8.5 14.3c-14.4-.9-26.7 8.2-33.3 8.2s-17.4-7.8-28.9-7.6c-15.2.4-29 8.9-36.2 22.2-15.6 26.8-4.1 66.8 11.1 88.2 7.3 11.1 16.1 22.2 27.8 22.2s15.3-7.1 28.7-7.1 17.2 7.1 28.9 6.9 19.6-11.1 26.9-21.6c5.2-7.6 9.2-16 12-24.8-14.2-6.3-23.3-20.4-23.2-35.9.2-13.6 7.4-26.2 19-33.3-7.4-10.5-19.3-17-32.1-17.4m113-14.2v27.7h22.2v19.1h-22.2v65c0 10.1 4.4 14.8 14.3 14.8 2.7 0 5.3-.2 8-.6v19c-4.4.8-8.9 1.2-13.4 1.1-23.9 0-33.3-9-33.3-31.8v-67.2h-16.8v-19.4h17.1v-27.7zm103.5 145.8h-25.8l-42.6-118.1h25.8l29.6 94.2 30-94.2h25.3zm174.3-70.8h-47v-47.1h-22.4v47.1h-46.8v22.1h46.8v47.4h22.4v-47.4h47z"/></svg> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 18 953.6 165.2" width="150" height="200"><path fill="#FFFFFF" d="M117.4 182.4H73.5v-62.6H45.1v62.6H0V20.9h45v60.3h28.4V20.9h43.9zm201.4.7c45 0 81.7-37.4 81.7-83 0-46.3-36.7-82.1-81.7-82.1-45.6 0-68.6 33.1-74.2 46.6 0-20-20-43.9-43.2-43.9h-75v161.7h69.8c28.4 0 48.4-24.3 48.4-45.6 6.3 13.2 28.7 46.3 74.2 46.3zm-128.2-65.6c6.5 0 11.7 6.3 11.7 13.5 0 7.5-5.2 13.9-11.7 13.9h-22.4v-27.4zm0-60.7c6.5 0 11.7 6.3 11.7 13.5s-5.2 13.5-11.7 13.5h-22.4v-27zm29.6 43.3c5.2-.3 13.7-6.3 16.9-9.9-1.2 4.3-1.2 18 0 22.4-3.6-5.3-11.7-11.5-16.9-12.5zm57.6 0c0-22.8 18.5-41.2 41.3-41.1 22.9.2 41.1 18.8 40.8 41.7-.3 22.5-18.5 40.6-41.1 40.6-22.7.1-41-18.3-41-41.2zm41 32.4c17.5 0 32.2-14.4 32.2-32.4s-14.7-32.2-32.2-32.2c-18 0-32.4 14.2-32.4 32.2s14.3 32.4 32.4 32.4z"/><path fill="#FFFFFF" d="M635.3 78c-.9-39.2-28.6-59.9-62.6-59.9-18.6 0-35.4 6.2-46.9 18.4-11.4-12.1-28.2-18.4-46.9-18.4-34 0-61.7 20.8-62.6 60v89.6c0 8.2 6.7 14.8 14.8 14.8h14c1.4 0 2.5-1.1 2.5-2.5V78.3c.6-19.3 14.3-29.5 31.2-29.5S509.4 59 510 78.3v89.3c0 8.2 6.7 14.8 14.8 14.8h14c1.4 0 2.5-1.1 2.5-2.5V78.2c.6-19.3 14.3-29.5 31.2-29.5s30.6 10.2 31.2 29.5v89.3c0 8.2 6.7 14.8 14.8 14.8h14c1.4 0 2.5-1.1 2.5-2.5l.3-101.8c.1.2 0 .1 0 0zm316-57.3h-23.8c-6.6 0-12.7 3.3-16.5 8.8l-26.3 39c-3.5 5.1-10.9 5.1-14.4 0l-26.3-39c-3.6-5.5-9.9-8.8-16.5-8.8h-23.8c-1.5 0-2.3 1.6-1.6 2.9l47 69.7c3.4 5 3.4 11.6 0 16.6l-47 69.7c-.9 1.2.1 2.9 1.6 2.9h23.8c6.6 0 12.7-3.3 16.5-8.8l26.3-39c3.5-5.1 10.9-5.1 14.4 0l26.3 39c3.6 5.5 9.9 8.8 16.5 8.8h23.8c1.5 0 2.3-1.6 1.6-2.9l-47-69.6c-3.4-5-3.4-11.6 0-16.6l47-69.7c.7-1.3-.2-3-1.6-3zm-160 0h-14c-7.1 0-13.1 5-14.6 11.7-12.5-9.6-28.1-14.4-45-14.4-41.1 0-74.4 28.6-74.4 82.6s33.3 82.6 74.4 82.6c16.8 0 32.3-4.8 44.8-14.1.7 7.5 7 13.5 14.8 13.5h14c1.4 0 2.5-1.1 2.5-2.5V23.2c-.1-1.4-1.1-2.5-2.5-2.5zm-73.6 131.8c-24.5 0-44.4-17.9-44.4-51.8s19.9-51.8 44.4-51.8 44.4 17.9 44.4 51.8-19.9 51.8-44.4 51.8z"/></svg>
          </div>
         </footer>


          

       
    </div>
    </>
  )
}

export default Hero