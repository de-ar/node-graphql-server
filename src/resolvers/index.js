import {
  album,
  albums,
  photos as albumPhotos,
  user as albumUser,
} from './albums.js'
import { comment, comments, post as commentPost } from './comments.js'
import { album as photoAlbum, photo, photos } from './photos.js'
import {
  comments as postComments,
  post,
  posts,
  user as postUser,
} from './posts.js'
import { todo, todos, user as todoUser } from './todos.js'
import {
  albums as userAlbums,
  posts as userPosts,
  todos as userTodos,
  user,
  users,
} from './users.js'

export default {
  Query: {
    post,
    posts,
    user,
    users,
    comment,
    comments,
    album,
    albums,
    photo,
    photos,
    todo,
    todos,
  },
  Post: {
    user: postUser,
    comments: postComments,
  },
  User: {
    posts: userPosts,
    albums: userAlbums,
    todos: userTodos,
  },
  Comment: {
    post: commentPost,
  },
  Album: {
    user: albumUser,
    photos: albumPhotos,
  },
  Photo: {
    album: photoAlbum,
  },
  Todo: {
    user: todoUser,
  },
}
