const express = require('express');
var path = require('path');
const app = express();
const port = 3000;

// Setup static files
app.use('/', express.static('dist'));

app.get('/api/player-data', function (req, res) {
    res.sendFile(path.join(__dirname + '/player-data.json'));
});

// start app
app.listen(port, () => {
    console.log('\x1b[36m%s\x1b[0m', `app listening on port ${port}...`);
    console.log('\x1b[33m%s\x1b[0m', `Open http://localhost:${port}/ in your browser`);
});