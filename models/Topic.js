const db = require('../db')
const Joi = require('joi')

// creates schema as initiating the model
const Topic = db.define('Topic', {
    hashKey : 'topicNum',
   
    // add the timestamp attributes (updatedAt, createdAt)
    timestamps : true,
   
    schema : {
        topicNum: Joi.number(),
        title: Joi.string(),
        tabooWords: Joi.array(),
    }
  });

module.exports = Topic