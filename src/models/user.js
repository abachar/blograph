export default function (sequelize, DataTypes) {
  return sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    tableName: 'users',
    classMethods: {
      associate: models => {
        models.User.hasMany(models.Post, {foreignKey: 'author_id'});
        models.User.hasMany(models.Comment, {foreignKey: 'author_id'});
      }
    }
  });
}