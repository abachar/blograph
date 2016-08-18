import express from 'express'
import Promise from 'promise'
import winston from 'winston'
import expressGraphql from 'express-graphql'
import schema from './graphql/schema'

// Config
const PORT = 3000;

export default function createServer() {
  return new Promise(resolve => {
    // Create express server
    const app = express();

    // GraphQL
    app.use('/graphql', expressGraphql({
      schema,
      pretty: true,
      graphiql: true
    }));

    app.listen(PORT, () => {
      winston.info(`Server listening on port ${PORT}`);
      resolve();
    });
  });
}