import React from 'react'
import Image from 'next/image'
import imageImg from '../assets/sh2.jpg'


const Portfolio = () => {

    const projects =[
        {
            id: 1,
            scr: imageImg
        },
        {
            id: 2,
            scr: imageImg
        },
        {
            id: 3,
            scr: imageImg
        },
        {
            id: 4,
            scr: imageImg
        },
        {
            id: 5,
            scr: imageImg
        },
        {
            id: 6,
            scr: imageImg
        },
        
    ]

  return (
    <div className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '> Portfolio</p>
                <p className='py-6'> Check out some of my projects </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {projects.map(({id, scr}) =>(
                 <div key={id} className=' shadow-md shadow-gray-600 rounded-lg' >

         
                 <Image src={scr} alt = '' width={200} height={200} className='rounded-md duration-200 hover:scale-105' />
                 <div className='items-center flex justify-center'>
                     <button  className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                     <button  className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                 </div>
             </div>
))}   
           
               
            </div>
        </div>
    </div>
  )
}

export default Portfolio