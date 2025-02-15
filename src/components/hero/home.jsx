import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from 'react-icons/ai';
import { FiCodepen } from 'react-icons/fi';
import { IoMdMail } from "react-icons/io";
import gsap from "gsap";
import SplitType from 'split-type';

import { InitialTransition } from '../../App';

import book from '../../assets/hero_icons/books.svg';
import dog from '../../assets/hero_icons/dog.svg';
import dumbell from '../../assets/hero_icons/dumbell.svg';
import food from '../../assets/hero_icons/food.svg';
import glasses from '../../assets/hero_icons/glasses.svg';
import glassess from '../../assets/hero_icons/glassess.svg';
import hair from '../../assets/hero_icons/hair.svg';
import laptop from '../../assets/hero_icons/laptop.svg';
import plant from '../../assets/hero_icons/plant.svg';
import yoga from '../../assets/hero_icons/yoga.svg';

import loki from '../../assets/loki.svg';
import flower from '../../assets/flower.svg';

import './Hero.css'
import { duration } from '@mui/material';

const content = {
    animate: {
        transition: { staggerChildren: 0.1, delayChildren: 2.8 },
    },
};

const title = {
    initial: { y: -20, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};

const products = {
    initial: { y: -20, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};


export default function Hero() {
    const movingTextRef = useRef(null);
    const explosionsRef = useRef([]);
    const [explosionsActive, setExplosionsActive] = useState(false);
    const [isMouseInside, setIsMouseInside] = useState(false);
    const [transformStyle, setTransformStyle] = useState({});

    const svgIcons = [
        book,
        dog,
        dumbell,
        food,
        glasses,
        hair,
        glassess,
        laptop,
        plant,
        yoga
    ]

    const handleMouseEnter = () => {
        setIsMouseInside(true);
    };

    const handleMouseLeave = () => {
        setIsMouseInside(false);
        setTransformStyle({}); // Reset the position when mouse leaves
    };

    const handleMouseMove = (e) => {
        if (!isMouseInside) return;

        const { clientX: mouseX, clientY: mouseY } = e;

        // Get the center position of the text element
        const textRect = e.target.getBoundingClientRect();
        const textCenterX = textRect.left + textRect.width / 2;
        const textCenterY = textRect.top + textRect.height / 2;

        // Calculate the movement factor
        const deltaX = (mouseX - textCenterX) * 0.1;
        const deltaY = (mouseY - textCenterY) * 0.1;

        // Apply the movement to the text
        setTransformStyle({
            transform: `translate(${deltaX}px, ${deltaY}px)`,
        });
    };

    const handleClick = () => {
        const centerX = window.innerWidth / 3;
        const centerY = window.innerHeight / 4;

        setExplosionsActive(true);

        explosionsRef.current.forEach((img) => {
            img.style.opacity = 0;
            img.style.transform = 'scale(0) translate(0, 0)';
        })

        explosionsRef.current.forEach((img, index) => {
            const angle = Math.random() * 2 * Math.PI;
            const distance = 150 + Math.random() * 100;

            const targetX = centerX + Math.cos(angle) * distance;
            const targetY = centerY + Math.sin(angle) * distance;

            setTimeout(() => {
                img.style.transition = 'transform 1s ease, opacity 1s ease';
                img.style.opacity = 1;
                img.style.transform = `translate(${targetX - centerX}px, ${targetY - centerY}px) scale(1) rotate(0deg)`;
            }, 10);

            setTimeout(() => {
                img.style.opacity = 0;
            }, 1000);

            setTimeout(() => {
                setExplosionsActive(false);
            }, 1000);
        });
    }
    return (
        <motion.section className='section' initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            <motion.div
                className='space-y-12 section flex__center flex__col'>
                <div className="hero__content">
                    <h1 className="hero__text">Hi there! I’m...</h1>
                    {/* <h2 variants={title}
                        className="text-6xl font-black text-center"
                        style={transformStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                        onClick={handleClick}
                    >Akshitha</h2> */}
                    <HeroAnimationWithText />
                    {explosionsActive && svgIcons.map((icon, index) => (
                        <span
                            key={index}
                            ref={(el) => (explosionsRef.current[index] = el)}
                            className='explosion'
                            style={{
                                position: 'absolute',
                                opacity: 0,
                            }}>
                            <img src={icon} />
                        </span>

                    ))
                    }
                    <h6 variants={products} className="text-gray-700 body-font hero__description">A full-stack developer who loves building seamless user experiences that go above and beyond. I’m all about solving tricky problems and making things easy and enjoyable for users.</h6>
                </div>
                <div className='social__icons__container'>
                    <a href="mailto:akshithayadla.reddy@gmail.com" alt="codepen" className="social__icons"><IoMdMail color="#533a28" size={24} /></a>
                    <a href="https://www.linkedin.com/in/akshitha-yadla/" alt="linkedin" className="social__icons"><FaLinkedinIn color="#533a28" size={24} /></a>
                    <a href="https://github.com/akshitha-reddy-yadla" alt="github" className="social__icons"><AiFillGithub color="#533a28" size={24} /></a>
                    <a href="https://codepen.io/Akshitha_Reddy" alt="codepen" className="social__icons"><FiCodepen color="#533a28" size={24} /></a>
                </div>
            </motion.div>
        </motion.section>
    )
}

const HeroAnimationWithText = () => {
    const flowerRef = useRef(null); // Reference for the flower SVG
    const textARef = useRef();
    const textKRef = useRef();
    const textHRef = useRef();
    const textSRef = useRef();
    const textIRef = useRef();
    const textTRef = useRef();
    const textH2Ref = useRef();
    const textA2Ref = useRef();
    const lokiRef = useRef();

    const lokiLetter = 'I';

    useEffect(() => {

        gsap.from(lokiRef.current, {
            opacity: 0,
            scale: 0,
            duration: 2,// Duration of the SVG pop-up
            ease: 'power4.out',
            onComplete: () => {
                gsap.to(lokiRef.current, {
                    // y: '40%',
                    text: 'I',
                    // opacity: 0,
                    duration: 0.4,
                    ease: 'power4.in'
                })

                // showRefI();
            }
        });

        const showRefI = () => {
            gsap.to(textIRef.current, {
                opacity: 1,
                scale: 0,
                duration: 1,
                ease: 'power4.out',

            })
        }

        // const timer = setTimeout(() => {
        //     // Hide the SVG
        //     gsap.to(lokiRef.current, {
        //         opacity: 1,
        //         duration: 1,
        //         ease: 'power4.out',
        //     });

        //     // Show and animate the letter
        //     gsap.to(textIRef.current, {
        //         opacity: 1,
        //         scale: 0,
        //         duration: 1,
        //         ease: 'power4.out',
        //     });
        // }, 100); // Delay of 1 minute (60000 ms)

        // return () => clearTimeout(timer); // Clean up timer when the component unmounts


        // gsap.fromTo(
        //     textRef.current, {
        //     x: -30, opacity: 0, position: 'relative'
        // },
        //     {
        //         x: 0, opacity: 1, duration: 0.4, delay: 0.5, ease: 'power4.out'
        //     }
        // )

        gsap.to(textARef.current, {
            rotationX: 360,
            opacity: 1,
            transform: 'scaleX(1)',
            duration: 2,
            delay: 2,
            stagger: 0.1,
            ease: 'power4.out',
        });


        // gsap.to(textRef.current, {
        //     y: '100%',
        //     opacity: 0,
        //     duration: 0.1,
        //     ease: 'power4.inOut',
        //     stagger: 0.45,

        // })


        // gsap.fromTo(
        //     flowerRef.current,
        //     {
        //         opacity: 1,   // Start fully visible
        //         y: 0          // Start at the original position
        //     },
        //     {
        //         opacity: 0,   // Fade out at the end
        //         y: -10,      // Slide upwards by 100px
        //         duration: 1,   // Duration of the animation
        //         delay: 1,      // Wait for 1 second before starting the animation
        //         ease: "power1.out",
        //         onComplete: () => {
        //             // Once flower rotation completes, animate text replacement (H)
        //             gsap.to(flowerRef.current, {
        //                 opacity: 0,    // Fade out flower
        //                 duration: 1,   // Duration of fade out
        //             });

        //         },
        //     }
        // );


        // gsap.fromTo(
        //     '.hero__icon',
        //     { rotation: 0 }, // initial rotation
        //     {
        //         rotation: 360,  // final rotation (one full rotation)
        //         duration: 3,    // duration of the rotation animation
        //         ease: 'power2.out',
        //         onComplete: () => {
        //             // Once rotation completes, reveal the letters one by one
        //             gsap.fromTo(
        //                 '.hero__text span',
        //                 { opacity: 0, y: 30 },  // initial opacity and position (below)
        //                 {
        //                     opacity: 1,  // final opacity (visible)
        //                     y: 0,        // final position (normal)
        //                     duration: 0.8,
        //                     ease: 'power2.out',
        //                     stagger: 0.1, // Delay between each letter
        //                 }
        //             );
        //         },
        //     }
        // );
    }, []);

    const flipLetter = () => {
        gsap.to(flipRef.current, {
            rotationX: 360,
            duration: 2,
            repeate: -1,
            yoyo: true,
            ease: 'none',
            delay: 1,
        });
    }

    const showSecondText = () => {
        gsap.fromTo(
            textRef.current,
            {
                y: -10, opacity: 0, position: 'relative'
            },
            {
                y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power4.out',
                onComplete: flipLetter
            }
        )
    }

    return (
        <span className='animate-letter'>
            <span className='name'>
                <span ref={textARef}
                    className='A'
                >A</span>
                <span ref={textKRef} className='K'>K</span>
                <span ref={textSRef} className='S'>S</span>
                <span ref={textHRef} className='H'>H</span>
                <div className='lokiContainer'>
                    <img ref={lokiRef} className='loki' src={loki} />
                    <span ref={textIRef} className='I'>{lokiLetter}</span>
                </div>
                <span ref={textTRef} className='T'>T</span>
                <span ref={textH2Ref} className='H2'>H</span>
                <span ref={textA2Ref} className='A2'>A</span>


            </span>
        </span >
    );
};
