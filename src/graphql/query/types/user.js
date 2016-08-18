import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList} from 'graphql'
import PostType from './post'
import CommentType from './comment'

export default new GraphQLObjectType({
  name: 'User',
  description: 'Blog user',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: user => user.id
    },
    firstName: {
      type: GraphQLString,
      resolve: user => user.firstName
    },
    lastName: {
      type: GraphQLString,
      resolve: user => user.lastName
    },
    email: {
      type: GraphQLString,
      resolve: user => user.email
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve: user => user.getPosts()
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve: user => user.getComments()
    }
  })
});