const Topic = require('../models/Topic')

//quering the db
const getTopic = (req, res, next) => {
  console.log(req.query)
  const num = parseInt(req.query.num)
  Topic.get(num, function (err, topic) {
    if(err)console.log(err)
    else {
      console.log(topic)
      const topicObj = {
        topicNum: num,
        title: topic.get('title'),
        tabooWords: topic.get('tabooWords'),
      }
      console.log(topicObj)
      res.send({topicObj})
    }
  });
}

module.exports = getTopic