export default function (sequelize, DataTypes) {
  return sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    tableName: 'posts',
    classMethods: {
      associate: models => {
        models.Post.belongsTo(models.User, {as: 'author', foreignKey: 'author_id'});
        models.Post.belongsToMany(models.Tag, {through: 'post_tags'});
        models.Post.hasMany(models.Comment);
      }
    }
  });
}