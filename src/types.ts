import { schema } from "normalizr";

export interface IUser {
  id: string,
  name: string
}

interface IComment {
  id: string,
  commenter: IUser
}

export interface IPost {
  id: string,
  title: string,
  comments: IComment[],
  author: IUser
}

const UserSchema = new schema.Entity<IUser>('users');

const CommentSchema = new schema.Entity<IComment>('comments', {
  commenter: UserSchema
});

export const ArticleSchema = new schema.Entity<IPost>('articles', {
  author: UserSchema,
  comments: [CommentSchema]
});
