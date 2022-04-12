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
  
  const file_name='./test.txt';
  console.log(path.dirname(file_name))
  console.log(path.basename(file_name))
  console.log(path.extname(file_name))
})
