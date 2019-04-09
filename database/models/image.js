"use strict";
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      path: {
        type: DataTypes.STRING,
        allowNull: false
      },
      item_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "items",
          key: "id"
        },
        allowNull: false
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
  Image.associate = function(models) {
    Image.belongsTo(models.Item, { foreignKey: "item_id" });
  };
  return Image;
};
