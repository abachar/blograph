import {GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLScalarType} from 'graphql';
import UserType from '../query/types/user';
import models from '../../models';

export default new GraphQLObjectType({
  name: 'Mutations',
  description: 'Entry point for all mutations',
  fields: () => ({
    createUser: {
      type: UserType,
      args: {
        firstName: {
          type: new GraphQLNonNull(GraphQLString)
        },
        lastName: {
          type: GraphQLString
        }
      },
      resolve: (source, args) => models.User.create(Object.assign({}, args))
    }
  })
});
