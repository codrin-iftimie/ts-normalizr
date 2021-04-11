import normalizr from './normalizr';
import {IPost, ArticleSchema} from "./types"

const originalData:IPost = {
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

const normalizedData = normalizr.normalize(originalData, ArticleSchema);
// ⚠️ Idealy this should autocomplete to see the available entity types
// normalizedData.entities

const post = normalizr.denormalize(normalizedData.result, ArticleSchema, normalizedData.entities)

// ✅ It knows that ArticleSchema is linked to IPost which enables autocomplete
console.log(post.comments[0].commenter)

const posts = normalizr.denormalize([normalizedData.result], [ArticleSchema], normalizedData.entities)
// ✅ Idealy this should autocomplete as array
// also complains if I'm trying to push something that is not an IPost
posts[0].comments
