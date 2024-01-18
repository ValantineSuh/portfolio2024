import React from 'react';
import myImages from '../assets/sh2.jpg';
import Image from 'next/image';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const HomePage = () => {
  return (
    <div className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
        
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 text-white md:flex-row'>
            <div>
                <h2>
                Lorem ipsum dolor sit  Aperiam voluptatibus autem maxime?
                </h2>
                <p>
 natus  deleniti. Debitis nesciunt rerum non aperiam magni, iusto dolorum!
                </p>
                <div>
                    <button>
                        Portfolio
                        <span> 
                            <MdOutlineKeyboardArrowRight />
                        </span>
                    </button>
                </div>
                <Image src={myImages} alt='meh' className='rounded-2xl mx-auto w-2/3 md:w-full' width={400} height={600}/>
            </div>
        </div>
    </div>
  )
}

export default HomePage