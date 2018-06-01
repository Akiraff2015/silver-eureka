var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => res.render('index', { title: 'Express', page_name: 'index' }));
router.get('/work', (req, res) => res.render('about', {title: 'field | about', page_name: 'about'}));
router.get('/enquiries', (req, res) => res.render('enquiries', {title: 'field | enquiries', page_name: 'enquiries'}));
router.get('/workforus', (req, res) => res.render('workforus', {title: 'field | work(s) for us', page_name: 'work'}));

module.exports = router;
