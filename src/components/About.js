import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import ProfileImage from '../assets/profile-image22.jpeg'; // Ensure the image path is correct
import BackgroundImage from '../assets/background.jpg'; // Ensure this is the correct path

const LeftContent = styled('div')({
  textAlign: 'left',
  paddingRight: '2rem',
  paddingLeft: '10rem', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%', // Make sure it takes full height of the grid
});

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        textAlign: 'center',
        padding: 0, // Remove padding
        backgroundImage: `url(${BackgroundImage})`, // Use the same background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensure full viewport height
        color: 'white',
        display: 'flex',
        alignItems: 'center',  // Center vertically
      }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6} display="flex" justifyContent="center" alignItems="center">
          <LeftContent>
            <Typography variant="h1" sx={{ fontSize: '3rem', fontFamily: 'Raleway', fontWeight: 800, marginBottom: '1rem' }}>
              About Vara Ali
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '0.9rem', fontFamily: 'IBM Plex Mono', color: 'grey.500', textAlign: 'left' }}>
              This is a brief introduction about Vara Ali, a computer scientist exploring web development and UI/UX design. 
              Passionate about creating user-friendly applications and eager to learn new technologies.
            </Typography>
          </LeftContent>
        </Grid>
        <Grid item xs={12} sm={6} display="flex" justifyContent="center" alignItems="center">
          <Avatar alt="Profile Image" src={ProfileImage} sx={{
              width: 250,
              height: 250,
            }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
