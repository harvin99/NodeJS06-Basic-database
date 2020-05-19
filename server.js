// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
//For body parser
app.use(express.urlencoded({extended: false}));

//Template view engine
app.set('view engine', 'pug');
app.set('views', './views');
//Router
const list = []
app.get('/', (req, res) => {
  const task = req.body.todo;
  console.log(task);
  list.push(task);
  res.render('index', {
    list: list
  })
})
// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
