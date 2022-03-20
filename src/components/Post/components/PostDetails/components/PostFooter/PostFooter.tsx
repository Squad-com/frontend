import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import { Button, Grid } from '@mui/material';
import { FC } from 'react';
import { useSetRecoilState } from 'recoil';
import { showCommentState } from 'src/recoil/comment';

const styles = {
  root: {},
  item: {
    padding: '0 10px',
    borderRadius: 2,
  },
  text: {
    marginLeft: 5,
  },
  icon: {
    color: '#9b9b9b',
    fontSize: 30,
  },
};

export type PostFooterProps = {
  postId: string;
  comments: any[];
};

const PostFooter: FC<PostFooterProps> = ({ postId, comments }) => {
  const setShowState = useSetRecoilState(showCommentState(postId));

  return (
    <Grid sx={styles.root} container direction='row'>
      <Button
        sx={styles.item}
        onClick={() => setShowState((prev) => !prev)}
        variant='text'
        startIcon={<ForumOutlinedIcon sx={styles.icon} />}
      >
        {comments} comments
      </Button>
      <Button
        sx={styles.item}
        onClick={() => setShowState((prev) => !prev)}
        variant='text'
        startIcon={<IosShareOutlinedIcon sx={styles.icon} />}
      >
        Share
      </Button>
      <Button
        sx={styles.item}
        onClick={() => setShowState((prev) => !prev)}
        variant='text'
        startIcon={<BookmarkBorderOutlinedIcon sx={styles.icon} />}
      >
        Save
      </Button>
    </Grid>
  );
};

export default PostFooter;
