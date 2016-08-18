import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList} from 'graphql'
import UserType from './user'
import CommentType from './comment'
import TagType from './tag'

export default new GraphQLObjectType({
  name: 'Post',
  description: 'Blog post',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: post => post.id
    },
    title: {
      type: GraphQLString,
      resolve: post => post.title
    },
    content: {
      type: GraphQLString,
      resolve: post => post.content
    },
    author: {
      type: UserType,
      resolve: post => post.getAuthor()
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve: post => post.getComments()
    },
    tags: {
      type: new GraphQLList(TagType),
      resolve: post => post.getTags()
    }
  })
});