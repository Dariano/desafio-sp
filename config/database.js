var mongoose = require('mongoose');

module.exports = function (uri) {
	//mongoose.connect(uri);
	var MONGO_DB;
	var FIG_DB = process.env.DB_1_PORT;
	if (FIG_DB) {
		MONGO_DB = FIG_DB.replace("tcp", "mongodb") + "/dev_db";
	} else {
		MONGO_DB = process.env.MONGO_URL;
	}
	mongoose.connect(MONGO_DB);

	mongoose.connection.on('connected', function () {
		console.log('Mongoose! Conectado em ' + uri);
	});

	mongoose.connection.on('disconnected', function () {
		console.log('Mongoose! Desconectado de ' + uri);
	});

	/* global process  */
	process.on('SIGINT', function () {
		mongoose.connection.close(function () {
			console.log('Mongoose! Desconectado pelo término da aplicação');

			process.exit(0);
		});
	});
};