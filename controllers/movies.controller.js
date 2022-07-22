const Movie = require('../models/movie.model')


module.exports.list = (req, res, next) =>{
    const {title} = req.query

    const options = {}

    if (title){
        options.title = title
    }

    Movie.find(options)
    .then(movies => {
        console.log(movies)
        res.render('movies', {movies})
    })

}

module.exports.movieDetail = (req, res, next) => {
    const {id} = req.params

    Movie.findById(id)
    .then(movie => {
        res.render('movieDetail', {movie})
    })
}