const db = require('../db')
const Topic = require('../models/Topic')
const data = require('../seed/data.json')


Topic.create(data, function (err, topic) {
  if(err) console.log(err)
  else {
      console.log('created a topic in DynamoDB')
      console.log(topic[0].attrs)
  }
});

// console.log(Topic)
// creating the table
// db.createTables(function(err) {
//     if (err) {
//       console.log('Error creating tables: ', err);
//     } else {
//       console.log('Topic has been created');
//     }
// });

//deleting the table
// Topic.deleteTable(function(err) {
//     if (err) {
//       console.log('Error deleting table: ', err);
//     } else {
//       console.log('Table has been deleted');
//     }
//   });