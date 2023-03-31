const express = require('express');
const app = express();
const path = require("path");

app.set('view engine', 'pug');
app.set("views", path.join(__dirname ,"views"));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req, res) {
  res.render('AO_dashboard');
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
});
