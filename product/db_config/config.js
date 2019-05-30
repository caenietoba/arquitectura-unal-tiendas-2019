let mongoose = require('mongoose');

const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'fcc-Mail';      // REPLACE WITH YOUR DB NAME
const url = 'mongodb://localhost:27017/productsdb';

class Database {
  constructor() {
    this._connect()
  }

_connect() {
     //mongoose.connect(`mongodb://${server}/${database}`, {useNewUrlParser: true})
     mongoose.connect(url, {useNewUrlParser: true})  
     .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

module.exports = new Database()