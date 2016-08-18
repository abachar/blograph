import {
  GraphQLObjectType
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Mutations',
  description: 'Entry point for all mutations',
  fields: () => ({})
});