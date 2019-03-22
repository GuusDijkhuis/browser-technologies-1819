const fs = require('fs');
const path = require('path')
const express = require('express');
const hbs = require('express-handlebars')

const routes = require('./assets/js/routeHandler.js')

const app = express()
const port = 3000

app.get('/', routes.homepage)

// Server side
app.engine('hbs', hbs({ extname: 'hbs' }));
app.set('views', path.join(__dirname, '/assets/view/'))
app.set('view engine', 'hbs')

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
