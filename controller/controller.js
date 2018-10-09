const Topic = require('../models/Topic')

//quering the db
const getTopic = (req, res, next) => {
  const num = parseInt(req.query.num)
  Topic.get(num, function (err, topic) {
    if(err)console.log(err)
    else {
      const topicObj = {
        topicNum: num,
        title: topic.get('title'),
        tabooWords: topic.get('tabooWords'),
      }
      res.send({topicObj})
    }
  });
}

module.exports = getTopic