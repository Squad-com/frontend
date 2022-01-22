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
    mode: 'dark',
  },
  typography: {
    h1: {
      ...responsiveFontSize('26px', '21px'),
    },
    h2: { ...responsiveFontSize('24px', '18px') },
    h3: { ...responsiveFontSize('22px', '16px') },
    h4: {
      ...responsiveFontSize('20px', '14px'),
    },
    h5: {
      ...responsiveFontSize('19px', '13px'),
    },
    h6: { ...responsiveFontSize('18px', '12px') },
    subtitle1: {
      ...responsiveFontSize('22px', '16px'),
    },
    subtitle2: {
      ...responsiveFontSize('20px', '14px'),
    },
    body1: {
      ...responsiveFontSize('18px', '13px'),
    },
    body2: {
      ...responsiveFontSize('16px', '12px'),
    },
    button: {
      fontSize: '16px',
    },
    caption: {
      ...responsiveFontSize('16px', '13px'),
    },
  },
  spacing: 4,
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          padding: 12,
          borderRadius: 12,
          width: '100%',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          height: 35,
          borderRadius: 999,
          boxShadow: 'none',
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
