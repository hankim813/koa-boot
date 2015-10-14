/**
 * Module Dependencies
 */

var PORT = process.env.PORT || 3000;
var koa = require('koa');
var router = require('koa-route');
var parser = require('koa-bodyparser');
var logger = require('koa-logger');

/**
 * Expose `app`
 */

exports = app = koa();

/**
 * Mount bodyparser && logger
 */

app.use(parser());
app.use(logger());

/**
 * Mount Routes
 */

app.use(router.get('/', function *(){
	this.status = 200;
	return this.body = 'hello world';
}));

/**
 * Listen on PORT
 */

app.listen(PORT);
console.log('Magic happens on port ' + PORT);
