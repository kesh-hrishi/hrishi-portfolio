import React from 'react'
import clipassword from '../imagesfolder/clipassword.jpg'
import webpassword from '../imagesfolder/webpassword.jpg'
import movieserver from '../imagesfolder/movieserver.jpg'
import adskip from '../imagesfolder/adskip.jpg'

const Projects = () => {

    

  return (
    <div name="projects" className='bg-gradient-to-b from-red-900 via-black to-black w-full text-white md:h-screen'>
        <div className='max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                <p className='py-6'>These are are some of the recent projects i've worked on</p>
            </div>

            
            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-20  px-6 sm:px-0'>
            
                
                    <div  className='shadow-md shadow-white rounded-lg'>
                    <img src={clipassword} onClick={(e) => {e.preventDefault();window.open("https://github.com/kesh-hrishi/PasswordManager","_blank")}} alt=""  className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        
                        <button onClick={(e) => {e.preventDefault();window.open("https://github.com/kesh-hrishi/PasswordManager","_blank")}} className='w-1/2 px-6 py-3 mr-4 duration-200 hover:scale-105'>Cli PasswordManager</button>
                    </div>
                </div>
                    <div  className='shadow-md shadow-white rounded-lg'>
                    <img onClick={(e) => {e.preventDefault();window.open("https://github.com/kesh-hrishi/extension-passwordmanager","_blank")}} src={webpassword} alt=""  className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        
                        <button onClick={(e) => {e.preventDefault();window.open("https://github.com/kesh-hrishi/extension-passwordmanager","_blank")}} className='w-1/2 px-6 py-3 mr-4 duration-200 hover:scale-105'>PasswordManager Extension</button>
                    </div>
                </div>
                    <div  className='shadow-md shadow-white rounded-lg'>
                    <img onClick={(e) => {e.preventDefault();window.open("https://github.com/kesh-hrishi/Home-movie-server","_blank")}} src={movieserver} alt=""  className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        
                        <button onClick={(e) => {e.preventDefault();window.open("https://github.com/kesh-hrishi/Home-movie-server","_blank")}} className='w-1/2 px-6 py-3 mr-4 duration-200 hover:scale-105'>Home Movie Server</button>
                    </div>
                </div>
                    <div  className='shadow-md shadow-white rounded-lg'>
                    <img onClick={(e) => {e.preventDefault();window.open("https://github.com/kesh-hrishi/adskip","_blank")}} src={adskip} alt=""  className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        
                        <button onClick={(e) => {e.preventDefault();window.open("https://github.com/kesh-hrishi/adskip","_blank")}} className='w-1/2 px-6 py-3 mr-4 duration-200 hover:scale-105'>Youtube Adskip</button>
                    </div>
                </div>
                
            






            
            </div>
        </div>
    </div>


            


  )
}

export default Projects