const express = require('express');

const path = require('path');

const app = express();
// middleware for static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/fa', express.static(path.join(__dirname, 'fa')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.get('/:userid', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'newsPage.html'));
});

//Google+ login route

/*app.post('/google/auth', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});*/

app.listen(process.env.PORT || 8080);
console.log(`${process.env.PORT || 8080} is the magic port`);
