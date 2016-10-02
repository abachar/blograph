import {GraphQLInt, GraphQLString, GraphQLList} from 'graphql';
import UserType from './types/user'
import models from '../../models'

export default {
  type: new GraphQLList(UserType),
  args: {
    id: {type: GraphQLInt},
    firstName: {
      type: GraphQLString,
      description: 'The user first name'
    },
    lastName: {type: GraphQLString, description: 'The user last name'},
    email: {type: GraphQLString}
  },
  resolve (root, args) {
    return models.User.findAll({where: args});
  }
};