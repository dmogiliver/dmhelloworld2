//Load express module with `require` directive
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World from dmogiliver@insightops! Node number 2')
})

//Launch listening server on port 3000
app.listen(3000, function () {
  console.log('app listening on port 3000!')
})


