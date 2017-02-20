var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('index')
})

router.get('/heroes', function (req, res, next) {
  res.send(['Hulk', 'Spider-Man', 'Iron Man', 'Doctor Strange', 'Captain America', 'Deadpool', 'Thor', 'Ant-Man', 'Black Widow'])
})

module.exports = router
