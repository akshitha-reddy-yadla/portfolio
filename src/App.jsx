import React from 'react'
import './App.scss'
import './core/styles.css'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Nav from './components/nav/nav'

export default function App() {
  return (
    <div className='app'>
      <div className='flex__center'>
        <Nav />
      </div>
      <Hero />
    </div>
  )
}
