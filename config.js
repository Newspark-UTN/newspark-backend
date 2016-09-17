const milieu = require('milieu');

const config = milieu('newspark-backend', {
  environment: 'dev',
  server: {
    port: 8080
  },
  mongo: {
    //url: 'mongodb://190.114.222.125:27000/newspark'
    url: 'mongodb://192.168.0.14:27017/newspark'
  }
});


module.exports = config;
