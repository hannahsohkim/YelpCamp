var express = require ('express');
var app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('landing');
})

app.get('/campgrounds', (req, res) => {
  var campgrounds = [
    {name: 'Salmon Creek', image: 'https://www.photosforclass.com/download/pixabay-691424?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fef3cb00b2af01c22d2524518b7444795ea76e5d004b0144497f2c478a2efb0_960.jpg&user=Free-Photos'},
    {name: 'Lakesdale', image: 'https://www.photosforclass.com/download/pixabay-1851092?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104490f2c37ca6e8b7bd_960.jpg&user=Pexels'},
    {name: 'Ventura Ranch', image: 'https://www.photosforclass.com/download/flickr-2602356334'},
    {name: 'Jellystone Park', image: 'https://www.photosforclass.com/download/flickr-14707566622'},
    {name: 'Lake Rudolph', image: 'https://www.photosforclass.com/download/pixabay-1851092?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104490f2c371a2eab4ba_960.jpg&user=Pexels'},
  ];

  res.render('campgrounds', {campgrounds: campgrounds});
})

var port = 3000;
var ip = '127.0.0.1';

app.listen(port, ip, () => {
  console.log('YelpCamp server has started')
})