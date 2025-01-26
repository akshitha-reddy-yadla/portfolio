import React from 'react'
import Box from '@mui/material/Box';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import './Services.css';
import '../../core/styles.css';


const data = [
  {
    id: 1,
    name: "Front-end development",
    icons: [
      {
        id: 1,
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
      },
      {
        id: 2,
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"

      }
    ],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis fugit autem officiis ullam vero quo corporis eligendi neque nisi ea repellendus, fugiat iste incidunt pariatur omnis minima explicabo in?",
    link: "",
    color: "#6A6F4C",
    image:
      'https://images.unsplash.com/photo-1708282604702-99bae7574ff0?q=80&w=800&h=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Snowny mountains the setting sun reflecting on the peaks',
  },
  {
    id: 2,
    name: "Back-end development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis fugit autem officiis ullam vero quo corporis eligendi neque nisi ea repellendus, fugiat iste incidunt pariatur omnis minima explicabo in?",
    link: "",
    color: "",
    image:
      'https://images.unsplash.com/photo-1708282604702-99bae7574ff0?q=80&w=800&h=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Snowny mountains the setting sun reflecting on the peaks',
  },
  {
    id: 3,
    name: "Full-stack development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis fugit autem officiis ullam vero quo corporis eligendi neque nisi ea repellendus, fugiat iste incidunt pariatur omnis minima explicabo in?",
    link: "",
    color: "",
    image:
      'https://images.unsplash.com/photo-1708282604702-99bae7574ff0?q=80&w=800&h=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Snowny mountains the setting sun reflecting on the peaks',
  }
]


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

export default function Services() {
  return (
    <div className='section'>
      <h1 className='section_header'>Services I offer</h1>
      <div className='services_section'>
        <Grid container spacing={3}>
          {data.map((item) => (
            <Grid item xs={12} md={4} key={item.id}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {item.name}
                  </Typography>
                </CardContent>
                <Grid container spacing={2}>
                  {item.icons?.map((icon) => (
                    <Grid item key={icon.id}>
                      {/* <IconButton> */}
                      <img src={icon.icon} alt={icon.name} style={{ width: 40, height: 40 }} />
                      {/* </IconButton> */}
                      <Typography variant="body2" align="center">
                        {icon.name}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* <Card className='card' sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        {/* </Card> */}
      </div>
    </div>
  )
}
