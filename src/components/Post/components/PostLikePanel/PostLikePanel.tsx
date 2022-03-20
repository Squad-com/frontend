import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { Grid, IconButton, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { VoteEnum, votePost } from 'src/api/post';
import { networkPostsState } from 'src/recoil/post';
import getErrorMessage from 'src/utils/getErrorMessage';

const styles = {
  root: {
    padding: 3,
  },
  count: {
    marginTop: 2,
    marginBottom: 2,
  },
};

export type PostLikePanelProps = {
  postId: string;
  score: number;
  voteStatus?: VoteEnum;
};

const PostLikePanel: FC<PostLikePanelProps> = ({
  postId,
  score,
  voteStatus,
}) => {
  const [networkPosts, setNetworkPosts] = useRecoilState(networkPostsState);
  const { enqueueSnackbar } = useSnackbar();

  const updateNetworkPosts = (vote: VoteEnum) => {
    const index = networkPosts.findIndex(({ id }) => postId === id);
    const posts = [...networkPosts];
    const post = { ...posts[index] };
    const oldVote = post.voteState || 0;
    post.voteState = vote;
    post.score = vote - oldVote;
    posts[index] = post;
    setNetworkPosts(posts);
  };

  const handleVote = (vote: VoteEnum) => {
    const index = networkPosts.findIndex(({ id }) => postId === id);
    if (index !== -1) {
      const oldVote = networkPosts[index].voteState as VoteEnum;
      // to avoid delay in UI, update it first
      updateNetworkPosts(vote);
      votePost(postId, vote).catch((err) => {
        const message = getErrorMessage(err);
        enqueueSnackbar(message, { variant: 'error' });
        // if it is failed then revert it back
        updateNetworkPosts(oldVote);
      });
    }
  };

  return (
    <Grid sx={styles.root} item>
      <Grid container direction='column' alignItems='center'>
        <IconButton
          onClick={() => handleVote(VoteEnum.UP)}
          disabled={voteStatus === VoteEnum.UP}
        >
          {voteStatus === VoteEnum.UP ? (
            <ThumbUpAltIcon color='primary' />
          ) : (
            <ThumbUpAltOutlinedIcon />
          )}
        </IconButton>
        <Typography sx={styles.count} variant='subtitle1'>
          {score}
        </Typography>
        <IconButton
          onClick={() => handleVote(VoteEnum.DOWN)}
          disabled={voteStatus === VoteEnum.DOWN}
        >
          {voteStatus === VoteEnum.DOWN ? (
            <ThumbDownAltIcon color='primary' />
          ) : (
            <ThumbDownAltOutlinedIcon />
          )}
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default PostLikePanel;
