import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

const db = {};
const sequelize = new Sequelize('blograph_db', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql',
  define: {
    underscored: true
  },
  logging: false
});

// Import all models
fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf(".") !== 0) && (file !== "index.js"))
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

// Create associations
Object.keys(db)
  .filter(modelName => 'associate' in db[modelName])
  .forEach(modelName => db[modelName].associate(db));

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

export default db;