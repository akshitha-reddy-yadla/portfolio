import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Hero from './components/Hero'
import WaterWaveText from './components/Hero'

function App() {

  return (
    <>
      <div className='bg-tertiary w-screen h-screen'>
        <Hero />
        <WaterWaveText />
        <p className='text-primary text-heading'>Organic</p>
        <div className='w-2 h-6' />
        <p className='text-secondary text-heading'>Organic</p>
        <div className='w-2 h-6' />
        <p className='text-tertiary text-heading'>Organic</p>
        <div className='w-2 h-6' />
        <p className='text-quanternary text-heading'>Organic</p>
        <div className='w-2 h-6' />
        <p className='text-fifth text-heading'>Organic</p>
        <div className='w-2 h-6' />
        {/* <p className='text-palm text-heading'>Organic</p> */}
        <p className='text-sixth text-heading'>Organic</p>
      </div>
    </>
  )
}

export default App
