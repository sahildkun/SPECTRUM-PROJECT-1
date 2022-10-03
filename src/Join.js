import React,{useState} from 'react'
import {questions}  from "./api";
import { Link } from 'react-router-dom'
import "./accordion.css";
import "./App.css"
import Myaccordion from './Myaccordion';
import logo from './images/Minnow.png'
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
function Join() {
  const [data, setData] = useState(questions);



  return (
    <div className=' ' id=''>
 <div className='' id='grad2'>
        <div className='text-center text-[#92b0d3] pt-28	text-lg'>
          Discover Minnow
        </div>
        <div className='text-center text-white font-sans font-medium text-7xl antialiased mt-10 mb-10'>
         <p>Are you ready to make</p>
         <p>life easier?</p>
        </div>
        <div className='text-center text-[#92b6e2] text-lg'>
        <p>Meet Minnow, the free app that combines all the most popular streaming services for easy search</p>
         <p>and discovery anywhere you watch movies and shows</p> 
        </div>
        <div className='flex flex-auto justify-center mt-14 '>
        
        <button  className='mx-4 bg-[#2fddc6] px-7 py-5 space-x-3 rounded-md text-white hover:bg-[#58d7f7]'>Join Minnow</button>
        <button className='bg-[#4a4f9b] px-7 py-5 space-x-3 rounded-md text-white hover:bg-[#916ef0]'>Get the app</button>
        </div>
         <div className='text-center  text-[#8294aa] mt-14'>
        <p className='text-md'>Minnow is completely free to use! Download wherever you watch your movies</p>
          <p className='text-md'>and tv shows(all mobile, TV and tablet devices)</p>
          </div>
          
          <div className='mt-36 w-lg p-auto'>
          
          </div>
          {/* accordion */}
          <div className='text-white'>
    
            <section className='bg-[#0c143b] w-lg p-14 space-y-10 '>
              {/* <h1 className='text-white text-center'>accordion</h1> */}
            {
                    data.map((curElem) => {
                    const {id} = curElem;
                    return <Myaccordion key={id}{...curElem} /> 
                    })

            }

</section>
{/* FOOTER */}
        </div>

        <div className='pt-12 bg-[#091138] pb-20'>

          <div  className='flex flex-row  bg-[#091138]  p-20  pb-10'>
          <Link to="/">
            <img src={logo} className='lg:h-16 w-40'/>
          </Link>
            <div className='flex flex-auto justify-end '>
          
            <button className='bg-[#6932c2] text-white font-sans p-4 px-9 tracking-wide  rounded-md text-center hover:bg-[#a757bb]'>Discover    Minnow  Insights</button>
            </div>
          </div>
          <div className='text-[#546e8e] p-20 pt-5 text-md'>
           <p className='w-[30rem]'>
           One-click streaming of the most popular movies and series across Netflix, Prime Video, HBO Max, Disney+, Peacock, and others all in one place.  
           </p>
          </div>
          {/* copyright and refs */}
          <div className='text-[#546e8e] px-20 mt-20 pb-0 flex flex-auto'>
           <p className='flex flex-row'>
           © 2022.All rights reserved to <p className='text-white ml-1'>MINNOW TV</p>.
           </p>
           <div className='flex flex-auto justify-end space-x-14'>
           <p>
            Terms and Conditions
           </p>
           <p>
            Privacy policy
           </p>
           <div className='space-x-3'>
           <button className='bg-[#151f4e]  rounded-3xl p-3'>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="25"><path fill='#ffffff' d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
           </button>
          
         
           <button className='bg-[#151f4e]  rounded-3xl p-3
           ' >
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="25"><path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>

           </button>
           <button className='bg-[#151f4e]  rounded-3xl p-3 
           '>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="25"><path  fill="#ffffff"d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
           </button>
           </div>
           </div>
           

          </div>
        </div>





            
          </div>
        
    </div>
  )
}

export default Join