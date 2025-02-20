import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './App.scss'
import './core/styles.css'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Projects from './components/projects/Projects'
import Navbar from './components/nav/NavBar'
import { HashRouter, Route, Routes } from 'react-router-dom'
import emailjs from 'emailjs-com';

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
        className="absolute z-50 mb-20 flex loki-loading"
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
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showImage, setShowImage] = useState(false);
  const [fabText, setFabText] = useState("Contact us!!");

  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleContactPage = () => {
    setIsContactOpen(!isContactOpen);
  };
  useEffect(() => {

    const interval = setInterval(() => {
      setFabText((prevText) => (prevText === '!!' ? 'Contact Us' : '!!'));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleNavigation = (page) => {
    setCurrentPage(page);
  }

  useEffect(() => {
    const sparkle = (e) => {

      if (showImage) return;

      setShowImage(false);
      setCursorPosition({ x: e.clientX, y: e.clientY });

      setShowImage(true);

      setTimeout(() => {
        setShowImage(false);
      }, 2000);
    }
    document.body.addEventListener('click', sparkle);

    return () => {
      document.body.removeEventListener('click', sparkle);
    };
  }, [showImage])

  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');


  function validateForm(e) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    if (senderName == "" && senderEmail == "" && message == "") {
      alert("All fields must be filled out");
      return false;
    } else {
      sendMail(e);
    }

  }

  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      ).then(() => {
        const div = document.getElementById('sent');
        if (div !== null) {
          div.textContent = 'Message sent successfully :)';
          setSenderName('');
          setSenderEmail('');
          setMessage('');
        }
      })
      .catch(() => {
        const div = document.getElementById('error');
        if (div !== null) {
          div.textContent = 'OOPS! Unknown error occured. Try again later :(';
        }
      });
  };



  return (
    <>
      <InitialTransition />
      <HashRouter>
        <Navbar />
        <AnimatePresence exitBeforeEnter />
        {showImage && (<img src={sparkle} style={{
          width: '30px',
          height: '30px',
          position: 'absolute',
          top: cursorPosition.y - 25,
          left: cursorPosition.x - 25,
          pointerEvents: 'none',
        }} />)}
        <motion.section exit={{ opacity: 0 }}>
          <Routes >
            <Route path="/" element={<Hero />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </motion.section>
        {/* FAB (Floating Action Button) */}
        <button className="fab" onClick={toggleContactPage}>
          <img src={loki} className='loki-icon' />
          <div className="cloud">
            <p className="cloud-text">{fabText}</p>
          </div>
        </button>


        {/* Contact Page Modal */}
        {isContactOpen && (
          <div className="contact-page">
            <div className="contact-content">
              <button className="close-btn" onClick={toggleContactPage}>X</button>
              <div className='text-center'>
                <span>Let's talk</span>
                <br />
                <p className='mx-10 text-sm' >Please drop your details below, and I will get back to you </p>
                <span>Or</span>
                <br />
                <span >drop a mail at akshithayadla.reddy@gmail.com</span>
              </div>
              <form className="form" onSubmit={validateForm} >
                <p>
                  <span className="success text-green-700" id="sent">&nbsp;</span>
                  <br />
                  <span className="error text-red-800" id="error">&nbsp;</span>
                </p>
                <input
                  type="text"
                  name="sender_name"
                  value={senderName}
                  onChange={(e) => { setSenderName(e.target.value) }}
                  required
                  placeholder="your name"
                  className="form__input" />
                <input
                  type="email"
                  name="sender_email"
                  value={senderEmail}
                  onChange={(e) => { setSenderEmail(e.target.value) }}
                  required
                  placeholder="your_email@gmail.com"
                  className="form__input" />
                <textarea
                  name="message"
                  value={message}
                  placeholder="your message"
                  onChange={(e) => { setMessage(e.target.value) }}
                  required
                  className="form__input" />
                <button
                  type="submit"
                  className="form__button">Send message</button>
              </form>
            </div>
          </div>
        )}
      </HashRouter >
    </>
  )
}
