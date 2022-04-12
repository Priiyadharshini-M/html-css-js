const fs = require('fs')
fs.stat('./test.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(stats.isFile()) 
  console.log(stats.isDirectory()) 
  console.log(stats.isSymbolicLink()) 
  console.log(stats.size) 
})