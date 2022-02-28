import { Button, ButtonProps, CircularProgress } from '@mui/material';
import { FC } from 'react';

const styles = {
  progress: {
    color: 'white',
    marginRight: 2,
  },
};

const LoadingButton: FC<ButtonProps & { isLoading?: boolean }> = ({
  children,
  isLoading,
  ...props
}) => (
  <Button {...props}>
    {isLoading && <CircularProgress size={20} sx={styles.progress} />}
    {children}
  </Button>
);

export default LoadingButton;
