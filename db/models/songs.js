

const Sequelize = require('sequelize')
const {db} = require('../db')


const Song = db.define("song", {
    name: {
      type: Sequelize.DataTypes.STRING
    }
  });
  
  module.exports = Song;