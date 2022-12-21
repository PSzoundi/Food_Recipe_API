const sequelize = require("../config/config");
const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
   
    label: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false,
    }
   
  },
  {
    sequelize,
    modelName: "recipe",
  }
);

module.exports = Recipe;