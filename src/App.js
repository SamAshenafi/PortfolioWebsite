import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CssBaseline, AppBar, Toolbar, Typography, Button, Container,} from '@mui/material';
import { styled } from '@mui/material/styles';
import './App.css';
import Resume from './Resume'
import Projects from './Projects'
import Home from './Home';


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#FBEEC1'),
  backgroundColor: '#FBEEC1',
  '&:hover': {
    backgroundColor: '#4059ad',
  },
  margin: theme.spacing(1),
}));






function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Sam Ashenafi
          </Typography>
          <ColorButton variant="contained" component={Link} to="/">Home</ColorButton>
          <ColorButton variant="contained" component={Link} to="/projects">Projects</ColorButton>
          <ColorButton variant="contained" component={Link} to="/resume">Resume</ColorButton>
        </Toolbar>
      </AppBar>
      <Container className="main-content" sx={{ my: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
