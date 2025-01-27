import React from 'react'
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
      fontSize: 18,
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 400,
    },
    h6: {
      fontSize: 16,
      fontWeight: 100,
    }
  },
})

const data = [
  {
    id: 1,
    name: "Toucan Payments",
    year: "Jan 2024 - Present",
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
            <Typography variant="subtitle1" className='text' component="div">
              {item.name}
            </Typography>
            <Typography variant="h6" className='text' component="div">
              {item.year}
            </Typography>
            <Typography variant="subtitle2" className='text' component="div">
              {item.description}
            </Typography>
          </div>

        ))}
      </div>
    </div>
  )
}
