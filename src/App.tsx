import * as React from 'react'
import { useScroll, animated, useSpring } from '@react-spring/web'

import  './App.scss';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import DefaultComponent from './components/default/DefaultComponent';

const X_LINES = 30

const PAGE_COUNT = 7

const INITIAL_WIDTH = 10

export default function App() {
  const containerRef = React.useRef<HTMLDivElement>(null!)
  const barContainerRef = React.useRef<HTMLDivElement>(null!)

  const [textStyles, textApi] = useSpring(() => ({
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
            <span className='text-xl'>
              <animated.span style={textStyles}>Let's talk</animated.span>
            </span>
            <span className='text-sm'>
              <animated.span style={textStyles}>Please drop your details below, and i will get back to you </animated.span>
            </span>
          </h1>
        </animated.div>
      </div>
      {/* <div  style={{ padding: '20px', backgroundColor: '#f0f0f0' }} > */}
      {new Array(PAGE_COUNT).fill(null).map((_, index) => {
        if (index === 0) {
          // return <div>wer</div>
          return <Hero key={index} />
        } else if (index === 1) {
          return <div className='full__page'><Services key={index} /></div>;
        } else if (index === 2) {
          return <div className='full__page'><Experience key={index} /></div>;
        } else if (index === 3) {
          return <div className='full__page'><Projects key={index} /></div>;
        } else if (index === 4) {
          return <div className='full__page'><Skills key={index} /></div>;
        } else if (index === 5) {
          return <div className='full__page'><Contact key={index} /></div>;
        } else {
          return <div className='full__page'><DefaultComponent key={index} /></div>;
        }
        })}

      {/* </div> */}
    </div>
  )
}
