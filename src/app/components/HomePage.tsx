import React from 'react';
import myImages from '../assets/sh2.jpg';
import Image from 'next/image';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const HomePage = () => {
  return (
    <div className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full mx-20'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white' >
                I am a full  Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                I have 5 years of experiece building, designing and maintaining software appllications
                Currently, I work on web and mobile applications using the technologies
                NextJs (React JS), Tailwind css, TypeScript, Flutter, GraphQL, firebase and mongoDB
                </p>
                <div>
                    <button>
                        Portfolio
                        <span> 
                            <MdOutlineKeyboardArrowRight />
                        </span>
                    </button>
                </div>
            </div>
            <Image src={myImages} alt='meh' className='rounded-2xl mx-auto w-2/3 md:w-full' width={200} height={600}/>
        </div>
       
    </div>
  )
}

export default HomePage