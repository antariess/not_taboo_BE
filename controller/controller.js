const Topic = require('../models/Topic')

//quering the db
Topic.get(4, function (err, topic) {
    if(err)console.log(err)
    else {
    console.log('hi')
    console.log('got topic', topic.get('title'));
    console.log('got topic', topic.get('tabooWords'));
    }
  });