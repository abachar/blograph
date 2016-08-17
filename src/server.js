import models from './models'
// import schema from './graphql/schema'

models.sequelize
  .sync({force: true})
  .then(() => console.log('Database created'));