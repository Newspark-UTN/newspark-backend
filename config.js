const milieu = require('milieu');

const config = milieu('newspark-backend', {
  environment: 'dev',
  server: {
    port: 8080
  },
  mongo: {
    //url: 'mongodb://190.114.222.125:27000/newspark'
    url: 'mongodb://admin:newspark@ds033036.mlab.com:33036/newspark'
  }
});


module.exports = config;
