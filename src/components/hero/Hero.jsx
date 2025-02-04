import React, { useRef, useState } from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from 'react-icons/ai';
import { FiCodepen } from 'react-icons/fi';
import { IoMdMail } from "react-icons/io";

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

import './Hero.css'

export default function Hero() {
    const movingTextRef = useRef(null);
    const explosionsRef = useRef([]);
    const [explosionsActive, setExplosionsActive] = useState(false);

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

    const handleMouseMove = (e) => {
        const { clientX: mouseX, clientY: mouseY } = e;
        const movingText = movingTextRef.current;
        if (!movingText) return;

        const textRect = movingText.getBoundingClientRect();
        const textCenterX = textRect.left + textRect.width / 2;
        const textCenterY = textRect.top + textRect.height / 2;

        const deltaX = (mouseX - textCenterX) * 0.1;
        const deltaY = (mouseY - textCenterY) * 0.1;

        movingText.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    };

    React.useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleClick = () => {
        // Get the center of the screen (viewport)
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Trigger the explosion animation
        setExplosionsActive(true); // Mark explosions as active

        explosionsRef.current.forEach((img) => {
            img.style.opacity = 0;
            img.style.transform = 'scale(0) translate(0, 0)';
        })

        explosionsRef.current.forEach((img, index) => {
            const angle = Math.random() * 2 * Math.PI;
            const distance = 150 + Math.random() * 100; // Random distance

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
                setExplosionsActive(false); // Deactivate explosions
            }, 1000);
        });
    }
    return (
        <div className='section'>
            <div className="hero__content">
                <h1 className="hero__text">Hi there! I’m...</h1>
                <h2 className="name" ref={movingTextRef}
                    onClick={handleClick}
                >Akshitha</h2>
                <div>

                </div>
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
                <h6 className="hero__description">A full-stack developer who loves building seamless user experiences that go above and beyond. I’m all about solving tricky problems and making things easy and enjoyable for users.</h6>
            </div>
            <div className='social__icons__container'>
                <a href="mailto:akshithayadla.reddy@gmail.com" alt="codepen" className="social__icons"><IoMdMail color="#533a28" size={24} /></a>
                <a href="https://www.linkedin.com/in/akshitha-yadla/" alt="linkedin" className="social__icons"><FaLinkedinIn color="#533a28" size={24} /></a>
                <a href="https://github.com/akshitha-reddy-yadla" alt="github" className="social__icons"><AiFillGithub color="#533a28" size={24} /></a>
                <a href="https://codepen.io/Akshitha_Reddy" alt="codepen" className="social__icons"><FiCodepen color="#533a28" size={24} /></a>
            </div>
        </div>
    )
}
