import React, { useState, useRef } from 'react'
import { v4 as uuidv4 } from "uuid";
import './Services.css';
import '../../core/styles.css';
import { useInView } from 'react-intersection-observer';


const data = [
  {
    id: uuidv4(),
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
    id: uuidv4(),
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
  {
    id: uuidv4(),
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
  }
]

export default function Services() {
  return (
    <div className='section'>
      <h1 className='section_header'>What I do</h1>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative w-full pb-full bg-blue-500">
            <div className="absolute inset-0 flex items-center justify-center text-white">1</div>
          </div>
          <div className="relative w-full pb-full bg-green-500">
            <div className="absolute inset-0 flex items-center justify-center text-white">2</div>
          </div>
          <div className="relative w-full pb-full bg-red-500">
            <div className="absolute inset-0 flex items-center justify-center text-white">3</div>
          </div>
        </div>
      </div>
      <div className='flex flex__center'>
        <div className="container px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {
              data.map((item, index) => (
                <Card key={item.name} title={item.name} description={item.description} icons={item.icons} delay={index * 0.2} />
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
    // <div ref={ref} id={title}
    //   className={`tile bg-white p-4 flex__col flex__start rounded-3xl shadow-lg animate-slide-in-right ${inView ? 'slide-in' : ''}`}
    //   style={{ transitionDelay: `${delay}s` }}
    // >
    //   <div className="bg-[#] flex__col flex__start mb-4">
    //     <h2 className="text-2xl font-semibold">{title}</h2>
    //     <p className="text-start mt-2">{description}</p>
    //     <div className='flex__center flex__row mt-2'>
    //       {
    //         icons.map((item) => (
    //           <div key={item.name} className='flex__col flex__center mt-4 mr-6'>
    //             <img src={item.icon} alt={item.name} style={{ width: 40, height: 40 }} />
    //             <p>{item.name}</p>
    //           </div>
    //         ))
    //       }
    //     </div>
    //   </div>
    // </div>
  );
};

