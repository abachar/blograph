import Promise from 'promise'
import winston from 'winston'
import models from './models'

export default function createDB() {
  return new Promise((resolve, reject) => {
    models
      .sequelize
      .sync({force: true})
      .then(() => winston.info('Blograph database created'))
      .then(resolve, reject)
  });
}