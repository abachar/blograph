import {GraphQLObjectType, GraphQLInt, GraphQLString} from 'graphql'
import UserType from './user'
import PostType from './post'

export default new GraphQLObjectType({
  name: 'Comment',
  description: 'Post comment',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: comment => comment.id
    },
    content: {
      type: GraphQLString,
      resolve: comment => comment.content
    },
    author: {
      type: UserType,
      resolve: comment => comment.getAuthor()
    },
    comments: {
      type: PostType,
      resolve: comment => comment.getPost()
    }
  })
});