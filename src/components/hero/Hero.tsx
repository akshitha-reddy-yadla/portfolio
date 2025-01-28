import React from 'react'
import './Hero.css';
import '../../core/styles.css';
import { ImLinkedin } from 'react-icons/im';
import { AiFillGithub } from 'react-icons/ai';
import { FiCodepen } from 'react-icons/fi';
import { IoMdMail } from "react-icons/io";


export default function Hero() {
    return (
        <div className='section' style={{ justifyContent: "center", }}>
            <div className="hero__content">
                <h1 className="hero-text">Hi there! I’m...</h1>
                <h2 className="name">Akshitha</h2>
                <h6 className="hero-description">A full-stack developer who loves building seamless user experiences that go above and beyond. I’m all about solving tricky problems and making things easy and enjoyable for users.</h6>
            </div>
            <div className='social__icons__container'>
                <a href="mailto:akshithayadla.reddy@gmail.com" alt="codepen" className="social__icons"><IoMdMail color="#2356a6" size={24} /></a>
                <a href="https://www.linkedin.com/in/akshitha-yadla/" alt="linkedin" className="social__icons"><ImLinkedin color="#2356a6" size={24} /></a>
                <a href="https://github.com/akshitha-reddy-yadla" alt="github" className="social__icons"><AiFillGithub color="#2356a6" size={24} /></a>
                <a href="https://codepen.io/Akshitha_Reddy" alt="codepen" className="social__icons"><FiCodepen color="#2356a6" size={24} /></a>
            </div>
        </div >
    )
}
