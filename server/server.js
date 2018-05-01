const express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.status(200).send('hello World');
});
app.get('/users', (req, res) => {
    var users = [
        { name: 'user a', age: 10 },
        { name: 'user b', age: 11 },
        { name: 'user c', age: 12 },
    ];
    res.status(200).send(users);
});
app.listen(3000, () => {
    console.log('listening to port 3000');
});
module.exports.app = app;