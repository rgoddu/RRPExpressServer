const express = require('express')

const app = express();

app.get('/*', (req, res) => {
    res.send('hello world')
});

const PORT = process.env.PORT || 3000;

app.listen( PORT , '0.0.0.0', () => {
    console.log('server is listening on port', PORT)
})