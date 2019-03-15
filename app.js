var express  = require ('express'),
  app        = express(),
  bodyParser = require('body-parser'),
  mongoose   = require('mongoose')

mongoose.connect('mongodb://localhost/yelp_camp', {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var Campground = mongoose.model('Campground', campgroundSchema);

// Campground.create(
//   {
//     name: 'Lake Rudolph',
//     image: 'https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg',
//     description: 'Lake Rudolph boasts a beautiful, large lake with tons of water activities for you to enjoy.'
//   }, (err, campground) => {
//     if (err) {
//       console.log('ERROR', err)
//     } else {
//       console.log(campground, "CAMPGROUND!!!")
//     }
//   }
// )

// var campgrounds = [
//   {name: 'Lakesdale', image: 'https://pixabay.com/get/e03db50f2bfc1c22d2524518b7444795ea76e5d004b0144497f3c679a2eeb7_340.jpg'},
//   {name: 'Ventura Ranch', image: 'https://pixabay.com/get/ef3cb00b2af01c22d2524518b7444795ea76e5d004b0144497f3c479a3efb7_340.jpg'},
//   {name: 'Jellystone Park', image: 'https://farm1.staticflickr.com/82/225912054_690e32830d.jpg'},
//   {name: 'Lake Rudolph', image: 'https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg'},
// ];

app.get('/', (req, res) => {
  res.render('landing');
})

//INDEX - Get and show all campgrounds from DB
app.get('/campgrounds', (req, res) => {
  Campground.find({}, (err, allCampgrounds) => {
    if (err) {
      console.log(error, 'ERROR');
    }
    res.render('index', {campgrounds: allCampgrounds})
  });
})

//CREATE - add new campground to database
app.post('/campgrounds', (req, res) => {
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  //Create a new campground and save to database
  Campground.create(newCampground, (err, newlyCreated) => {
    if (err) {
      console.log(err)
    } else {
      res.redirect('/campgrounds', {campgrounds: allCampgrounds});
    }
  })
  res.redirect('/campgrounds')
})

// NEW - show form to create new campground
app.get('/campgrounds/new', (req, res) => {
  res.render('new');
})

//SHOW - shows info about one campground
app.get('/campgrounds/:id', (req, res) => {
  // find campground with provided id
  Campground.findById(req.params.id, (err, foundCampground) => {
    if (err) {
      console.log('ERROR', err)
    }
    res.render('show', {campground: foundCampground});
  })
  // show template with that campground
})

var port = 3000;
var ip = '127.0.0.1';

app.listen(port, ip, () => {
  console.log('YelpCamp server has started')
})