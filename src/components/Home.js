import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import BackgroundImage from '../assets/background.jpg'; // Ensure the image path is correct

const LeftContent = styled('div')({
  textAlign: 'center',
});

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        textAlign: 'center',
        padding: '0', 
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: 'white',
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center',  
        justifyContent: 'center', 
      }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6}>
          <LeftContent>
            <Typography variant="h1" sx={{ fontSize: '6rem', fontFamily: 'Raleway', fontWeight: 800, marginBottom: '1rem' }}>
              Vara Ali
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem', fontFamily: '!IBM Plex Mono', color: 'grey.500' }}>
              A software tester by profession, front-end developer by choice !
            </Typography>
          </LeftContent>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
