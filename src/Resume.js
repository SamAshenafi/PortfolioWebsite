import React from 'react';
import { Box, Paper, Typography, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

// FONT IMPORT
import '@fontsource/roboto-slab'; 

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(1.5),
  fontWeight: 700,
  textTransform: 'none',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: theme.shadows[6],
  },
}));

const Resume = () => {
  const resumeUrl = `${process.env.PUBLIC_URL}/resume.jpg`; // Update the extension and filename as needed

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #DAAD86, #659DBD)',
        fontFamily: 'Roboto Slab', // Apply the custom font
      }}
    >
      <StyledPaper>
        <Typography variant="h4" component="h1" gutterBottom fontFamily="Roboto Slab">
          Resume
        </Typography>
        <img src={resumeUrl} alt="Resume" style={{ maxWidth: '100%', height: 'auto', marginBottom: 16 }} />
        <Stack direction="column" spacing={2}>
          <StyledButton
            variant="contained"
            color="secondary"
            href={resumeUrl}
            download="My_Resume.jpg"
          >
            Download
          </StyledButton>
          {/* The Print button has been removed */}
        </Stack>
      </StyledPaper>
    </Box>
  );
};

export default Resume;