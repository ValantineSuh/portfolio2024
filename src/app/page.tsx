import Image from 'next/image'
import NavBar from './components/NavBar'
import React  from 'react'
import HomePage from './components/HomePage'
import Socials from './components/Socials'
import About from './components/About'


export default function Home() {
  return (
<body className='font-signature text-4xl font-bold' >

  <NavBar />
  <HomePage />
  <Socials />
  <About />
</body>

    )
}
