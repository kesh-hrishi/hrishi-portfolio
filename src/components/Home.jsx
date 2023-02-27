import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg bg-gradient-to-b from-black via-black to-red-900 text-white'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4'>
        <div>
          <h2 className='text-4xl sm:text-7xl font-bold'>Hrishikesh Ajith</h2>
          <h2 className='text-4xl text-gray-300'>I'm a Full Stack Developer</h2>
          <div>
            
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-l via-red-900 cursor-pointer'>
              Resume
              <span className='group-hover:rotate-90 duration-300'>
              <MdOutlineKeyboardArrowRight size={20}/>
              </span>
            </button>
          </div>

        </div>



      </div>
    </div>

  );
}

export default Home