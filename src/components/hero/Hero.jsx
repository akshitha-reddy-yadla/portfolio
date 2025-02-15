import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from 'react-icons/ai';
import { FiCodepen } from 'react-icons/fi';
import { IoMdMail } from "react-icons/io";
import gsap from "gsap";
import flower from '../../assets/flower.svg';

import './Hero.css'

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

                    <a href="mailto:akshithayadla.reddy@gmail.com" alt="codepen" className="social__icons z-10">
                        <IoMdMail color="#533a28" size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/akshitha-yadla/" alt="linkedin" className="social__icons"><FaLinkedinIn color="#533a28" size={24} /></a>
                    <a href="https://github.com/akshitha-reddy-yadla" alt="github" className="social__icons"><AiFillGithub color="#533a28" size={24} /></a>
                    <a href="https://codepen.io/Akshitha_Reddy" alt="codepen" className="social__icons"><FiCodepen color="#533a28" size={24} /></a>
                </div>
            </motion.div>
        </motion.section>
    )
}

const HeroAnimationWithText = () => {
    const flowerRef = useRef();
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
                <img ref={flowerRef} className='flower' src={flower} />

            </p>
        </span >
    );
};

