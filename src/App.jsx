import * as React from 'react'
import { useScroll, animated, useSpring } from '@react-spring/web'

import './App.scss';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import DefaultComponent from './components/default/DefaultComponent';
import { FormEvent, useState } from 'react';
import emailjs from 'emailjs-com';


const X_LINES = 30

const PAGE_COUNT = 8

const INITIAL_WIDTH = 10

export default function App() {
  const containerRef = React.useRef()
  const barContainerRef = React.useRef()

  const [textStyles, textApi] = useSpring(() => ({
    pointerEvents: 'auto', // Ensure pointer events are enabled
    y: '100%',
  }))

  const { scrollYProgress } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      if (scrollYProgress > 0.7) {
        textApi.start({ y: '0' })
      } else {
        textApi.start({ y: '100%' })
      }
    },
    default: {
      immediate: true,
    },
  })

  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');

  function validateForm(e) {
    e.preventDefault()
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
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_PUBLIC_KEY).then(() => {
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
    <div ref={containerRef} className="body">
      <div className="animated__layers">
        <animated.div ref={barContainerRef} className="bar__container">
          {Array.from({ length: X_LINES }).map((_, i) => (
            <animated.div
              key={i}
              className="bar"
              style={{
                width: scrollYProgress.to(scrollP => {
                  const percentilePosition = (i + 1) / X_LINES

                  return INITIAL_WIDTH / 4 + 40 * Math.cos(((percentilePosition - scrollP) * Math.PI) / 1.5) ** 32
                }),
              }}
            />
          ))}
        </animated.div>
        <animated.div className="bar__container__inverted">
          {Array.from({ length: X_LINES }).map((_, i) => (
            <animated.div
              key={i + 1}
              className="bar"
              style={{
                width: scrollYProgress.to(scrollP => {
                  const percentilePosition = 1 - (i + 1) / X_LINES

                  return INITIAL_WIDTH / 4 + 40 * Math.cos(((percentilePosition - scrollP) * Math.PI) / 1.5) ** 32
                }),
              }}
            />
          ))}
        </animated.div>
        <animated.div
          className="dot"
          style={{
            clipPath: scrollYProgress.to(val => `circle(${val * 100}%)`),
          }}>
          <h1 className="title">
            <span className='text-xxl'>
              <animated.span style={textStyles}>Aha!</animated.span>
            </span>
            <span className='text-base'>
              <animated.span style={textStyles}>Let's talk</animated.span>
            </span>
            <span className='text-base'>
              <animated.span style={textStyles}>Please drop your details below, and I will get back to you </animated.span>
            </span>
            <span className='text-base'>
              <animated.span style={textStyles}>Or drop a mail at akshithayadla.reddy@gmail.com</animated.span>
            </span>
            <span className='text-base'>
              <animated.form className="form" onSubmit={validateForm} style={textStyles}>
                <p>
                  <span className="success" id="sent">&nbsp;</span>
                  <br />
                  <span className="error" id="error">&nbsp;</span>
                </p>
                <animated.input
                  style={textStyles}
                  type="text"
                  name="sender_name"
                  value={senderName}
                  onChange={(e) => { setSenderName(e.target.value) }}
                  required
                  placeholder="your name"
                  className="form__input" />
                <animated.input
                  style={textStyles}
                  type="email"
                  name="sender_email"
                  value={senderEmail}
                  onChange={(e) => { setSenderEmail(e.target.value) }}
                  required
                  placeholder="your_email@gmail.com"
                  className="form__input" />
                <animated.textarea
                  style={textStyles}
                  name="message"
                  value={message}
                  placeholder="your message"
                  onChange={(e) => { setMessage(e.target.value) }}
                  required
                  className="form__input" />
                <animated.button
                  style={textStyles}
                  type="submit"
                  className="form__button">Send message</animated.button>
              </animated.form>
            </span>
          </h1>
        </animated.div>
      </div>
      {new Array(PAGE_COUNT).fill(null).map((_, index) => {
        if (index === 0) {
          return <div className='full__page'>
            <div className='section__container' style={{
              position: 'relative',
              zIndex: 1,
            }}>
              <Hero key={index} />
            </div>
            <div style={{ borderBottom: '1px dotted black', margin: '20px 0' }}></div>
          </div>;
        } else if (index === 1) {
          return <div className='md__full_page' style={{
          }}>
            <div className='section__container' style={{
              position: 'relative',
              zIndex: 1,
            }}>
              <Services key={index} />
            </div>
            <div style={{ borderBottom: '1px dotted black', margin: '20px 0' }}></div>
          </div>;
        } else if (index === 2) {
          return <div className=''>
            <div className='section__container' style={{
              position: 'relative',
              zIndex: 1,
            }}>
              <Experience key={index} />
            </div>
            <div style={{ borderBottom: '1px dotted black', margin: '20px 0' }}></div>
          </div>;
        } else if (index === 3) {
          return <div className='full__page'>
            <div className='section__container' style={{
              position: 'relative',
              zIndex: 1,
            }}>
              <Projects key={index} />
            </div>
            <div style={{ borderBottom: '1px dotted black', margin: '20px 0' }}></div>
          </div>;
        } else if (index === 4) {
          return <div className=''>
            <div className='section__container' style={{
              position: 'relative',
              zIndex: 1,
            }}>
              <Skills key={index} />
            </div>
            <div style={{ borderBottom: '1px dotted black', margin: '20px 0' }}></div>
          </div>;
        } else if (index === 5) {
          return <div className='full__page'><Contact key={index} /></div>;
        } else {
          return <div className='full__page'><DefaultComponent key={index} /></div>;
        }
      })}

    </div>
  )
}
