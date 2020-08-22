const fs = require('fs')
const express = require('express')
const rewrite = require('express-urlrewrite')
const serveStatic = require('serve-static')
const path = require('path')
var history = require('connect-history-api-fallback');


const app = express();

app.use(history({
    verbose: true,
}));

app.use(express.static(path.join(__dirname, 'dist')));

//this * route is to serve project on different page routes except root `/`
// app.get('/.*/', function (req, res) {
// 	res.render(path.join(__dirname, '/dist/index.html'))
// })
app.use(history({
    index: '/dist/index.html'
}));

app.use(express.static(path.join(__dirname, 'dist')));

const port = process.env.PORT || 8081
app.listen(port)
console.log(`app is listening on port: ${port}`)