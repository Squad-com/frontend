import { Grid, OutlinedInput, Skeleton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const PageHeader = () => {
  return (
    <Grid container direction='row' alignItems='center'>
      <Skeleton width={100} height={40} variant='rectangular' />
      <OutlinedInput startAdornment={<SearchIcon />} placeholder='Search' />
      asdjsalkd
    </Grid>
  );
};

export default PageHeader;
