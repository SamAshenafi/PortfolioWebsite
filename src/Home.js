import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to My Portfolio Website
      </Typography>
      <Typography variant="body1" gutterBottom>
        This website is a personal portfolio developed using React, showcasing projects, skills, and professional information. The interface is built with Material-UI, a popular React UI framework that implements Google's Material Design. The site is responsive, ensuring it works across different devices and screen sizes.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Connect with me
      </Typography>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item>
          <Link href="https://github.com/SamAshenafi" target="_blank" rel="noopener noreferrer">
            <GitHubIcon sx={{ fontSize: 40 }} />
          </Link>
        </Grid>
        <Grid item>
          <Link href="mailto:isama1213@gmail.co" target="_blank" rel="noopener noreferrer">
            <EmailIcon sx={{ fontSize: 40 }} />
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon sx={{ fontSize: 40 }} />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
