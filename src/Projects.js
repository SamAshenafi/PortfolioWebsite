import React from 'react';
import { Box, Typography, Link, Card, CardContent, CardActions, Button, Grid, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import PetsIcon from '@mui/icons-material/Pets';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const StyledButton = styled(Button)(({ theme }) => ({
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: theme.shadows[6],
  },
}));
const Projects = () => {
  const githubUrl = 'https://github.com/SamAshenafi';
  const project1Url = 'https://github.com/SamAshenafi/Project-FOX';
  const project2Url = 'https://github.com/SamAshenafi/AlarmClock';
  const video1Title = 'Project:Fox';
  const video2Title = 'Alarm Clock';
  const video1Src = '/ProjectFox.mp4'; 
  const video2Src = '/AlarmClock.mp4';

  return (
    <Box sx={{ flexGrow: 1, padding: 3, background: '#f4f4f4' }}> {/* Light background for contrast */}
      <Typography variant="h4" component="h1" gutterBottom>
        Projects
      </Typography>
      <Tooltip title={githubUrl} placement="top">
        <Link href={githubUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <StyledButton variant="contained" color="primary" startIcon={<GitHubIcon />} sx={{ marginBottom: 2 }}>
          GitHub
          </StyledButton>
        </Link>
      </Tooltip>
      <Grid container spacing={2}>
        {/* Project:Fox */}
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                <PetsIcon sx={{ verticalAlign: 'middle', mr: 1 }} /> Project:Fox
              </Typography>
              <Typography color="textSecondary">
                A short adventure rpg game using c++ and raylib. My contributions were the Main Menu UI and the screens/textures in the game.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={project1Url} target="_blank">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Alarm Clock */}
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
              <AccessTimeIcon sx={{ verticalAlign: 'middle', mr: 1 }} /> 
              Alarm Clock
              </Typography>
              <Typography color="textSecondary">
                A alarm clock using java.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={project2Url} target="_blank">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={4}>
        {/* Video 1 */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            {video1Title}
          </Typography>
          <Card>
            <video width="100%" controls>
              <source src={video1Src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Card>
        </Grid>
        {/* Video 2 */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            {video2Title}
          </Typography>
          <Card>
            <video width="100%" controls>
              <source src={video2Src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
