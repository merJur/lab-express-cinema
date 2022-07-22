const Movie = require('../models/movie.model')


module.exports.list = (req, res, next) =>{
    const {title} = req.query

    Movie.find(title)
    .then(movies => {
        console.log('entra movie.coontroller')
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