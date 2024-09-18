import React from 'react'
import photo from '../assets/prof-photo-blue.png'
import LukeHancockCV from '../assets/Luke_Hancock - CV.pdf'

const openCV = () => {
  window.open(LukeHancockCV, '_blank')
}

export default function Hero() {
  return (
    <div className='flex px-6 min-h-[calc(100vh-56px)] md:min-h-screen container mx-auto max-w-screen-xl pb-5'>
    
    <div className='flex flex-col-reverse md:flex-row items-center md:justify-center justify-evenly'>
      
        <div className='md:w-1/2 md:text-2xl'>
          <div className='whitespace-pre-line'>Welcome!<br /><br />

          I’m <span className='text-2xl'>Luke</span>, an aspiring software developer. <br /><br />

          With a strong background in mathematics and learning, my journey into coding rapidly grows by applying logical thinking and problem solving whilst analysing every detail as I progress.<br /><br />

          I look forward to working with you on future projects.
          </div>
          <div className='flex w-full justify-around pt-6 px-10 md:justify-start md:gap-x-20 md:px-0'>
            <button className=" text-white bg-blue-500 hover:bg-blue-600  outline-none outline-offset-0 py-2 px-4 md:text-3xl rounded-lg shadow-lg " onClick={openCV}>View CV</button>
          </div>
        </div>
        <div className=' md:w-1/2 md:flex md:justify-end'>
          <img src={photo} className='size-60 md:size-96 '></img>
        </div>
      </div>
      
    </div>
    
  )
}
