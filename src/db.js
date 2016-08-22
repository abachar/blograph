import _ from 'lodash'
import Promise from 'promise'
import winston from 'winston'
import models from './models'

const tags = require('./data/tags.json');

function attachTags() {
  const tagIds = _.map(tags, 'id');
  const randomTags = () => _.sampleSize(tagIds, _.random(5, 7));
  const attachToPost = (post) => models.Tag
    .findAll({where: {id: {$in: randomTags()}}})
    .then(tags => tags.forEach(tag => post.addTag(tag)));

  return models.Post.findAll().then(posts => {
    posts.forEach(attachToPost);
  });
}

export default function createDB() {
  return new Promise((resolve, reject) => {
    models
      .sequelize
      .sync({force: true})
      .then(() => winston.info('BloGraph database created.'))
      // Create users
      .then(() => models.User.bulkCreate(require('./data/users.json')))
      // Create posts
      .then(() => models.Post.bulkCreate(require('./data/posts.json')))
      // Create comments
      .then(() => models.Comment.bulkCreate(require('./data/comments.json')))
      // Create tags
      .then(() => models.Tag.bulkCreate(tags))
      .then(() => attachTags())
      .then(() => winston.info('BloGraph fake data injected.'))
      .then(resolve, reject)
  });
}