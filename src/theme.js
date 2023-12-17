import { createTheme } from '@mui/material/styles';

// Define the custom theme.
const theme = createTheme({
  palette: {
    primary: {
      main: '#7E685A',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#659DBD',
    },
    info: {
      main: '#DAAD86',
    },
    success: {
      main: '#BC986A',
    },
    background: {
      default: '#FBEEC1',
    },
    // ...other colors if necessary...
  },
  // You can also customize typography, breakpoints, and other aspects of the theme
});

export default theme;
