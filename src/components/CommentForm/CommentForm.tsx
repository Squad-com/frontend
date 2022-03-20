import { Grid, TextField } from '@mui/material';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { userInfoState } from 'src/recoil/user';
import { StylesType } from 'src/types/StylesType';
import NetworkUser from '../NetworkUser';

type FormElements = { comment: string };

export type CommentFormProps = {
  styles?: StylesType<'root' | 'avatar' | 'textField'>;
  onSubmit: (props: FormElements) => void;
};
const CommentForm: FC<CommentFormProps> = ({
  styles = {},
  onSubmit: inheritedOnSubmit,
}) => {
  const { register, handleSubmit, reset } = useForm<FormElements>({});
  const userInfo = useRecoilValue(userInfoState);
  const onSubmit = ({ comment }: FormElements) => {
    inheritedOnSubmit({ comment });
    reset();
  };

  return (
    <Grid
      component='form'
      container
      direction='row'
      onSubmit={handleSubmit(onSubmit)}
      sx={styles.root}
    >
      <Grid sx={styles.avatar} item>
        <NetworkUser
          _id={userInfo!._id}
          firstName={userInfo!.firstName}
          lastName={userInfo!.lastName}
          image={userInfo!.image}
          username={userInfo!.username}
        />
      </Grid>
      <Grid item xs>
        <TextField
          sx={styles.textField}
          {...register('comment', { required: true })}
          id='comment'
          type='text'
          placeholder='Write a comment'
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default CommentForm;
