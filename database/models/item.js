"use strict";
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    "Item",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      place: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      lost_found: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      confirmed: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {}
  );

  Item.associate = function(models) {
    Item.belongsTo(models.User, { foreignKey: "user_id", targetKey: "id" });
    Item.belongsToMany(models.Tag, {
      through: "items_tags",
      foreignKey: "item_id",
      otherKey: "tag_id"
    });
    Item.hasOne(models.Image, { foreignKey: "item_id" });
  };
  return Item;
};
