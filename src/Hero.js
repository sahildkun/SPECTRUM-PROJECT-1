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
        <button  className='lg:mx-4 bg-gradient-to-br from-[#2fddc6] to-sky-400 lg:px-5 lg:py-3 lg:space-x-3 rounded-md text-white sm:px-2  sm:py-1 sm:text-sm
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
          <button className='bg-gradient-to-r from-[#6932c2] to-[#ca77f0] text-white p-3 space-x-3 rounded-md text-center mt-8 mb-8 drop-shadow-md hover:from-pink-500 hover:to-yellow-500'>Discover Minnow</button>
          
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
              <img src={img1} alt=""  className='h-60 w-44 hidden md:table-cell rounded-md transform transition-all hover:scale-110'/>
              <img src={img2} alt=""  className='h-60 w-44 hidden md:table-cell rounded-md transform transition-all hover:scale-110'/>
              <img src={img3} alt=""  className='h-60 w-44 hidden md:table-cell rounded-md transform transition-all hover:scale-110'/>
              <img src={img4} alt=""  className='h-60 w-44 hidden md:table-cell rounded-md transform transition-all hover:scale-110'/>
              <img src={img} alt=""  className='h-60 w-44 transform transition-all hover:scale-110'/>



            </div>
            <div className='flex flex-auto space-x-11'>
              <img src={img5} alt=""  className='h-60 w-44 rounded-md transform transition-all hover:scale-110'/>
              <img src={img6} alt=""  className='h-60 w-44 rounded-md transform transition-all hover:scale-110'/>
              <img src={img7} alt=""  className='h-60 w-44 rounded-md transform transition-all hover:scale-110'/>
              <img src={img8} alt=""  className='h-60 w-44 rounded-md transform transition-all hover:scale-110'/>
              <img src={img9} alt=""  className='h-60 w-44 rounded-md transform transition-all hover:scale-110'/>



            </div>
            <div className='flex flex-auto space-x-11'>
              <img src={img2} alt=""  className='h-60 w-44 rounded-md transform transition-all hover:scale-110'/>
              <img src={img1} alt=""  className='h-60 w-44 rounded-md transform transition-all hover:scale-110'/>
              <img src={img3} alt=""  className='h-60 w-44 rounded-md transform transition-all hover:scale-110'/>
              <img src={img4} alt=""  className='h-60 w-44 rounded-md transform transition-all hover:scale-110'/>
              <img src={img7} alt=""  className='h-60 w-44 rounded-md transform transition-all hover:scale-110'/>

              



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
          <img src={imgapple} alt=""  className='h-32 w-32'/>
          <img src={imgapple} alt=""  className='h-32 w-32'/>
          <img src={imgapple} alt=""  className='h-32 w-32'/>
          <img src={imgapple} alt=""  className='h-32 w-32'/>
          <img src={imgapple} alt=""  className='h-32 w-32'/>
          <img src={imgapple} alt=""  className='h-32 w-32'/>
          <img src={imgapple} alt=""  className='h-32 w-32'/>
          
          
          
          
          
          </div>
          <div className=' text-center  text-[#8fa3bb]  m text-sm'>
          <p>Minnow aggregates all major streaming service content from publically available sources in the US, Canada, UK,</p>
          <p>Ireland, India, Brazil, Mexico and Italy.</p>
          </div>
         </footer>


          

       
    </div>
    </>
  )
}

export default Hero