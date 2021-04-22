import normalizr from "./normalizr"
export interface User {
  id: string,
  name: string
}

interface Comment {
  id: string,
  commenter: User
}

export interface Post {
  id: string,
  title: string,
  comments: Comment[],
  author: User
}

export interface EntityMaps {
  post: Post,
  user: User,
  comment: Comment
}

const UserSchema = new normalizr.schema.Entity<User>('users');

const CommentSchema = new normalizr.schema.Entity<Comment>('comments', {
  commenter: UserSchema
});

export const ArticleSchema = new normalizr.schema.Entity<Post>('articles', {
  author: UserSchema,
  comments: [CommentSchema]
});
