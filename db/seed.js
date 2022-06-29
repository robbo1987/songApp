const { db } = require ('./db')
const { Artist, Song } = require ("./models/index")

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all([
      Artist.create({
        name: "Jimmy Hendrix"
      }),
      Song.create({
        name:"The Wind Cries Mary"
      })
    ])
    
  } catch (error) {
    console.log({ error });
  }
};

module.exports = seed;