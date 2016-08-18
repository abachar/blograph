import {GraphQLSchema} from 'graphql';
import queryType from './query';
// import mutationType from './mutation';

export default new GraphQLSchema({
  query: queryType // ,
  // mutation: mutationType
});