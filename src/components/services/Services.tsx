import React from 'react'
import Box from '@mui/material/Box';
import { Card, CardContent, CardMedia, Typography, Grid, createTheme, ThemeProvider } from '@mui/material';
import { v4 as uuidv4 } from "uuid";
import './Services.css';
import '../../core/styles.css';
import { AlignHorizontalLeft } from '@mui/icons-material';


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
    description: "I build reliable back-end systems that power apps, focusing on speed, security, and efficiency",
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


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

const theme = createTheme({
  palette: {
    background: {
      paper: "rgb(196, 196, 196)"
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
      fontSize: 12,
      fontWeight: 100,
    }
  },
})

export default function Services() {
  return (
    <div className='section'>
      <h1 className='section_header'>Services I offer</h1>
      <div className='services_section'>
        <Grid container spacing={3}>
          {data.map((item) => (
            <Grid item xs={12} md={4} key={item.id}>
              <ThemeProvider theme={theme}>
              <Card className="card_container" sx={{ minWidth: 275, '@media (min-width: 960px)': { minWidth: 300 },  }}>
                <CardContent>
                  <Typography variant="subtitle1" className='text' component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="subtitle2" className='text' component="div">
                    {item.description}
                  </Typography>
                </CardContent>
                <center>
                <Grid container spacing={2}>
                  {item.icons?.map((icon) => (
                    <Grid item key={icon.id}>
                     <img src={icon.icon} alt={icon.name} style={{ width: 40, height: 40 }} />
                     <Typography variant="body2" align="center">
                        {icon.name}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
                </center>
              </Card>
              </ThemeProvider>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

