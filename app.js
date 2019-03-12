var express = require ('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var campgrounds = [
  {name: 'Lakesdale', image: 'https://pixabay.com/get/e03db50f2bfc1c22d2524518b7444795ea76e5d004b0144497f3c679a2eeb7_340.jpg'},
  {name: 'Ventura Ranch', image: 'https://pixabay.com/get/ef3cb00b2af01c22d2524518b7444795ea76e5d004b0144497f3c479a3efb7_340.jpg'},
  {name: 'Jellystone Park', image: 'https://farm1.staticflickr.com/82/225912054_690e32830d.jpg'},
  {name: 'Lake Rudolph', image: 'https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg'},
];

app.get('/', (req, res) => {
  res.render('landing');
})

app.get('/campgrounds', (req, res) => {
  res.render('campgrounds', {campgrounds: campgrounds});
})

app.post('/campgrounds', (req, res) => {
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  campgrounds.push(newCampground);
  res.redirect('/campgrounds')
})

app.get('/campgrounds/new', (req, res) => {
  res.render('new');
})

var port = 3000;
var ip = '127.0.0.1';

app.listen(port, ip, () => {
  console.log('YelpCamp server has started')
})