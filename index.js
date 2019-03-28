const fs = require('fs');
const path = require('path')
const express = require('express');
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')

const dataFunction = require('./assets/js/dataFunction.js')

const app = express()
const port = 8080


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res, next) => {
  res.render('index', dataFunction.getData())
})
app.get('/start-time', (req, res, next) => {
 dataFunction.startTime();
  res.redirect('/')
})
app.get('/pause-time', (req, res, next) => {
  dataFunction.pauseTime();
  res.redirect('/')
})

app.post('/change-score', (req, res, next) => {
  const obj = {
    homeTeam: {
      name: "Ajax",
      logo: "/img/AFCA-logo.png",
      score: req.body.scoreHome,
      yellowCards: req.body.yellowCardsHome,
      redCards: req.body.redCardsHome,
      fouls: req.body.foulsHome,
    },
    awayTeam: {
      name: "PSV",
      logo: "/img/PSV-logo.png",
      score: req.body.scoreAway,
      yellowCards: req.body.yellowCardsAway,
      redCards: req.body.redCardsAway,
      fouls: req.body.foulsAway,
    }
  }
  dataFunction.saveData(obj)
  res.redirect('/');
});

app.post('/change-score-client', (req, res, next) => {
  dataFunction.saveData(req.body)
});

// Server side
app.engine('hbs', hbs({ extname: 'hbs' }));
app.set('views', path.join(__dirname, '/assets/view/'))
app.set('view engine', 'hbs')

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
