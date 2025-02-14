import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from 'react-icons/ai';
import { FiCodepen } from 'react-icons/fi';
import { IoMdMail } from "react-icons/io";
import gsap from "gsap";

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
                className=' px-10 section flex__center flex__col'>
                <div className="hero__content">
                    <h1 className="hero__text">Hi there! I am...</h1>
                    <HeroAnimationWithText />
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
    const flowerRef = useRef(); // Reference for the flower SVG
    const textARef = useRef();
    const textKRef = useRef();
    const textHRef = useRef();
    const textSRef = useRef();
    const textIRef = useRef();
    const textTRef = useRef();
    const textH2Ref = useRef();
    const textA2Ref = useRef();



    useEffect(() => {

        const tween = gsap.fromTo(
            flowerRef.current,
            {
                rotation: -90,
                x: -200,
            },
            {
                opacity: 1,
                x: 0,
                rotation: 360,
                duration: 5,
                ease: "linear",
            }
        )


        gsap.fromTo(
            textARef.current, {
            opacity: 0,
            transform: 'scaleX(0)'
        },
            {
                rotationX: 360,
                opacity: 1,
                transform: 'scaleX(1)',
                duration: 2,
                delay: 3,
                stagger: 0.1,
                ease: 'power4.out',
                onComplete: () => {
                    tween.play()
                },

            }
        )

        gsap.fromTo(
            textA2Ref.current, {
            opacity: 0,
            transform: 'scaleX(0)'
        },
            {
                rotationX: 360,
                opacity: 1,
                transform: 'scaleX(1)',
                duration: 2,
                delay: 3,
                stagger: 0.1,
                ease: 'power4.out',
                // onComplete: tween,

            }
        )

        gsap.fromTo(
            textSRef.current, {
            x: -10, opacity: 0, position: 'relative'
        }, {
            x: 0, opacity: 1, duration: 1, delay: 5, ease: 'power4.out',
        }
        )

        gsap.fromTo(
            textKRef.current,
            {
                y: -10, opacity: 0, position: 'relative'
            },
            {
                y: 0, opacity: 1, duration: 1, delay: 4, ease: 'power4.out'
            }
        )

        gsap.fromTo(
            textHRef.current, {
            y: '30%',
            opacity: 0,
        }, {
            opacity: 1,
            delay: 2,
            y: '0%',
        })

        gsap.fromTo(
            textIRef.current, {
            y: '-30%',
            opacity: 0,
        }, {
            opacity: 1,
            y: '0%',
            delay: 2,
        })

        gsap.fromTo(
            textTRef.current, {
            x: 10, opacity: 0, position: 'relative'
        }, {
            x: 0, opacity: 1, duration: 1, delay: 6, ease: 'power4.out',
        }
        )

        gsap.fromTo(
            textH2Ref.current,
            {
                y: 10, opacity: 0, position: 'relative'
            },
            {
                y: 0, opacity: 1, duration: 1, delay: 7, ease: 'power4.out'
            }
        )

        // gsap.from(lokiRef.current, {
        //     opacity: 0,
        //     scale: 0,
        //     duration: 2,
        //     ease: 'power4.out',
        //     onComplete: () => {
        //         gsap.fromTo(
        //             lokiRef.current, {
        //             rotation: 0,
        //         }, {
        //             x: '-10%',
        //             rotation: 360,
        //             duration: 1,
        //             ease: 'power1.in',
        //             opacity: 0,
        //             onComplete: showRefI
        //         }
        //         )
        //         // gsap.to(lokiRef.current, {
        //         //     // y: '30%',
        //         //     y: '10%',
        //         //     text: 'I',
        //         //     rotate: 360,
        //         //     transform: 'scale(1)',
        //         //     // opacity: 0,
        //         //     duration: 0.4,
        //         //     ease: 'power4.in'
        //         // })

        //         // showRefI();
        //     }
        // });



    }, []);



    return (
        <span className='animate-letter'>
            <p className='name'>

                <span ref={textARef} className='A'>A</span>
                <span ref={textKRef} className='K'>K</span>
                <span ref={textSRef} className='S'>S</span>
                <span ref={textHRef} className='H'>H</span>
                <span ref={textIRef} className='I'>I</span>
                <span ref={textTRef} className='T'>T</span>
                <span ref={textH2Ref} className='H2'>H</span>

                <span ref={textA2Ref} className='A2'>A</span>
                {/* <span className='A2'> */}
                <img ref={flowerRef} className='flower' src={flower} />
                {/* </span> */}

            </p>
        </span >
        // <div className="hero bg-red-400">
        //     {/* <img className='hero__icon loki' src={loki} /> */}
        //     <div className="hero-text">
        //         <p className=''>Hi, I am</p>
        //         <h1 className='hero__text'>
        //             <span className='clip'>
        //                 <img ref={flowerRef} className='hero__icon loki' src={loki} />
        //                 <span className='hero__text'>A</span>
        //             </span>
        //             <span>K</span>
        //             <span>S</span>
        //             <span className='letter-H' ref={textRef} >H</span>
        //             <span>I</span>
        //             <span>T</span>
        //             <span>H</span>
        //             <span>A</span>
        //         </h1>
        //         {/* <p className='hero__description'>A full-stack developer who loves building seamless user experiences that go above and beyond. I’m all about solving tricky problems and making things easy and enjoyable for users.</p> */}
        //     </div>
        // </div>
    );
};

// export default HeroAnimationWithText;
