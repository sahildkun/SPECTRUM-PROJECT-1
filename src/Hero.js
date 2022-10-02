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
import imgapple from './images/InShot_20220927_211259576.png'
import logo from './images/Minnow.png'
import logos from './images/Minnow logo.png'
import hbo from './images/hbo.png'
import brit from './images/britbox.png'
import bbc from './images/bbc.png'
import hulu from './images/hulu.png'
import dead from './images/deadpool.jpg'
import special from './images/special.jpg'
import suits from './images/suits.jpg'
import simon from './images/bridgerton.jpg'
import sahil from './images/sahil fav.jpg'
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
        <button className='bg-gradient-to-br from-[#4a4f9b] to-blue-900 lg:px-5 lg:py-3 lg:space-x-3 rounded-md text-white sm:px-2 
        sm:py-1
        sm:text-sm
        sm:mx-0.5 hover:from-pink-500 hover:to-yellow-500 drop-shadow-md'>Sign in</button>
        </Link>
        <Link to="/join">
        <button  className='lg:mx-4 bg-gradient-to-br from-[#2fddc6] to-[#2fddc6] lg:px-5 lg:py-3 lg:space-x-3 rounded-md text-white sm:px-2  sm:py-1 sm:text-sm
        sm:mx-2 hover:from-pink-500 hover:to-yellow-500 drop-shadow-md'>Join Minnow</button>
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
          <button className='bg-gradient-to-r from-[#6932c2] to-[#9d42c7] text-white p-3 space-x-3 rounded-md text-center mt-8 mb-8 drop-shadow-md hover:from-[#e97ada] hover:to-[#b839b1]'>Discover Minnow</button>
          
          </Link>
          
          <p className='lg:text-lg sm:text-xs '>Minnow is completely free to use! Download wherever you watch your movies</p>
          <p className='lg:text-lg sm:text-sm'>and tv shows(all mobile, TV and tablet devices)</p>
</div>
          

          {/* <p>TV DISPLAY IMAGE</p> */}
        <div className='flex flex-auto justify-center mt-36 mb-36'>
          <div className="relative">
            <div className="lg:h-[41rem] lg:w-[72rem] absolute -inset-0.5 bg-gradient-to-br from-[#f806d0] to-[#18f1f8] rounded-lg blur-3xl opacity-100"></div>
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
              <img src={img1} alt=""  className='h-60 w-44 hidden md:table-cell rounded-md transform transition-all hover:scale-110'/>
              <img src={img2} alt=""  className='h-60 w-44 hidden md:table-cell rounded-md transform transition-all hover:scale-110'/>
              <img src={img3} alt=""  className='h-60 w-44 hidden md:table-cell rounded-md transform transition-all hover:scale-110'/>
              <img src={img4} alt=""  className='h-60 w-44 hidden md:table-cell rounded-md transform transition-all hover:scale-110'/>
              <img src={img} alt=""  className='h-60 w-44  rounded-md transform transition-all hover:scale-110'/>



            </div>
            <div className='flex flex-auto space-x-11'>
              <img src={img5} alt=""  className='h-60 w-44 rounded-md transform transition-all hover:scale-110'/>
              <img src={img6} alt=""  className='h-60 w-44 rounded-md transform transition-all hover:scale-110'/>
              <img src={img7} alt=""  className='h-60 w-44 rounded-md transform transition-all hover:scale-110'/>
              <img src={img8} alt=""  className='h-60 w-44 rounded-md transform transition-all hover:scale-110'/>
              <img src={img9} alt=""  className='h-60 w-44 rounded-md transform transition-all hover:scale-110'/>



            </div>
            <div className='flex flex-auto space-x-11 pb-4'>
              <img src={suits} alt=""  className='h-60 w-44 rounded-md transform transition-all hover:scale-110'/>
              <img src={simon} alt=""  className='h-60 w-44 rounded-md transform transition-all hover:scale-110'/>
              <img src={special} alt=""  className='h-60 w-44 rounded-md transform transition-all hover:scale-110'/>
              <img src={dead} alt=""  className='h-60 w-44 rounded-md transform transition-all hover:scale-110'/>
              <img src={sahil} alt=""  className='h-60 w-40 rounded-md transform transition-all hover:scale-110'/>

              
            </div>
           
            </div>
           </div>
          </div>
           
        </div>
        </div>
            


         {/* FOOTER SECTION */}
       
         <footer className='p-auto text-center ' id='pallete'>
          <div className='flex flex-auto lg:space-x-14 place-content-center mt-32 mb-5 '>
          {/* <img alt="File:Apple TV Plus Logo.svg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/512px-Apple_TV_Plus_Logo.svg.png?20200320181329" decoding="async" width="62" height="40" srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/768px-Apple_TV_Plus_Logo.svg.png?20200320181329 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/1024px-Apple_TV_Plus_Logo.svg.png?20200320181329 2x" data-file-width="512" data-file-height="194"></img> */}
          <img src={imgapple} alt=""  className='h-40 w-40'/>
          <svg xmlns="http://www.w3.org/2000/svg" height="150" viewBox=".238 .034 919.406 248.488" width="120"><path d="m870.46 118.314 49.184 130.208c-14.495-2.07-28.982-4.663-43.733-6.999l-27.707-71.945-28.468 66.006c-13.973-2.336-27.698-3.114-41.672-4.928l49.955-113.89-45.309-116.732h41.937l25.362 65.22 27.185-65.22h42.442zm-120.864-118.28h-38.052v225.71c12.425.779 25.362 1.292 38.052 2.841zm-70.927 223.118c-34.68-2.328-69.37-4.39-104.829-5.177v-217.94h38.823v181.188c22.264.514 44.52 2.32 66.006 3.355zm-146.252-134.847v38.822h-53.06v88.263h-38.3v-215.356h108.713v38.822h-70.405v49.45h53.06zm-156.597-49.449v178.605c-12.946 0-26.14 0-38.83.514v-179.119h-40.122v-38.822h119.322v38.822zm-120.88 90.334c-17.08 0-37.274 0-51.769.787v57.715c22.778-1.557 45.556-3.363 68.59-4.141v37.273l-107.412 8.548v-229.338h107.405v38.822h-68.584v52.29c15.017 0 38.052-.778 51.768-.778v38.83zm-215.109-21.743v135.633c-13.965 1.557-26.398 3.371-39.593 5.442v-248.488h37.017l50.469 141.076v-141.076h38.83v232.436c-13.717 2.336-27.698 3.114-42.45 5.177z" fill="#FFFFFF"/></svg>
          <img src={brit} alt=""  className='h-36 w-36'/>
          <img src={hbo} alt=""  className='h-36 w-40'/>
          <img src={bbc} alt=""  className='h-36 w-40'/>
          <img src={hulu} alt=""  className='h-7 w-28 mt-14'/>
         
          
          
          
          
          
          </div>
          <div className=' text-center  text-[#8fa3bb]  pb-5 text-sm'>
          <p>Minnow aggregates all major streaming service content from publically available sources in the US, Canada, UK,</p>
          <p>Ireland, India, Brazil, Mexico and Italy.</p>
          </div>
         </footer>


          

       
    </div>
    </>
  )
}

export default Hero