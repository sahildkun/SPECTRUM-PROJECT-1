import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import img from './images/Watchmen.jpg'
import img1 from './images/Thor.jpg'
import img2 from './images/Criminal Justice.jpg'
import img3 from './images/Joker.jpg'
import img4 from './images/mandalorian.jpeg'
import img5 from './images/Money Heist.jpg'
import img6 from './images/Morning Wars.jpg'
import img7 from './images/Queens Gambit.jpg'
import img8 from './images/rise-of-skywalker-poster-d23.jpg'
import img9 from './images/Spider-Man_Into_the_Spider-Verse_poster_003.jpg'
import imgs from './images/profile.png'
import logo from './images/Minnow.png'
import logos from './images/Minnow logo.png'
function Hero() {
  return (
    <>
    <nav class="bg-[#6d09b0] lg: text-white lg:p-4 md:p-2 sm:text-xs sm:p-2    text-center ">
    Minnow is completely free to use! Create your account now and discover powerful features.
    </nav>
    <div id='blue'>
        <nav className='flex  pb-32 ' >
        
        <div className='lg:ml-6 mt-3 flex flex-auto'>
        <img src={logo} className='lg:h-14 w-36'/>
        </div> 
         
        <div className='flex flex-auto justify-end mt-7 '>
          <Link to="/stream">
        <button className='bg-[#4a4f9b] lg:px-5 lg:py-3 lg:space-x-3 rounded-md text-white sm:px-2 
        sm:py-1
        sm:text-sm
        sm:mx-0.5 hover:bg-[#8188e7] drop-shadow-md'>Sign in</button>
        </Link>
        <Link to="/join">
        <button  className='lg:mx-4 bg-[#2fddc6] lg:px-5 lg:py-3 lg:space-x-3 rounded-md text-white sm:px-2  sm:py-1 sm:text-sm
        sm:mx-2 hover:bg-[#5cddc5] drop-shadow-md'>Join Minnow</button>
        </Link>
        
        
        </div>
        </nav>
        
        <div className='text-center text-[#8fa3bb] mb-5 lg:text-lg sm:text-sm'>
          Discover Minnow
        </div>
       
        

        <div className='text-center text-white font-sans font-medium lg:text-7xl antialiased mb-20 sm:text-3xl'>
          <p>Your streaming services,</p>
          <p>finally in one place</p>
        </div>

        <div className=' text-center  text-[#8fa3bb] mb-5 mt-10 lg:text-lg sm:text-sm'>
          <p>Meet Minnow, the free app that combines all the most popular streaming services for easy search</p>
          <p>and discovery anywhere you watch movies and shows.</p>
          <Link to="/discover">
          <button className='bg-[#6932c2] text-white p-3 space-x-3 rounded-md text-center mt-8 mb-8 drop-shadow-md hover:bg-[#8c55ca]'>Discover Minnow</button>
          
          </Link>
          
          <p className='lg:text-lg sm:text-xs '>Minnow is completely free to use! Download wherever you watch your movies</p>
          <p className='lg:text-lg sm:text-sm'>and tv shows(all mobile, TV and tablet devices)</p>
</div>
          

          {/* <p>TV DISPLAY IMAGE</p> */}
        <div className='flex flex-auto justify-center mt-36 mb-36'>
          <div className="relative">
            <div className="lg:h-[40rem] lg:w-[71rem] absolute -inset-0.5 bg-[#1bdbd2] rounded-lg blur-3xl opacity-50"></div>
          </div> 
          <div className='relative lg:h-[40rem] lg:w-[71rem]'>
          <div className='flex flex-auto justify-center'>
          <div className='lg:bg-[#090D3b] lg:h-[40rem] lg:w-[71rem] rounded hidden md:table-cell' id='scroll'>
            
            <div className='flex flex-auto'>
                <img src={logos} className='lg:h-20 lg:w-22 lg:mt-4 ml-2 hidden md:table-cell'></img>
                <div className='bg-[#14183e] lg:h-9 lg:w-[85rem] lg:mt-10 mr-1 rounded hidden sm:table-cell '>
                </div>
              <div className='lg:h-9 lg:w-15 lg:mt-10 ml-4 mr-3 hidden md:table-cell'>
                <img src={imgs} className='lg:h-9 lg:w-12'/>
              </div>
            </div>
            {/* <div className='flex flex-auto space-x-8 lg:hidden'>
              <img src={img} alt=""  className='sm:h-[15rem] sm:w-[10rem] sm:ml-[2rem] '/>
              <img src={img} alt=""  className='sm:h-[15rem] sm:w-[10rem] sm:ml-[2rem] '/>
              <img src={img} alt=""  className='sm:h-[15rem] sm:w-[10rem] sm:ml-[2rem] '/>
              
              



            </div> */}
            <div className='mx-20 mt-36 space-y-8'>
            <div className='flex flex-auto space-x-11'>
              <img src={img1} alt=""  className='h-60 w-44 hidden md:table-cell rounded-md'/>
              <img src={img2} alt=""  className='h-60 w-44 hidden md:table-cell rounded-md'/>
              <img src={img3} alt=""  className='h-60 w-44 hidden md:table-cell rounded-md'/>
              <img src={img4} alt=""  className='h-60 w-44 hidden md:table-cell rounded-md'/>
              <img src={img} alt=""  className='h-60 w-44'/>



            </div>
            <div className='flex flex-auto space-x-11'>
              <img src={img5} alt=""  className='h-60 w-44 rounded-md'/>
              <img src={img6} alt=""  className='h-60 w-44 rounded-md'/>
              <img src={img7} alt=""  className='h-60 w-44 rounded-md'/>
              <img src={img8} alt=""  className='h-60 w-44 rounded-md'/>
              <img src={img9} alt=""  className='h-60 w-44 rounded-md'/>



            </div>
            <div className='flex flex-auto space-x-11'>
              <img src={img2} alt=""  className='h-60 w-44 rounded-md'/>
              <img src={img1} alt=""  className='h-60 w-44 rounded-md'/>
              <img src={img3} alt=""  className='h-60 w-44 rounded-md'/>
              <img src={img4} alt=""  className='h-60 w-44 rounded-md'/>
              <img src={img7} alt=""  className='h-60 w-44 rounded-md'/>

              



            </div>
           
            </div>
           </div>
          </div>
           
        </div>
        </div>
            


         {/* FOOTER SECTION */}
       
         <footer className='p-auto text-center ' id='pallete'>
          <div className='flex flex-auto lg:space-x-14 place-content-center m-20 height-200 width-200'>
          {/* <img alt="File:Apple TV Plus Logo.svg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/512px-Apple_TV_Plus_Logo.svg.png?20200320181329" decoding="async" width="62" height="40" srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/768px-Apple_TV_Plus_Logo.svg.png?20200320181329 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/1024px-Apple_TV_Plus_Logo.svg.png?20200320181329 2x" data-file-width="512" data-file-height="194"></img> */}
          <svg xmlns="http://www.w3.org/2000/svg" height="-200" viewBox="43.2 212.3 505.5 175.3" width="200" ><path  d="m148.7 240.8c6.5-8 9.6-18.2 8.7-28.4-10 1-19.3 5.8-25.9 13.4-6.6 7.4-10 17.1-9.3 27 10.1.4 20-4.1 26.5-12"/><path fill="#FFFFFF" d="m148.7 240.1c6.3-7.8 9.4-17.8 8.7-27.8-10 1-19.3 5.8-25.9 13.4-6.6 7.4-10 17.1-9.3 27 10.3.3 20.1-4.4 26.5-12.6m8.5 14.3c-14.4-.9-26.7 8.2-33.3 8.2s-17.4-7.8-28.9-7.6c-15.2.4-29 8.9-36.2 22.2-15.6 26.8-4.1 66.8 11.1 88.2 7.3 11.1 16.1 22.2 27.8 22.2s15.3-7.1 28.7-7.1 17.2 7.1 28.9 6.9 19.6-11.1 26.9-21.6c5.2-7.6 9.2-16 12-24.8-14.2-6.3-23.3-20.4-23.2-35.9.2-13.6 7.4-26.2 19-33.3-7.4-10.5-19.3-17-32.1-17.4m113-14.2v27.7h22.2v19.1h-22.2v65c0 10.1 4.4 14.8 14.3 14.8 2.7 0 5.3-.2 8-.6v19c-4.4.8-8.9 1.2-13.4 1.1-23.9 0-33.3-9-33.3-31.8v-67.2h-16.8v-19.4h17.1v-27.7zm103.5 145.8h-25.8l-42.6-118.1h25.8l29.6 94.2 30-94.2h25.3zm174.3-70.8h-47v-47.1h-22.4v47.1h-46.8v22.1h46.8v47.4h22.4v-47.4h47z"/></svg> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 18 953.6 165.2" width="200" height="200"><path fill="#FFFFFF" d="M117.4 182.4H73.5v-62.6H45.1v62.6H0V20.9h45v60.3h28.4V20.9h43.9zm201.4.7c45 0 81.7-37.4 81.7-83 0-46.3-36.7-82.1-81.7-82.1-45.6 0-68.6 33.1-74.2 46.6 0-20-20-43.9-43.2-43.9h-75v161.7h69.8c28.4 0 48.4-24.3 48.4-45.6 6.3 13.2 28.7 46.3 74.2 46.3zm-128.2-65.6c6.5 0 11.7 6.3 11.7 13.5 0 7.5-5.2 13.9-11.7 13.9h-22.4v-27.4zm0-60.7c6.5 0 11.7 6.3 11.7 13.5s-5.2 13.5-11.7 13.5h-22.4v-27zm29.6 43.3c5.2-.3 13.7-6.3 16.9-9.9-1.2 4.3-1.2 18 0 22.4-3.6-5.3-11.7-11.5-16.9-12.5zm57.6 0c0-22.8 18.5-41.2 41.3-41.1 22.9.2 41.1 18.8 40.8 41.7-.3 22.5-18.5 40.6-41.1 40.6-22.7.1-41-18.3-41-41.2zm41 32.4c17.5 0 32.2-14.4 32.2-32.4s-14.7-32.2-32.2-32.2c-18 0-32.4 14.2-32.4 32.2s14.3 32.4 32.4 32.4z"/><path fill="#FFFFFF" d="M635.3 78c-.9-39.2-28.6-59.9-62.6-59.9-18.6 0-35.4 6.2-46.9 18.4-11.4-12.1-28.2-18.4-46.9-18.4-34 0-61.7 20.8-62.6 60v89.6c0 8.2 6.7 14.8 14.8 14.8h14c1.4 0 2.5-1.1 2.5-2.5V78.3c.6-19.3 14.3-29.5 31.2-29.5S509.4 59 510 78.3v89.3c0 8.2 6.7 14.8 14.8 14.8h14c1.4 0 2.5-1.1 2.5-2.5V78.2c.6-19.3 14.3-29.5 31.2-29.5s30.6 10.2 31.2 29.5v89.3c0 8.2 6.7 14.8 14.8 14.8h14c1.4 0 2.5-1.1 2.5-2.5l.3-101.8c.1.2 0 .1 0 0zm316-57.3h-23.8c-6.6 0-12.7 3.3-16.5 8.8l-26.3 39c-3.5 5.1-10.9 5.1-14.4 0l-26.3-39c-3.6-5.5-9.9-8.8-16.5-8.8h-23.8c-1.5 0-2.3 1.6-1.6 2.9l47 69.7c3.4 5 3.4 11.6 0 16.6l-47 69.7c-.9 1.2.1 2.9 1.6 2.9h23.8c6.6 0 12.7-3.3 16.5-8.8l26.3-39c3.5-5.1 10.9-5.1 14.4 0l26.3 39c3.6 5.5 9.9 8.8 16.5 8.8h23.8c1.5 0 2.3-1.6 1.6-2.9l-47-69.6c-3.4-5-3.4-11.6 0-16.6l47-69.7c.7-1.3-.2-3-1.6-3zm-160 0h-14c-7.1 0-13.1 5-14.6 11.7-12.5-9.6-28.1-14.4-45-14.4-41.1 0-74.4 28.6-74.4 82.6s33.3 82.6 74.4 82.6c16.8 0 32.3-4.8 44.8-14.1.7 7.5 7 13.5 14.8 13.5h14c1.4 0 2.5-1.1 2.5-2.5V23.2c-.1-1.4-1.1-2.5-2.5-2.5zm-73.6 131.8c-24.5 0-44.4-17.9-44.4-51.8s19.9-51.8 44.4-51.8 44.4 17.9 44.4 51.8-19.9 51.8-44.4 51.8z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" height="200" viewBox=".238 .034 919.406 248.488" width="200"><path d="m870.46 118.314 49.184 130.208c-14.495-2.07-28.982-4.663-43.733-6.999l-27.707-71.945-28.468 66.006c-13.973-2.336-27.698-3.114-41.672-4.928l49.955-113.89-45.309-116.732h41.937l25.362 65.22 27.185-65.22h42.442zm-120.864-118.28h-38.052v225.71c12.425.779 25.362 1.292 38.052 2.841zm-70.927 223.118c-34.68-2.328-69.37-4.39-104.829-5.177v-217.94h38.823v181.188c22.264.514 44.52 2.32 66.006 3.355zm-146.252-134.847v38.822h-53.06v88.263h-38.3v-215.356h108.713v38.822h-70.405v49.45h53.06zm-156.597-49.449v178.605c-12.946 0-26.14 0-38.83.514v-179.119h-40.122v-38.822h119.322v38.822zm-120.88 90.334c-17.08 0-37.274 0-51.769.787v57.715c22.778-1.557 45.556-3.363 68.59-4.141v37.273l-107.412 8.548v-229.338h107.405v38.822h-68.584v52.29c15.017 0 38.052-.778 51.768-.778v38.83zm-215.109-21.743v135.633c-13.965 1.557-26.398 3.371-39.593 5.442v-248.488h37.017l50.469 141.076v-141.076h38.83v232.436c-13.717 2.336-27.698 3.114-42.45 5.177z" fill="#FFFFFF"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="5.348 31.697 89.762 29.228"><path fill="#FFFFFF" d="M95.109 40.81h-7.148v11.781c0 .532-.207.984-.539 1.354-.334.329-.791.493-1.329.533h-4.155c-.582-.041-1.039-.205-1.372-.533-.333-.369-.54-.82-.54-1.354V40.81h-7.147v12.397c.042 1.643.333 3.078 1.04 4.227.705 1.15 1.619 2.012 2.824 2.586 1.248.574 2.66.904 4.279.904h6.941v-.082c1.496 0 2.783-.328 3.864-.944a6.405 6.405 0 0 0 2.411-2.71c.58-1.149.871-2.505.871-3.982V40.81zm-71.518.739c-1.247-.533-2.618-.78-4.114-.739h-4.613l-1.787.206c-.416.123-.624.205-.624.205v-9.524H5.348v29.228h7.106V49.102c.042-.493.208-.985.582-1.313.374-.328.79-.533 1.371-.533h4.156c.499 0 .956.207 1.33.533.374.329.54.821.582 1.313v11.823h7.106V48.199c0-1.766-.374-3.202-1.08-4.311-.749-1.067-1.705-1.846-2.91-2.339zm24.185 11.043c-.042.532-.208.983-.54 1.354-.374.328-.831.492-1.371.532h-4.156c-.54-.041-.997-.205-1.33-.532-.374-.37-.54-.821-.582-1.354V40.81h-7.106v12.397c0 1.643.333 3.078.998 4.227.665 1.15 1.62 2.012 2.826 2.586 1.247.574 2.618.904 4.28.904h6.981v-.082c1.496 0 2.785-.328 3.824-.944a6.778 6.778 0 0 0 2.451-2.71c.54-1.149.832-2.505.873-3.982V40.81h-7.148v11.782zm12.55 8.333h7.106V31.697h-7.106v29.228z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" height="-200" viewBox="43.2 212.3 505.5 175.3" width="200" ><path  d="m148.7 240.8c6.5-8 9.6-18.2 8.7-28.4-10 1-19.3 5.8-25.9 13.4-6.6 7.4-10 17.1-9.3 27 10.1.4 20-4.1 26.5-12"/><path fill="#FFFFFF" d="m148.7 240.1c6.3-7.8 9.4-17.8 8.7-27.8-10 1-19.3 5.8-25.9 13.4-6.6 7.4-10 17.1-9.3 27 10.3.3 20.1-4.4 26.5-12.6m8.5 14.3c-14.4-.9-26.7 8.2-33.3 8.2s-17.4-7.8-28.9-7.6c-15.2.4-29 8.9-36.2 22.2-15.6 26.8-4.1 66.8 11.1 88.2 7.3 11.1 16.1 22.2 27.8 22.2s15.3-7.1 28.7-7.1 17.2 7.1 28.9 6.9 19.6-11.1 26.9-21.6c5.2-7.6 9.2-16 12-24.8-14.2-6.3-23.3-20.4-23.2-35.9.2-13.6 7.4-26.2 19-33.3-7.4-10.5-19.3-17-32.1-17.4m113-14.2v27.7h22.2v19.1h-22.2v65c0 10.1 4.4 14.8 14.3 14.8 2.7 0 5.3-.2 8-.6v19c-4.4.8-8.9 1.2-13.4 1.1-23.9 0-33.3-9-33.3-31.8v-67.2h-16.8v-19.4h17.1v-27.7zm103.5 145.8h-25.8l-42.6-118.1h25.8l29.6 94.2 30-94.2h25.3zm174.3-70.8h-47v-47.1h-22.4v47.1h-46.8v22.1h46.8v47.4h22.4v-47.4h47z"/></svg> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 18 953.6 165.2" width="200" height="200"><path fill="#FFFFFF" d="M117.4 182.4H73.5v-62.6H45.1v62.6H0V20.9h45v60.3h28.4V20.9h43.9zm201.4.7c45 0 81.7-37.4 81.7-83 0-46.3-36.7-82.1-81.7-82.1-45.6 0-68.6 33.1-74.2 46.6 0-20-20-43.9-43.2-43.9h-75v161.7h69.8c28.4 0 48.4-24.3 48.4-45.6 6.3 13.2 28.7 46.3 74.2 46.3zm-128.2-65.6c6.5 0 11.7 6.3 11.7 13.5 0 7.5-5.2 13.9-11.7 13.9h-22.4v-27.4zm0-60.7c6.5 0 11.7 6.3 11.7 13.5s-5.2 13.5-11.7 13.5h-22.4v-27zm29.6 43.3c5.2-.3 13.7-6.3 16.9-9.9-1.2 4.3-1.2 18 0 22.4-3.6-5.3-11.7-11.5-16.9-12.5zm57.6 0c0-22.8 18.5-41.2 41.3-41.1 22.9.2 41.1 18.8 40.8 41.7-.3 22.5-18.5 40.6-41.1 40.6-22.7.1-41-18.3-41-41.2zm41 32.4c17.5 0 32.2-14.4 32.2-32.4s-14.7-32.2-32.2-32.2c-18 0-32.4 14.2-32.4 32.2s14.3 32.4 32.4 32.4z"/><path fill="#FFFFFF" d="M635.3 78c-.9-39.2-28.6-59.9-62.6-59.9-18.6 0-35.4 6.2-46.9 18.4-11.4-12.1-28.2-18.4-46.9-18.4-34 0-61.7 20.8-62.6 60v89.6c0 8.2 6.7 14.8 14.8 14.8h14c1.4 0 2.5-1.1 2.5-2.5V78.3c.6-19.3 14.3-29.5 31.2-29.5S509.4 59 510 78.3v89.3c0 8.2 6.7 14.8 14.8 14.8h14c1.4 0 2.5-1.1 2.5-2.5V78.2c.6-19.3 14.3-29.5 31.2-29.5s30.6 10.2 31.2 29.5v89.3c0 8.2 6.7 14.8 14.8 14.8h14c1.4 0 2.5-1.1 2.5-2.5l.3-101.8c.1.2 0 .1 0 0zm316-57.3h-23.8c-6.6 0-12.7 3.3-16.5 8.8l-26.3 39c-3.5 5.1-10.9 5.1-14.4 0l-26.3-39c-3.6-5.5-9.9-8.8-16.5-8.8h-23.8c-1.5 0-2.3 1.6-1.6 2.9l47 69.7c3.4 5 3.4 11.6 0 16.6l-47 69.7c-.9 1.2.1 2.9 1.6 2.9h23.8c6.6 0 12.7-3.3 16.5-8.8l26.3-39c3.5-5.1 10.9-5.1 14.4 0l26.3 39c3.6 5.5 9.9 8.8 16.5 8.8h23.8c1.5 0 2.3-1.6 1.6-2.9l-47-69.6c-3.4-5-3.4-11.6 0-16.6l47-69.7c.7-1.3-.2-3-1.6-3zm-160 0h-14c-7.1 0-13.1 5-14.6 11.7-12.5-9.6-28.1-14.4-45-14.4-41.1 0-74.4 28.6-74.4 82.6s33.3 82.6 74.4 82.6c16.8 0 32.3-4.8 44.8-14.1.7 7.5 7 13.5 14.8 13.5h14c1.4 0 2.5-1.1 2.5-2.5V23.2c-.1-1.4-1.1-2.5-2.5-2.5zm-73.6 131.8c-24.5 0-44.4-17.9-44.4-51.8s19.9-51.8 44.4-51.8 44.4 17.9 44.4 51.8-19.9 51.8-44.4 51.8z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" height="200" viewBox=".238 .034 919.406 248.488" width="200"><path d="m870.46 118.314 49.184 130.208c-14.495-2.07-28.982-4.663-43.733-6.999l-27.707-71.945-28.468 66.006c-13.973-2.336-27.698-3.114-41.672-4.928l49.955-113.89-45.309-116.732h41.937l25.362 65.22 27.185-65.22h42.442zm-120.864-118.28h-38.052v225.71c12.425.779 25.362 1.292 38.052 2.841zm-70.927 223.118c-34.68-2.328-69.37-4.39-104.829-5.177v-217.94h38.823v181.188c22.264.514 44.52 2.32 66.006 3.355zm-146.252-134.847v38.822h-53.06v88.263h-38.3v-215.356h108.713v38.822h-70.405v49.45h53.06zm-156.597-49.449v178.605c-12.946 0-26.14 0-38.83.514v-179.119h-40.122v-38.822h119.322v38.822zm-120.88 90.334c-17.08 0-37.274 0-51.769.787v57.715c22.778-1.557 45.556-3.363 68.59-4.141v37.273l-107.412 8.548v-229.338h107.405v38.822h-68.584v52.29c15.017 0 38.052-.778 51.768-.778v38.83zm-215.109-21.743v135.633c-13.965 1.557-26.398 3.371-39.593 5.442v-248.488h37.017l50.469 141.076v-141.076h38.83v232.436c-13.717 2.336-27.698 3.114-42.45 5.177z" fill="#FFFFFF"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="5.348 31.697 89.762 29.228"><path fill="#FFFFFF" d="M95.109 40.81h-7.148v11.781c0 .532-.207.984-.539 1.354-.334.329-.791.493-1.329.533h-4.155c-.582-.041-1.039-.205-1.372-.533-.333-.369-.54-.82-.54-1.354V40.81h-7.147v12.397c.042 1.643.333 3.078 1.04 4.227.705 1.15 1.619 2.012 2.824 2.586 1.248.574 2.66.904 4.279.904h6.941v-.082c1.496 0 2.783-.328 3.864-.944a6.405 6.405 0 0 0 2.411-2.71c.58-1.149.871-2.505.871-3.982V40.81zm-71.518.739c-1.247-.533-2.618-.78-4.114-.739h-4.613l-1.787.206c-.416.123-.624.205-.624.205v-9.524H5.348v29.228h7.106V49.102c.042-.493.208-.985.582-1.313.374-.328.79-.533 1.371-.533h4.156c.499 0 .956.207 1.33.533.374.329.54.821.582 1.313v11.823h7.106V48.199c0-1.766-.374-3.202-1.08-4.311-.749-1.067-1.705-1.846-2.91-2.339zm24.185 11.043c-.042.532-.208.983-.54 1.354-.374.328-.831.492-1.371.532h-4.156c-.54-.041-.997-.205-1.33-.532-.374-.37-.54-.821-.582-1.354V40.81h-7.106v12.397c0 1.643.333 3.078.998 4.227.665 1.15 1.62 2.012 2.826 2.586 1.247.574 2.618.904 4.28.904h6.981v-.082c1.496 0 2.785-.328 3.824-.944a6.778 6.778 0 0 0 2.451-2.71c.54-1.149.832-2.505.873-3.982V40.81h-7.148v11.782zm12.55 8.333h7.106V31.697h-7.106v29.228z"/></svg>
          </div>
          <div className=' text-center  text-[#8fa3bb]  mt-10 text-md'>
          <p>Minnow aggregates all major streaming service content from publically available sources in the US, Canada, UK,</p>
          <p>Ireland, India, Brazil, Mexico and Italy.</p>
          </div>
         </footer>


          

       
    </div>
    </>
  )
}

export default Hero