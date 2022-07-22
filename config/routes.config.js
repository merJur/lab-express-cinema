const router = require('express').Router()
const miscController =require('../controllers/misc.controller')
const moviesController = require ('../controllers/movies.controller')

//miscelanea -> home page
router.get('/', miscController.home)

//movies y moviesDetail pages
router.get('/movies', moviesController.list)
router.get('/movies/:id', moviesController.movieDetail)
router.get('/movieDetails', (req, res, next) => res.render('movieDetails'));


//exportación de las rutas
module.exports= router