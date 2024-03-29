import { createTheme } from '@mui/material/styles';

const ThemeRTL = createTheme({
  direction: 'rtl',
  typography: {
    allVariants: {
      fontFamily: "'Anjoman', 'IRANYekan', 'Lalezar'",
      fontWeight: 600,
      color: '#0F3C6C',
      direction: 'rtl',
      textAlign: 'justify',
    },
    h1: {
      fontSize: 120,
    },
    h2: {
      fontSize: 100,
    },
    h5: {
      fontWeight: 1000,
      fontSize: 24,
    },
    button: {
      fontFamily: "'Anjoman', 'IRANYekan', 'Lalezar'",
      fontWeight: 800,
      direction: 'rtl',
    }
  },
  palette: {
    primary: {
      light: '#3498DB',
      main: '#3C8CE7',
      dark: '#00376F',
      contrastText: '#000',
    },
    secondary: {
      light: '#FFE08B',
      main: '#FFD358',
      dark: '#ffbb00',
      contrastText: '#fff',
    },
  },
});

export default ThemeRTL;