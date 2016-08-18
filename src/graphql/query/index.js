import {GraphQLObjectType} from 'graphql';
import UserQueries from './user';
import PostQueries from './post';
import CommentQueries from './comment';
import TagQueries from './tag';

export default new GraphQLObjectType({
  name: 'Query',
  description: 'Root query entry point',
  fields: () => ({
    users: UserQueries,
    posts: PostQueries,
    comments: CommentQueries,
    tags: TagQueries
  })
});