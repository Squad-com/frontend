import { Container, GlobalStyles, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { FC } from 'react';
import theme from '../../theme';

export type MainProps = {};

const Main: FC<MainProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Paper elevation={0} square>
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
      <Container maxWidth='lg'>{children}</Container>
    </Paper>
  </ThemeProvider>
);

export default Main;
