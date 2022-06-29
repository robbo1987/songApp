const Song = require ("./songs")
const Artist = require ('./artists')

Song.belongsTo(Artist)
Artist.hasMany(Song)

module.exports = {
  Song,
  Artist
}