import React from 'react';
import { Box, Typography } from '@mui/material';

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        padding: '5rem 2rem',
      }}
    >
      <Typography variant="h2">
        My Projects
      </Typography>
      <Typography variant="body1">
        This is the projects section.
      </Typography>
    </Box>
  );
};

export default Projects;
