export default function (sequelize, DataTypes) {
  return sequelize.define('Tag', {
    label: DataTypes.STRING
  }, {
    tableName: 'tags',
    classMethods: {
      associate: models => {
        models.Tag.belongsToMany(models.Post, {through: 'post_tags'});
      }
    }
  });
}