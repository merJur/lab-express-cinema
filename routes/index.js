const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', (req, res, next)=> res.render('movies'));

router.get('/movieDetails', (req, res, next) => res.render('movieDetails'));

module.exports = router;