const dynamo = require('dynamodb');
const {accessKeyId, secretAccessKey, region} = process.env.NODE_ENV ? process.env : require('./config/config')
const credentials = {
    accessKeyId, 
    secretAccessKey, 
    region
}

dynamo.AWS.config.update(credentials);

module.exports = dynamo
