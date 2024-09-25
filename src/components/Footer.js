import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        textAlign: 'center',
        padding: '1rem',
        position: 'fixed',
        width: '100%',
        bottom: 0,
      }}
    >
      <Typography variant="body2">
        &copy; 2024 Your Name. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
