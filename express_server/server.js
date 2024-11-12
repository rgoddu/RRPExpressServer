const express = require('express')

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/*', (req, res) => {
    res.send('hello world')
});

app.listen( PORT , '0.0.0.0', () => {
    console.log('server is listening on port', PORT)
})