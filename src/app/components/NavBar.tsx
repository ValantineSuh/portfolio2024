'use client';
import React, { useState }  from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function NavBar() {

    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'Portfolio'
        },
        {
            id: 4,
            link: 'Expirience'
        },
        {
            id: 5,
            link: 'Contact'
        },
    ]
  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4'>
    <div>
        <h1 className='font-signature text-5xl ml-2'>
            ESUM
        </h1>
    </div>

    <ul className='hidden md:flex'>
        {
            links.map(({ id, link })=>(
                <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 
                hover:scale-105 duration-200'>{link}</li>   
            ))}
        </ul>

        {/** mobile view section */}
        <div onClick={()=> setNav (!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
         {nav ?  <FaTimes size={30} /> : <FaBars size={30} />}  
        </div>

        {/** Transition between mobile and desktop view icon */}
             {nav &&   <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen'>
        {
            links.map(({ id, link })=>(
                <li key={id} className=' cursor-pointer capitalize font-medium text-gray-500 py-6 text-4xl'>
                    {link}
                </li>
                 ))}
        </ul> }
      

    </div>
  )
}

export default NavBar