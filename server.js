const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const userRoutes = require('./server/routes/userApi')
const cors = require('cors')

const api = require('./server/routes/api');
app.use(cors())

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);
// console.log(userRoutes)
app.use('/api/accounts', userRoutes)


// Return other routes to Angular index file..
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Set port
const port = process.env.PORT || '3000';
app.set('port', port);

// Create the HTTP Server
const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));