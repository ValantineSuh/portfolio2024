import React from 'react'
import sameImage from '../assets/ME.jpg'
import Image from 'next/image'

const Experience = () => {

    const pLanguages = [
        {
            id: 1,
            image: sameImage,
            title: 'dommy',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            image: sameImage,
            title: 'dommy',
            style: 'shadow-orange-500'
        },
        {
            id: 3,
            image: sameImage,
            title: 'dommy',
            style: 'shadow-orange-500'
        },
        {
            id: 4,
            image: sameImage,
            title: 'dommy',
            style: 'shadow-orange-500'
        },
        {
            id: 5,
            image: sameImage,
            title: 'dommy',
            style: 'shadow-orange-500'
        },
        {
            id: 6,
            image: sameImage,
            title: 'dommy',
            style: 'shadow-orange-500'
        },
       
     
    ]
  return (
    <div className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg  ms-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'> Experience</p>
                <p className='py-6'>Programming langauges and framewords I've worked with</p>
            </div>

            <div className=' grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:p-0'>

                {pLanguages.map(({id, title, image, style}) =>(
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <Image src={image} alt='dsfed'className='w-20 mx-auto' />
                        <p className='mt-4'>
                            {title}
                        </p>
                        </div>
                ))}
             
            </div>
        </div>
    </div>
  )
}

export default Experience