import axiosInstance from '../axios';

type CreatePostOptions = {
  description: string;
};

export const fetchAllPosts = () => axiosInstance.get('/posts');

export const createPost = ({ description }: CreatePostOptions) => {
  axiosInstance
    .post('/posts', { description })
    .then(console.log)
    .catch((err) => console.log(err.message));
};

export const likePost = (postId: string) =>
  axiosInstance
    .post(`/posts/${postId}/like`)
    .then((res) => res.data)
    .catch(null);
