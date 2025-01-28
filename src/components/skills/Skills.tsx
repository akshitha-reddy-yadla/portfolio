import React from 'react'
import '../../core/styles.css'
import { Box, Grid, Typography } from '@mui/material'
import './Skills.css'

export default function Skills() {
  const skillsData = [
    {
      id: 1,
      name: "Front-end",
      languages:  [
        {
          id: 4,
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
        },
        {
          id: 5,
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
        },
        {
          id: 1,
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        },
        {
          id: 2,
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        },
        {
          id: 3,
          name: "Vue",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
        },
       
        {
          id: 4,
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"

        },
        {
          id: 5,
          name: "Tailwind css",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        },
        {
          id: 6,
          name: "Material UI",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
        }
      ],
    },
    {
      id: 2,
      name: "Back-end",
      languages:  [
        {
          id: 1,
          name: "Ruby",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg"
        },
        {
          id: 3,
          name: "Rails",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg"
        },
        {
          id: 4,
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
        },
        {
          id: 5,
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
        },
        {
          id: 6,
          name: "Spring",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
        },
      ],
    },
    {
      id: 3,
      name: "Android",
      languages:  [
        {
          id: 1,
          name: "Dart",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg"
        },
        {
          id: 2,
          name: "Flutter",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
        },
        {
          id: 3,
          name: "Kotlin",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg"
        },
      ],
    },{
      id: 4,
      name: "Database",
      languages:  [
        {
          id: 1,
          name: "PostgreSql",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"

        },
        {
          id: 2,
          name: "MySql",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"

        },
        {
          id: 3,
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"

        },
      ],
    },
    {
      id: 5,
      name: "Version Control",
      languages:  [
        {
          id: 1,
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
        },
      ],
    },


  ]
  return (
    <div className='section skills_section'>
      <div className='section_header'>Skills</div>
      <div className=''>
       {
        skillsData.map((item) => (
          <div>
            <h2 className='skills__header'>{item.name}</h2>
            <Box className="skills_grid">
              {item.languages.map(c => (
                <div className='skill' item xs key={c.id} >
                  <img src={c.icon} alt={c.name} className='icon' style={{ width: 50, height: 50 }} />
                  <span>
                    {c.name}
                  </span>
                </div>
              ))}
            </Box>
          </div>
        ))
       }
      </div>
    </div>
  )
}
