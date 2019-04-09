"use strict";
module.exports = (sequelize, DataTypes) => {
  const items_tags = sequelize.define(
    "items_tags",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      item_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "items"
        }
      },
      tag_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "tags"
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
  items_tags.associate = function(models) {
    // associations can be defined here
  };
  return items_tags;
};
