interface IAuthor {
  id: number;
  name: string;
  email: string;
  city: string;
  avatar: string;
  sells_from: string;
  phone: string;
}

export interface IComment {
  id: number;
  text: string;
  created_on: string;
  author: IAuthor;
}

export interface INewCommentRequest {
  body: { text: string };
  id: number;
}
