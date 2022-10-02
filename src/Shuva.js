import React from 'react'
import './shuva.css'
import spd from './images/spd.jpg'
import sonic from './images/sonic.jpg'
import ironman from './images/ironman.jpg'
import stranger from './images/stranger.jpg'
import got from './images/got.jpg'
import frozen from './images/frozen.jpg'
import marvel from './images/marvel.jpg'
import christmas from './images/christmas.png'
import tale from './images/tale.jpg'

import imgapple from './images/InShot_20220927_211259576.png'

import hbo from './images/hbo.png'
import brit from './images/britbox.png'
import bbc from './images/bbc.png'
import hulu from './images/hulu.png'

function Shuva() {
  return (
    <body bgcolor="#18145c">
  <main>
    <div class="flex justify-around pt-20 pb-10">
      <div class="py-16 pl-20">
          <div class="buttons">
              <button class="bg-yellow-500 px-5 py-5 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20"><path d="M288 32C129.6 32 30 181.3 0 256c30 74.7 129.6 224 288 224s258-149.3 288-224C546 181.3 446.4 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zm-240 0c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-6.4 0-12.7 .6-18.8 1.8L288 256l-94.2-18.8c-1.2 6.1-1.8 12.4-1.8 18.8z"/></svg></button>
          </div>
          <div class="text-5xl text-white font-sans font-medium py-10">
          <b>Stream your favourites titles</b>
          </div>
          <div>
              <p class="text-[#b0aae0] py-4 w-9/12">One-click streaming of the most popular movies and series across Netflix, Prime Video, HBO Max, Disney+, Peacock,and others all in one place</p>
          </div>
          <div class="pr-96">
              <div class="border-b-2 border-blue-900 pb-2 pt-10">
                  <button class="bg-cyan-500 px-2 py-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="10"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></button><b class="text-white pl-4 font-sans">Filter by only the services you pay for</b></div>
              <div class=" border-b-2 border-blue-900 pb-2 pt-2"><button class="bg-cyan-500 px-2 py-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="10"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></button><b  class="font-sans text-white pl-4">No more switching between apps</b></div>
              <div class="pt-2"><button class="bg-cyan-500 px-2 py-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="10"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></button><b class="text-white pl-4 font-sans">Share what you are watching with friends</b></div>
          </div>
            <div>
              <p class="text-[#b0aae0] py-4 w-9/12 font-thin text-xs pt-10">Minnow aggregates all major streaming service content from publically available sources in the US, Canada, UK, Ireland, India, Brazil, Mexico and Italy</p>
            </div></div>
            {/* spacing  */}
            <div class="lg:mt-20  lg:pt-10  mb-80   pr-20 ">
              <div class="flex flex-auto justify-center">
              <div class="lg:bg-[#353b79] lg:h-[30rem] lg:w-[50rem] rounded " id="">
                
                 
                <div class="mx-5 mt-5" >
                 <div className='bg-[#261b66] h-5 w-[46rem] ml-4'></div>
                <div id='scroll2'>
                 <div className='mt-5 px-2 space-x-5 flex flex-auto'>
                  <img src={sonic} alt=""  class="lg:h-[12rem] lg:w-[25rem] "/>
                  <img src={spd} alt=""  class="lg:h-[12rem] lg:w-[23rem] "/>
                  <img src={stranger} alt=""  class="lg:h-[12rem] lg:w-[29rem] "/>
                    
                 </div>
                 <div className='mt-5 px-2 space-x-4 flex flex-auto'>
                 <img src={frozen} alt=""  class="lg:h-[12rem] lg:w-[30rem]"/>
                  <img src={ironman} alt=""  class="lg:h-[12rem] lg:w-[30rem]"/>
                  <img src={got} alt=""  class="lg:h-[12rem] lg:w-[30rem]"/>
                 </div>
                 </div>
            
              
                </div>
               </div>
              </div>
               
            </div>
  </div>
  <div class="grid grid-cols-2 gap-96 pl-20 ">

<div class="grid grid-cols-1 gap-3 ">
   {/* avengesr */}
    <div className='group relative'>
    <div>
    <img src={marvel} className=' h-48 w-full object-fill rounded-lg  '/>
    </div>
    <div
            class="absolute top-0 left-0 w-full h-0  items-center bg-[#d84642] opacity-0 group-hover:h-full group-hover:opacity-80 duration-500">

            <h1 class="text-lg text-white font-sans p-5 ">13 Titles</h1>
            <h2 class=" text-white text-2xl font-semibold py-20 pl-5">Marvel Movies</h2>
        </div>
    </div>

    {/* christmas */}
    <div className='group relative'>
    <div>
    <img src={christmas} className=' h-48 w-full object-fill rounded-lg '/>
    </div>
    <div
            class="absolute top-0 left-0 w-full h-0  items-center bg-[#74bbd8] opacity-0 group-hover:h-full group-hover:opacity-80 duration-500">

            <h1 class="text-lg text-white font-sans p-5 ">13 Titles</h1>
            <h2 class=" text-white text-2xl font-semibold py-20 pl-5">Marvel Movies</h2>
        </div>
    </div>
     
    {/* hulk monstaer */}
    <div className='group relative'>
    <div>
    <img src={tale} className=' h-[14rem] w-full object-fill rounded-lg '/>
    </div>
    <div
            class="absolute top-0 left-0 w-full h-full items-center bg-[#28594f] opacity-0 group-hover:h-full group-hover:opacity-80 duration-500">

            <h1 class="text-lg text-white font-sans p-5 ">13 Titles</h1>
            <h2 class=" text-white text-2xl font-semibold py-24 pl-5">Marvel Movies</h2>
        </div>
    </div>
    
   

  

   

</div>
<div class="pr-12"> 
<div class="buttons">
  <button class="bg-purple-700 px-5 py-5 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
  </button>
  </div>
  <div class="text-4xl text-white py-10 pr-16">
    <b>Create and share playlists</b>
    </div>
    <div>
      <p class="text-blue-400 py-4 w-9/12">Minnow is built around community, and we want you to help us grow it.Browse playlists built by friends,critics and brands you trust for recommendations</p>
  </div>
  <div class="pr-20">
      <div class="border-b-2 border-blue-900 pb-2 pt-10">
          <button class="bg-cyan-500 px-2 py-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="10"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></button><b class="text-white pl-4">Build playlists to easily find your favourite titles</b></div>
      <div class=" border-b-2 border-blue-900 pb-2 pt-2"><button class="bg-cyan-500 px-2 py-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="10"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></button><b  class="text-white pl-4">Get notified when new titles are available</b></div>
      <div class="pt-2"><button class="bg-cyan-500 px-2 py-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="10"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></button><b class="text-white pl-4">Share playlists with friends</b></div>
  </div>
    <div>
      <p class="text-blue-400 py-4 w-9/12 font-thin text-xs pt-10">Minnow aggregates all major streaming service content from publically available sources in the US, Canada, UK, Ireland, India, Brazil, Mexico and Italy</p>
    </div></div>
</div>
<div className='pt-80'>

</div>
<div class="flex justify-around ">
  <div class="pb-44 pl-10">
      <div class="buttons">
          <button class="bg-red-500 px-5 py-5 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L486.6 441.4 509.3 464 464 509.3l-22.6-22.6L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg></button>
      </div>
      <div class="text-5xl text-white py-10">
      <b>Universal search engine</b>
      </div>
      <div>
          <p class="text-blue-400 py-4 w-9/12">Easy way to find out where your favourite movies and shows are streaming currently or if you need to rent or buy it</p>
      </div>
      <div class="pr-96">
          <div class="border-b-2 border-blue-900 pb-2 pt-10">
            <button class="bg-cyan-500 px-2 py-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="10"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></button><b class="text-white pl-4">Search titles across all streaming platforms</b></div>
          <div class=" border-b-2 border-blue-900 pb-2 pt-2"><button class="bg-cyan-500 px-2 py-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="10"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></button><b  class="text-white pl-4">Follow friends, directors and actor you love</b></div>
          <div class="pt-2"><button class="bg-cyan-500 px-2 py-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="10"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></button><b class="text-white pl-4">Browse a streaming service before you subscribe</b></div>
      </div>
        <div>
          <p class="text-blue-400 py-4 w-9/12 font-thin text-xs pt-10">Minnow aggregates all major streaming service content from publically available sources in the US, Canada, UK, Ireland, India, Brazil, Mexico and Italy</p>
        </div></div>
        <div>
         <div class="flex w-96 h-10 rounded bg-slate-800 border-2 border-cyan-400">
           <input type="search" name="search" id="search" placeholder="Search" class="w-full border-none bg-transparent px-4 py-1 text-white "/>
           <button class="m-2 rounded bg-slate-800 px-4 "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" ><path fill="#26C6DA" d="M416 208c0 45.9-14.9 88.3-40 122.7L486.6 441.4 509.3 464 464 509.3l-22.6-22.6L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg></button>
         </div>
        </div>
      </div>


      {/* footer */}

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



  </main>
</body>
  )
}

export default Shuva