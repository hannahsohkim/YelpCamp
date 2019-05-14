const mongoose = require('mongoose');
const Sight = require('../models/sight');
const Comment = require('../models/comment');

const data = [
  {
    name: 'Aurora Borealis',
    image: 'https://farm2.staticflickr.com/1168/541613158_80997d8391.jpg',
    description: 'Northern lights near the Arctic or Antarctic area.'
  },
  {
    name: 'Redwood Park',
    image: 'https://farm9.staticflickr.com/8120/8634008094_d3a905de16.jpg',
    description: 'Beautiful, tall redwood trees.'
  },
  {
    name: 'Lake Tahoe',
    image: 'https://www.photosforclass.com/download/flickr-7611309404',
    description: 'Perfect place to go any season. Go in the summer to enjoy swimming in the lake and go in the winter to play in the snow.'
  }
]

const seed = () => {
  Sight.remove({}, (err) => {
    if(err) {
      console.log(err, 'error removing sights');
    }
    console.log('successfully removed sights');
    data.forEach((sight) => {
      Sight.create(sight, (err, sight) => {
        if(err) {
          console.log(err, 'error adding sight')
        } else {
          console.log('sight successfully added');
          Comment.create({
            text: 'This place was beautiful and so worth it. It looks even better in person and I hope to go back one day.',
            user: 'Hannah'
          }, (err, comment) => {
            if (err) {
              console.log(err, 'error creating comment')
            } else {
              sight.comments.push(comment);
              sight.save();
              console.log('successfully added comment')
            }
          })
        }
      })
    })
  })
}

module.exports = seed;