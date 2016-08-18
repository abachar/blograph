import {GraphQLInt, GraphQLString, GraphQLList} from 'graphql';
import TagType from './types/tag'
import models from '../../models'

export default {
  type: new GraphQLList(TagType),
  args: {
    id:    { type: GraphQLInt },
    label: { type: GraphQLString }
  },
  resolve (root, args) {
    return models.Tag.findAll({where: args});
  }
};