const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index.ejs', { title: 'Index' });
});

app.listen(port, (err, port) => {
  if (err)
    console.log(err);
  else {
    console.log(`PS Project Running on port ${port}`)
  }
})