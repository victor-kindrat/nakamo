let host = '127.0.0.1';
let port = 8000;

let express = require('express');

let app = express();
app.use(express.static("."));
// app.use(express.static(__dirname + '/public/'));


console.log(__dirname + '/public')

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html')
})
app.get('/services', function (request, response) {
    response.sendFile(__dirname + '/services.html')
})

app.listen(port, host);

console.log('server listened at port: ' + port)