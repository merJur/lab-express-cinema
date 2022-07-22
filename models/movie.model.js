const mongoose = require('mongoose')


const movieSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, 'Title is required']
    },
    director: {
      type: String,
      default: 'Anonymous'
    },
    starts: {
      type: [String],
      required: [true, 'Add a the starts´s name'],
    },
    image: {
        type : String,
        default: 'https://via.placeholder.com/150'
    },
    description: {
        type: String,
        required :[true, 'Add the movie´s description'],
        minLength: 20
    },
    showtimes: {
        type: [String]

    }
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie