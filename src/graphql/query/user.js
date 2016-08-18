import {GraphQLInt, GraphQLString, GraphQLList} from 'graphql';
import UserType from './types/user'
import models from '../../models'

export default {
  type: new GraphQLList(UserType),
  args: {
    id:        { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName:  { type: GraphQLString },
    email:     { type: GraphQLString }
  },
  resolve (root, args) {
    return models.User.findAll({where: args});
  }
};