const fs = require('fs')

const content = 'Welcome Priiya'

fs.writeFile('test.txt', content, { flag: 'r+' },err => {
  if (err) {
    console.error(err)
    return
  }
  
})