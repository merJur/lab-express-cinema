  // Add here the script that will be run to actually seed the database (feel free to refer to the previous lesson)
  
  // ... your code here
  const mongoose = require('mongoose')

  const Movie = require('../models/movie.model')
  const movies = require('../seeds/movie.seed.json')
 console.log('hola modelo película')

require('../db/index')

  console.log('entra baseDeDatos')

  mongoose.connection.once('open', () => {
    mongoose.connection.db.dropDatabase()
      .then(() => {
        console.info('Db dropped')
  
        return Movie.create(movies)
      })
      .then(createdMovies => {
        createdMovies.forEach(movie => console.log(`${movie.title} was created`))
  
        // Cerrar la conexion
        return mongoose.connection.close()
      })
      .then(() => {
        console.log('Connection closed')
  
        process.exit(1)
      })
      .catch(err => {
        console.error(err)
        process.exit(0)
      })
  })