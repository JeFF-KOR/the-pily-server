'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Magazine_Feed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Magazine, {
        foreignKey: 'magazine_id'
      });
      this.belongsTo(models.Feed, {
        foreignKey: 'feed_id'
      })
    }
  };
  Magazine_Feed.init({
    magazine_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    feed_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    position_x: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    position_y: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Magazine_Feed',
  });
  return Magazine_Feed;
};