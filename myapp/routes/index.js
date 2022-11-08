const usersRouter = require('./users');
const ex1Router = require('./ex1');
const ex2Router = require('./ex2');
const ex3Router = require('./ex3');
const ex4Router = require('./ex4');

/* GET home page. */

const init = app => {
  app.use('/', usersRouter);
  app.use('/ex1', ex1Router);
  app.use('/ex2', ex2Router);
  app.use('/ex3', ex3Router);
  app.use('/ex4', ex4Router);

}

module.exports = { init }

