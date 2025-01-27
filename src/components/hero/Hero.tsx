import React from 'react'
import './Hero.css';
import '../../core/styles.css';

export default function Hero() {
    return (
        <>
        <div className="section" style={{ justifyContent: "center", }}>
            <h1 className="hero-text">Hi there! I’m...</h1>
            <h2 className="name">Akshitha Reddy</h2>
            <h6 className="hero-description">A full-stack developer who loves building seamless user experiences that go above and beyond. I’m all about solving tricky problems and making things easy and enjoyable for users.</h6>
        </div>
        <hr className="separator" />
        </>
    )
}
