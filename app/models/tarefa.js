var mongoose = require('mongoose');

module.exports = function() {

	const schema = mongoose.Schema({
		descricao: {
			type: String,
			required: true
		},
		dataVencimento: {
			type: String
		},
		dono: {
			type: String,
			required: true,
		},
		status: {
			type: String
		}
	});

	return schema;
}