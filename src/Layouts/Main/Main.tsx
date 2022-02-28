import { CssBaseline, GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { SnackbarProvider } from 'notistack';
import { FC } from 'react';
import theme from '../../theme';

export type MainProps = {};

const Main: FC<MainProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles
      styles={{
        '*': {
          boxSizing: 'border-box',
        },
        body: {
          margin: 0,
        },
      }}
    />
    <SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>
  </ThemeProvider>
);

export default Main;
