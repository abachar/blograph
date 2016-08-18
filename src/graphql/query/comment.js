import {GraphQLInt, GraphQLString, GraphQLList} from 'graphql';
import CommentType from './types/comment'
import models from '../../models'

export default {
  type: new GraphQLList(CommentType),
  args: {
    id:      { type: GraphQLInt },
    content: { type: GraphQLString }
  },
  resolve (root, args) {
    return models.Comment.findAll({where: args});
  }
};