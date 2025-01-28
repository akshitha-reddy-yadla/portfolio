import React from 'react'
import { v4 as uuidv4 } from "uuid";
import '../../core/styles.css'
import './Experience.css'
import { createTheme, Typography } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      paper: '#ffcaca', // your color
    },
  },
  typography: {
    fontFamily: [
      'Courier New', 'Courier', 'monospace'
    ].join(','),
    subtitle1: {
      fontSize: 22,
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: 18,
      fontWeight: 400,
    },
    h6: {
      fontSize: 24,
      fontWeight: 500,
    }
  },
})

const data = [
  {
    id: uuidv4(),
    name: "Toucan Payments",
    year: "Jan 2023 - Present",
    description: "Developed mobile apps with well-structured architecture, built API's to enable smooth communication between the client-side and back-end, focusing on efficiency, scalability, and secure data handling. Contributed to guiding th eproject's direction and supporting the team."
  }
]

export default function Experience() {
  return (
    <div className='section experience__section'>
      <div className='section_header'>Experience</div>
      <div className='experience__content'>
        {data.map((item) => (
          <div className=''>
            <h3 className='exp__name'>{item.name}</h3>
            <p className='exp__year'>{item.year}</p>
            <p className='exp__description'>{item.description}</p>
            {/* <Typography variant="subtitle1" className='text' component="div">
              {item.name}
            </Typography>
            <Typography variant="h6" className='text' component="div">
              {item.year}
            </Typography>
            <Typography variant="subtitle2" className='text' component="div">
              {item.description}
            </Typography> */}
          </div>

        ))}
      </div>
    </div>
  )
}
