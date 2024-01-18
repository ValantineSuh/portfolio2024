import NavBar from './components/NavBar'
import React  from 'react'
import HomePage from './components/HomePage'
import Socials from './components/Socials'
import About from './components/About'
import Portfolio from './components/Portfolio'


export default function Home() {
  return (
<div >

  <NavBar />
  <HomePage />
  <About />
  <Portfolio />

  <Socials />
</div>

    )
}
