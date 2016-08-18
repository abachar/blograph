import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList} from 'graphql'
import PostType from './post'

export default new GraphQLObjectType({
  name: 'Tag',
  description: 'Post tag',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: tag => tag.id
    },
    label: {
      type: GraphQLString,
      resolve: tag => tag.label
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve: tag => tag.getPosts()
    }
  })
});