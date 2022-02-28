import { createTheme } from '@mui/material/styles';
import { CSSProperties } from 'react';

const defaultTheme = createTheme();
const responsiveFontSize = (lg: string, md: string): CSSProperties => ({
  fontSize: lg,
  [defaultTheme.breakpoints.down('md')]: {
    fontSize: md,
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#551156',
    },
  },
  typography: {
    h1: {
      fontWeight: 700,
      ...responsiveFontSize('24px', '21px'),
    },
    h2: { fontWeight: 700, ...responsiveFontSize('22px', '18px') },
    h3: { fontWeight: 700, ...responsiveFontSize('20px', '16px') },
    h4: {
      fontWeight: 700,
      ...responsiveFontSize('18px', '14px'),
    },
    h5: {
      fontWeight: 700,
      ...responsiveFontSize('16px', '13px'),
    },
    h6: { fontWeight: 700, ...responsiveFontSize('14px', '12px') },
    subtitle1: {
      fontWeight: 500,
      ...responsiveFontSize('18px', '14px'),
    },
    subtitle2: {
      fontWeight: 500,
      ...responsiveFontSize('16px', '13px'),
    },
    body1: {
      ...responsiveFontSize('14px', '12px'),
    },
    body2: {
      ...responsiveFontSize('12px', '10px'),
    },
    button: {
      fontSize: '16px',
    },
    caption: {
      fontWeight: 600,
      ...responsiveFontSize('16px', '13px'),
    },
    fontFamily: ["'Nunito Sans'", 'serif'].join(','),
  },
  spacing: 4,
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderWidth: 1,
          borderColor: 'rgb(239,239,239)',
          borderStyle: 'solid',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          padding: 12,
          borderRadius: 12,
          width: '100%',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& input': {
            padding: '10px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          height: 40,
          borderRadius: 999,
          boxShadow: 'none',
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
