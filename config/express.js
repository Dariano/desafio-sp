var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {
	var app = express();

	// configuração de abiente
	app.set('port', 3000);
	
	//middleware
	app.use(express.static('./build'));
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(require('method-override')());

	//carrega rotas
	load('models', {
			cwd: 'app'
		})
		.then('controllers')
		.then('routes')
		.into(app);

	return app;
};