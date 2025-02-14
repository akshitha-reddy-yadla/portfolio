import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './App.scss'
import './core/styles.css'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Projects from './components/projects/Projects'
import Experience from './components/experience/Experience'
import Navbar from './components/nav/NavBar'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

import sparkle from './assets/sparkle.svg';
import loki from './assets/loki.svg';

const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      staggerChildren: 0.2,
      delay: 1,
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1]
    }
  }
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.25,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};



export const InitialTransition = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="absolute z-50 w-full bg-brown"
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }
      />
      <motion.img
        initial="initial"
        animate="animate"
        variants={blackBox}
        className="absolute z-50 mb-20 flex loki"
        src={loki} />
      <motion.svg
        initial="initial"
        animate="animate"
        variants={textContainer}
        className="absolute z-50 flex">
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
          className="text-amber-300"
        >
          <rect className="w-full h-full fill-current" />
          <motion.rect
            variants={text}
            className="w-full h-full text-stone-400 fill-current" />
        </pattern>
        <text
          className="text-4xl font-bold"
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "url(#pattern)" }}
        >
          Loading
        </text>
      </motion.svg>
    </div >
  );
};


export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showImage, setShowImage] = useState(false);

  const handleNavigation = (page) => {
    setCurrentPage(page);
  }

  document.body.addEventListener('click', (e) => {
    console.log('Click!');
    setShowImage(false);
    setCursorPosition({ x: e.clientX, y: e.clientY });

    setShowImage(true);

    // Hide the image after 3 seconds
    setTimeout(() => {
      setShowImage(false);
    }, 3000); // 3000ms = 3 seconds
  });


  return (
    <>
      <InitialTransition />
      {/* <Navbar /> */}
      <BrowserRouter>
        <Navbar />
        <AnimatePresence exitBeforeEnter />
        {showImage && (<img src={sparkle} style={{
          width: '30px',
          height: '30px',
          position: 'absolute',
          top: cursorPosition.y - 25, // Adjust to center the image
          left: cursorPosition.x - 25, // Adjust to center the image
          pointerEvents: 'none', // Prevent the image from interfering with cursor movement
        }} />)}
        <motion.section exit={{ opacity: 0 }}>
          <Routes >
            <Route path="/" element={<Hero />} />
            <Route path="/services" element={<Services />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </motion.section>
      </BrowserRouter >
    </>
  )
}
