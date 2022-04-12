var fs = require('fs');

fs.appendFile('login.html', '\nThank you', function (err) {
  if (err) {
    throw err;
  }
  console.log('Saved!');
}); 