import React,{useState} from 'react'

function Myaccordion({question, answer}) {
    const [show, setShow] = useState(false)
  return (
    
    <div className='border-b-4 border-[#151d42] pb-16'>
        
       <div className='flex flex-auto '>
        <div className=''>
        <h3 className=''>{question}</h3>
        </div>
       
        <p className=' flex flex-auto justify-end' onClick={() => setShow(!show)}>{ show?  
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15"><path fill='#6a71a1' d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15"><path fill="#1aa09a" d="M256 80V48H192V80 224H48 16v64H48 192V432v32h64V432 288H400h32V224H400 256V80z"/></svg>

}

</p>
       </div>
       <div>
        
        {show && <p className='text-[#546e8e] p-4 mt-5'>{answer}</p>}</div>
        </div>
   

  )
}

export default Myaccordion