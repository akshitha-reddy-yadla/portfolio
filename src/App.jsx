import React from 'react'
import './App.scss'
import './core/styles.css'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'

export default function App() {
  return (
    <div className='app'>
      <Hero />
      <Services />
    </div>
  )
}
