import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none', zIndex: 10 }}>
      <Toolbar sx={{ justifyContent: 'flex-end' }}>

        <Button color="inherit" component={Link} to="/" sx={{ fontFamily: 'IBM Plex Mono', textTransform: 'none' }}>01. Home</Button>
        <Button color="inherit" component={Link} to="/about" sx={{ fontFamily: 'IBM Plex Mono', textTransform: 'none' }}>02. About</Button>
        <Button color="inherit" component={Link} to="/projects" sx={{ fontFamily: 'IBM Plex Mono', textTransform: 'none' }}>03. Projects</Button>
        <Button color="inherit" component={Link} to="/contact" sx={{ fontFamily: 'IBM Plex Mono', textTransform: 'none' }}>04. Contact</Button>
        <Button component="a" href="https://drive.google.com/file/d/1ct9ogG-oo_NjpCqrwymM35Rhkd2VT7Y8/view?usp=sharing"  target="_blank" rel="noopener noreferrer" sx={{ fontFamily: 'IBM Plex Mono', textTransform: 'none', color: 'black', backgroundColor: 'white', marginLeft: '1rem','&:hover': {backgroundColor: 'lightgrey',  },}}
        >
          RESUME
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
