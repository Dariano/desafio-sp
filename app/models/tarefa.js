var mongoose = require('mongoose');

module.exports = function() {

	const schema = mongoose.Schema({
		descricao: {
			type: String,
			required: true
		},
		dataVencimento: {
			type: Date
		},
		dono: {
			type: String,
			required: true,
		},
		concluida: {
			type: Boolean
		}
	});

	return schema;
}