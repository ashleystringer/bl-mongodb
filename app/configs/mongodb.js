module.exports = {
    connections: {
      $default: {
        uri: 'mongodb://localhost/tutorial',
        seed: false,    // seed the database connection [default=false]
        options : {            // mongoose connection options
          
        }
      },
      
      connection2: {
        // ...
      }
    }
  };