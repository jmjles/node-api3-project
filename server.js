const Express = require('express');

const app = Express();

const bodyParser = Express.json()
const logger = require('./middleware/logger')
const middleware = [bodyParser,logger]
const apiRoute = require('./users/userRouter')
app.use(...middleware)
app.use('/api/',apiRoute)
app.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});
//custom middleware

module.exports = app;
