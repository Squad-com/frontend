import { Avatar, Button, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { NetworkUserType } from 'src/api/post';

const styles = {
  root: {},
  fullName: {
    paddingLeft: 2.5,
  },
  postedBy: {
    paddingLeft: 2.5,
  },
};

export type PostHeaderProps = { author: NetworkUserType };

const PostHeader: FC<PostHeaderProps> = ({ author }) => {
  const fullName = [author.firstName, author.lastName].join(' ');

  return (
    <Grid sx={styles.root} container direction='row' alignItems='center'>
      <Avatar src={author.image} alt={fullName} />
      <Typography sx={styles.fullName} variant='subtitle1'>
        {fullName}
      </Typography>
      <Grid item xs container direction='row' justifyContent='flex-end'>
        <Button variant='contained'>Follow</Button>
      </Grid>
    </Grid>
  );
};

export default PostHeader;
