const promisee = new Promise(function(resolve, reject) {// Producing Code-May take some time
    setTimeout(function() { 
        resolve("Helloworld prints after 5 seconds"); }, 5000);
  });
  
  promisee.then(function(value) {// Consuming Code-Must wait for a fulfilled Promise.
    console.log(value);
  });