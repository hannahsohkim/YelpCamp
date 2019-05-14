const express  = require ('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Sight = require('./models/sight');
const seed = require('./db/seeds');

mongoose.connect('mongodb://localhost/sight_see', {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
seed();

app.get('/', (req, res) => {
  res.render('landing');
})

//INDEX - Get and show all campgrounds from DB
app.get('/sights', (req, res) => {
  Sight.find({}, (err, allSights) => {
    if (err) {
      console.log(error, 'ERROR');
    } else {
        res.render('index', {sights: allSights})
    }
  });
})

//CREATE - add new campground to database
app.post('/sights', (req, res) => {
  var name = req.body.name;
  var image = req.body.image;
  var description = req.body.description;
  var newSight = {name: name, image: image, description: description};
  //Create a new campground and save to database
  Sight.create(newSight, (err, newSight) => {
    if (err) {
      console.log(err)
    } else {
      res.redirect('/sights');
    }
  })
})

// NEW - show form to create new campground
app.get('/sights/new', (req, res) => {
  res.render('new');
})

//SHOW - shows info about one campground
app.get('/sights/:id', (req, res) => {
  // find campground with provided id
  Sight.findById(req.params.id, (err, foundSight) => {
    if (err) {
      console.log('ERROR', err)
    }
    res.render('show', {sight: foundSight});
  })
  // show template with that campground
})

var port = 3000;
var ip = '127.0.0.1';

app.listen(port, ip, () => {
  console.log('SitesToSight server has started')
})