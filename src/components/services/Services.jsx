import React, { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";
import './Services.css';
import '../../core/styles.css';
import { useInView } from 'react-intersection-observer';
import gsap from "gsap";

import loki from '../../assets/loki.svg';

const data = [
  {
    id: "01",
    name: "Front-end development",
    description: "I love creating responsive websites that provide the best user experience, making sure everything looks great and works seamlessly across all devices",
    icons: [
      {
        id: 1,
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
      },
    ],
  },
  {
    id: "02",
    name: "Android development",
    icons: [
      {
        id: uuidv4(),
        name: "Dart",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg"
      },
      {
        id: uuidv4(),
        name: "Kotlin",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg"
      },
    ],
    description: "I develop mobile apps for android, creating intuitive and high-performance applications, using both native and cross-platform technologies",
  },
  {
    id: "03",
    name: "Back-end development",
    icons: [
      {
        id: uuidv4(),
        name: "Ruby",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg"
      },
      {
        id: uuidv4(),
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
      },
      {
        id: uuidv4(),
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
      },
    ],
    description: "I build reliable back-end systems that power apps, focusing on speed, security, and efficiency, while ensuring scalability and maintainability for long-term success.",
  },
]

const words = [
  "Web-development",
  "Mobile-development",
  "Back-end-development",
  "Web-development",
  "Mobile-development",
  "Back-end-development",
  "Web-development",
  "Mobile-development",
  "Back-end-development",
  "Web-development",
  "Mobile-development",
  "Back-end-development",
  "Web-development",
  "Mobile-development",
  "Back-end-development",
]

export default function Services() {
  const hrRef = useRef();

  useEffect(() => {

    gsap.fromTo(
      hrRef.current,
      {
        width: '0%',
        opacity: 0,
      },
      {
        width: '100%',
        opacity: 1,
        duration: 2,
        delay: 3,
        ease: 'power2.out',
      }
    );

  }, []);

  return (
    <div className='section'>
      scroll
      <div className="scrolling-container">
        <div className="scrolling-text">
          <ScrollingText words={words} icon={loki} />
        </div>
      </div>
      <br />
      <h1 className='section_header'>What I do</h1>
      <div className='flex__center'>
        <div className='services'>
          <div className='service__header__container'>
            <p className='service__header sd:text-left'>Services</p>
            <p className='service__header service__header__info'>Info</p>
          </div>
          <hr ref={hrRef} style={{ border: '1px solid rgb(189, 133, 90)' }} />
          <div className=''>
            {
              data.map((item, index) => (
                <div key={index} className='services__list'>
                  <div className='services__sub__list'>
                    <p className='service__id mx-4'>{item.id}</p>
                    <p className='service__name'>{item.name}</p>
                  </div>
                  <p className='service__description'>{item.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}


const Card = ({ title, description, icons, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div id={title} className="relative w-full pb-full tile">
      <div className="absolute inset-0 flex items-center justify-center ">
        <div className="bg-[#] flex__col flex__start mb-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-start text__description mt-2">{description}</p>
          <div className='flex__center flex__row mt-2'>
            {
              icons.map((item) => (
                <div key={item.name} className='flex__col flex__center mt-4 mr-6'>
                  <img src={item.icon} alt={item.name} style={{ width: 40, height: 40 }} />
                  <p>{item.name}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};


const ScrollingText = ({ words, icon }) => {
  return (
    <div className="scrolling-container">
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <span>{word}</span>
          {index < words.length - 1 && <img className="loki" src={loki} />}
        </React.Fragment>
      ))}
    </div>
  );
};
