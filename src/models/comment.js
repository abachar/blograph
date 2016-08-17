export default function (sequelize, DataTypes) {
  return sequelize.define('Comment', {
    content: DataTypes.TEXT
  }, {
    tableName: 'comments',
    classMethods: {
      associate: models => {
        models.Comment.belongsTo(models.User, {as: 'author', foreignKey: 'author_id'});
        models.Comment.belongsTo(models.Post);
      }
    }
  });
}