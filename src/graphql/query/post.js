import {GraphQLInt, GraphQLString, GraphQLList} from 'graphql';
import PostType from './types/post'
import models from '../../models'

export default {
  type: new GraphQLList(PostType),
  args: {
    id:      { type: GraphQLInt },
    title:   { type: GraphQLString },
    content: { type: GraphQLString }
  },
  resolve (root, args) {
    return models.Post.findAll({where: args});
  }
};