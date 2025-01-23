import React, { useRef, useState, useEffect, useCallback, createContext, useContext, RefObject } from 'react'
import { useSprings, animated } from '@react-spring/web'
import { createUseGesture, dragAction, hoverAction } from '@use-gesture/react'
import useMeasure from 'react-use-measure'
import { useHotkeys } from 'react-hotkeys-hook'
import { useFocusWithin } from '../../util/useFocusWithin'
import clamp from 'lodash.clamp'
import classNames from 'classnames'
import { data as items } from './data'


import styles from './projects.module.css';

const useGesture = createUseGesture([dragAction, hoverAction])

type CarouselContextType = {
  NavigationRef: any
  PaginationRef: any
  totalPages: number
  currentPage: number
  setCurrentPage: (index: number) => void
}

const CarouselContext = createContext<CarouselContextType>({} as CarouselContextType)

type CarouselProps = {
  align?: 'left' | 'center'
  navigation?: boolean
  pagination?: boolean
  label?: string
}

type NavigationProps = {
  label?: string
}

type PaginationProps = {
  label?: string
}

// Vector2 type definition
type Vector2 = { x: number; y: number };

type RunSpringsProps = {
  active: boolean
  movement: Vector2
  direction: Vector2
  distance: Vector2
  cancel: () => void
}

function Navigation({ label }: NavigationProps) {
  const context = useContext(CarouselContext)
  return (
    <div className={styles.navigation}>
      <button
        className={styles.prev}
        onClick={() => context.NavigationRef(1)}
        aira-label={label ? `${label}: go to previous slide` : 'Go to previous slide'}
        title={label ? `${label}: go to previous slide` : 'Go to previous slide'}
        disabled={context.currentPage <= 0}>
        <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="64" cy="64" r="64" fill="white" />
          <path
            d="M30 68.25L81.6371 68.25L57.8367 92.0504L64 98L98 64L64 30L58.0506 35.9498L81.6371 59.75L30 59.75L30 68.25Z"
            fill="black"
          />
        </svg>
      </button>
      <button
        className={styles.next}
        onClick={() => context.NavigationRef(-1)}
        aira-label={label ? `${label}: go to next slide` : 'Go to next slide'}
        title={label ? `${label}: go to next slide` : 'Go to next slide'}
        disabled={context.currentPage >= context.totalPages - 1}>
        <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="64" cy="64" r="64" fill="white" />
          <path
            d="M30 68.25L81.6371 68.25L57.8367 92.0504L64 98L98 64L64 30L58.0506 35.9498L81.6371 59.75L30 59.75L30 68.25Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  )
}

function Pagination({ label }: PaginationProps) {
  const context = useContext(CarouselContext)
  return (
    <div className={styles.pagination}>
      <ul>
        {items.map((item: any, index: number) => (
          <li key={index}>
            <button
              className={classNames([context.currentPage === index && styles.active])}
              onClick={() => context.PaginationRef(index)}
              aira-label={label ? `${label}: go to slide ${item.id}` : `Go to slide ${item.id}`}
              title={label ? `${label}: go to slide ${item.id}` : `Go to slide ${item.id}`}>
              <span></span>
              {/* {item.id} */}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Carousel({ align = 'center', navigation = true, pagination = true, label }: CarouselProps) {
  const context = useContext(CarouselContext)
  const page = useRef(0)
  const [hotkeysEnabled, setHotkeysEnabled] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [altText, setAltText] = useState('')
  const [carouselRef, { width }] = useMeasure()
  const { ref: wrapperRef, focused } = useFocusWithin()

  // Sets the initial position and scale of the items
  const [springs, api] = useSprings(
    items.length,
    index => ({
      x: (index - context.currentPage) * width,
      scale: index - context.currentPage === 0 ? 1 : 0.75,
      display: 'block',
      immediate: true,
    }),
    [width]
  )

  
  const runSprings = ({
    active,
    movement,
    direction,
    distance,
    cancel,
  }: any) => {
    // Destructure movement, direction, and distance from the state object
    const { x: movementX, y: movementY } = movement;
    const { x: directionX, y: directionY } = direction;
    const { x: distanceX, y: distanceY } = distance;
  
    // Handle logic when drag is active and threshold is reached
    if (active && distanceX > width * 0.5) {
      page.current = clamp(context.currentPage + (directionX > 0 ? -1 : 1), 0, items.length - 1);
      context.setCurrentPage(page.current);
      cancel(); // Call cancel to stop the gesture
    }
  
    setAltText(items[page.current].alt); // Update alternative text for the current page
  
    // Start the spring animation
    api.start((index) => {
      const x = (index - page.current) * width + (active ? movementX : 0);
      const scale = page.current === index ? (active ? 1 - (distanceX / width) * 0.5 : 1) : 0.75;
      return {
        x,
        scale,
        display: 'block',
      };
    });
  };
  
  
  
  context.NavigationRef = (direction: number) => {
    page.current = clamp(context.currentPage + (direction > 0 ? -1 : 1), 0, items.length - 1)
    context.setCurrentPage(page.current)

    setAltText(items[page.current].alt)

    api.start(index => {
      //  Hide offscreen pages for better perfomance
      // if (index < currentPage - 2 || index > currentPage + 2) return { display: 'none' }
      const x = (index - page.current) * width
      const scale = index === page.current ? 1 : 0.75
      return {
        x,
        scale,
        display: 'block',
      }
    })
  }

  context.PaginationRef = (index: number) => {
    page.current = index
    context.setCurrentPage(page.current)

    setAltText(items[page.current].alt)

    api.start(index => {
      const x = (index - page.current) * width
      const scale = index === page.current ? 1 : 0.75
      return {
        x,
        scale,
        display: 'block',
      }
    })
  }

  useHotkeys('arrowRight', () => context.NavigationRef(-1), { enabled: hotkeysEnabled || focused })
  useHotkeys('arrowLeft', () => context.NavigationRef(1), { enabled: hotkeysEnabled || focused })

  const bind = useGesture({
    onDrag: (state) =>  runSprings(state),
    onDragStart: () => {
      setDragging(true)
    },
    onDragEnd: () => {
      setDragging(false)
    },
    onHover: state => {
      setHotkeysEnabled(state.active)
    },
  })

  return (
    <div className={styles.carouselWrapper} data-align={align} ref={wrapperRef}>
      <div ref={carouselRef} className={styles.carouselRef}>
        {springs.map(({ x, display, scale }, i) => (
          <animated.div
            key={i}
            {...bind()}
            className={classNames([styles.carouselItem, styles[dragging ? 'dragging' : '']])}
            style={{ display, x }}>
            <animated.div style={{ scale }}>
              <div className={styles.carouselContent}>
                <img src={items[i].image} alt={items[i].alt} />
              </div>
            </animated.div>
          </animated.div>
        ))}
      </div>
      <div role="region" aria-live="polite" className={styles['visually-hidden']}>
        {altText}
      </div>
      {pagination && <Pagination label={label} />}
      {navigation && <Navigation label={label} />}
    </div>
  )
}

export default function Projects() {
  const NavigationRef = useRef(null)
  const PaginationRef = useRef(null)
  const [currentPage, setCurrentPage] = useState(0)

  return (
    <div className={styles.app}>
      <CarouselContext.Provider
        value={{
          NavigationRef: NavigationRef,
          PaginationRef: PaginationRef,
          totalPages: items.length,
          currentPage: currentPage,
          setCurrentPage: setCurrentPage,
        }}>
        <Carousel align="center" label="Primary carousel" />
      </CarouselContext.Provider>
    </div>
  )
}
