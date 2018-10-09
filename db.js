const dynamo = require('dynamodb');
const credentials = require('./config/config')
dynamo.AWS.config.update(credentials);

module.exports = dynamo
