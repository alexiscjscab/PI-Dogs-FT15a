const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {

    id:{
      type: DataTypes.UUID,
      primaryKey: true,
    },

    //nombre
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //altura
    height:{
      type: DataTypes.STRING,
      allowNull: false
    },
    //peso
    weight:{
      type: DataTypes.STRING,
      allowNull: false
    },
    //esperanza de vida
    life_span:{
      type: DataTypes.STRING
    },
    // imagen
    image :{
      type: DataTypes.STRING
    }
  });
};
