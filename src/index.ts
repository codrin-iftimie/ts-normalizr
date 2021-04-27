import normalizr from './normalizr';
import {Post, ArticleSchema, CommentSchema} from "./types"

// We dont event have to know what kind of data we are dealing with
const originalData:Post = {
  "id": "123",
  "author": {
    "id": "1",
    "name": "Paul"
  },
  "title": "My awesome blog post",
  "comments": [
    {
      "id": "324",
      "commenter": {
        "id": "2",
        "name": "Nicole"
      }
    }
  ]
}

const originalPosts = [originalData]

const normalizedData = normalizr.normalize(originalData, ArticleSchema);
// ✅ Idealy this should autocomplete to see the available entity types
normalizedData.entities.comment["324"].commenter.id

const post = normalizr.denormalize(normalizedData.result, ArticleSchema, normalizedData.entities)

// ✅ It knows that ArticleSchema is linked to Post which enables autocomplete
console.log(post.comments[0].commenter)

const posts = normalizr.denormalize([normalizedData.result], [ArticleSchema], normalizedData.entities)
// ✅ Idealy this should autocomplete as array
// also complains if I'm trying to push something that is not an Post
posts[0].comments


const normalizedPosts = normalizr.normalize(originalPosts, [ArticleSchema]);
const postsCopy = normalizr.denormalize(normalizedPosts.result, [ArticleSchema], normalizedPosts.entities)
// ✅ since normalizedPosts returned an array it should know that return is also an array
postsCopy[0].comments[0].commenter.name
