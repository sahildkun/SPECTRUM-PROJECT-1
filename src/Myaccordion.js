import React,{useState} from 'react'

function Myaccordion({question, answer}) {
    const [show, setShow] = useState(false)
  return (
    
    <div>
        
       <div className='flex flex-auto '>
        <h3>{question}</h3>
        <p className=' flex flex-auto justify-end' onClick={() => setShow(!show)}>{ show?  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
</svg>
:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
</svg>}

</p>
       </div>
       <div>
        
        {show && <p>{answer}</p>}</div>
        </div>
   

  )
}

export default Myaccordion