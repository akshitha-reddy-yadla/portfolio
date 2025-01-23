import React, { useState } from 'react'
import { useSprings, useSpring, animated } from '@react-spring/web'
import './Hero.css';
import '../../core/styles.css';

const AnimFeTurbulence = animated('feTurbulence')
const AnimFeDisplacementMap = animated('feDisplacementMap')


export const Hero = () => {
    const [open, toggle] = useState(false)
    const [{ freq, factor, scale, opacity }] = useSpring(
        () => ({
            reverse: open,
            from: { factor: 10, opacity: 0, scale: 0.9, freq: '0.0175, 0.0' },
            to: { factor: 150, opacity: 1, scale: 1, freq: '0.0, 0.0' },
            config: { duration: 3000 },
        }),
        [open]
    )

    return (
        <div className="full__page bg-secondary">
            <div className="hero-content">
                <h1>Lorem ipsum</h1>
                <h2>Lorem <span className="name">Lorem ipsum dolor</span></h2>
                <br/>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facere optio dolor quod maxime quo ullam sunt. Commodi dolore voluptatibus rerum vel totam expedita quam sit, voluptas laborum aspernatur quod.</h6>
            </div>
        </div>
    )
}



const WaterWaveText = () => {
    const text = 'Wave Text Animation';

    // Split the text into individual characters
    const letters = text.split('');

    // Create an array of springs for each character
    const springs = useSprings(
        letters.length, // One spring per letter
        letters.map((_, index) => ({
            to: { transform: `translateX(${Math.sin(index * 0.5) * 10}px)` }, // Horizontal wave effect
            from: { transform: `translateX(0px)` },
            config: { mass: 1, tension: 200, friction: 10 },
            reset: true,
            reverse: true,
        }))
    );

    return (
        <div className="text-center">
            <h1
                style={{
                    fontSize: '4rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {springs.map((props, index) => (
                    <animated.span
                        key={index}
                        style={{
                            ...props,
                            display: 'inline-block',
                            margin: '0 2px', // To avoid overlapping
                        }}
                    >
                        {letters[index]}
                    </animated.span>
                ))}
            </h1>
        </div>
    );
};

export default WaterWaveText;
