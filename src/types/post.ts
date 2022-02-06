export type PostAuthor = {
  _id: string;
  image: string;
  firstName: string;
  lastName: string;
};

export type PostType = {
  id: string;
  author: PostAuthor;
  description: string;
  score: number;
  voteState?: 'UP' | 'DOWN';
  images: string[];
};
