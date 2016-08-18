import Promise from 'promise'
import winston from 'winston'
import createDB from './db'
import createServer from './server'

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({'timestamp':true})
  ]
});

Promise.all([
    // Start express server
    createServer(),

    // Initialize database
    createDB()
  ])
  .then(() => winston.info('Blograph is started.'));