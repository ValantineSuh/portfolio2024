import React from 'react'
import Image from 'next/image'
import Dart from '../assets/LaguageAssets/Dart.jpg';
import Flutter from  '../assets/LaguageAssets/flutterLogo.png';
import Firebase from  '../assets/LaguageAssets/Firebase.png';
import react from  '../assets/LaguageAssets/ReactLogo.png';
import reactNative from  '../assets/LaguageAssets/ReactNative.png';
import typeScript from  '../assets/LaguageAssets/TypescriptLogo.png';
import graphQL from  '../assets/LaguageAssets/GraphQL.png';
import git from  '../assets/LaguageAssets/git.jpg';

const Experience = () => {

    const pLanguages = [
        {
            id: 1,
            image: Dart,
            title: 'Dart',
            style: 'shadow-gray-200'
        },
        {
            id: 2,
            image: Flutter,
            title: 'Flutter',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            image: Firebase,
            title: 'Firebase',
            style: 'shadow-orange-500'
        },
        {
            id: 4,
            image: react,
            title: 'React JS',
            style: 'shadow-purple-300'
        },
        {
            id: 5,
            image: reactNative,
            title: 'React Native',
            style: 'shadow-purple-500'
        },
        {
            id: 6,
            image: typeScript,
            title: 'TypeScript',
            style: 'shadow-orange-500'
        },
        {
            id: 7,
            image: graphQL,
            title: 'GraphQL',
            style: 'shadow-pink-400'
        },
       
        {
            id: 8,
            image: git,
            title: 'Git',
            style: 'shadow-red-400'
        },
       
     
    ]
  return (
    <div className='bg-gradient-to-b from-gray-800 to-black w-full md:h-screen flex justify-center items-center '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'> Experience</p>
                <p className='py-6'>Programming langauges and framewords I've worked with</p>
            </div>

            <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:p-0'>

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