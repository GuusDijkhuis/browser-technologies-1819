const fs = require('fs');
const path = require('path')
const express = require('express');
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')

const dataFunction = require('./assets/js/dataFunction.js')

// const routes = require('./assets/js/routeHandler.js')

const app = express()
const port = 3000


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/assets'))

app.get('/', (req, res, next) => {
  res.render('index', dataFunction.getData())
})
app.post('/change-score', (req, res, next) => {
  const obj = {
    homeTeam: {
      score: req.body.scoreHome,
      yellowCards: req.body.yellowCardsHome,
      redCards: req.body.redCardsHome,
      fouls: req.body.foulsHome,
    },
    awayTeam: {
      score: req.body.scoreAway,
      yellowCards: req.body.yellowCardsAway,
      redCards: req.body.redCardsAway,
      fouls: req.body.foulsAway,
    }
  }
  dataFunction.saveData(obj)
  res.redirect('/');
});

// Server side
app.engine('hbs', hbs({ extname: 'hbs' }));
app.set('views', path.join(__dirname, '/assets/view/'))
app.set('view engine', 'hbs')

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
