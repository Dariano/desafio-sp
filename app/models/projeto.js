var mongoose = require('mongoose');

module.exports = function() {

	const schema = mongoose.Schema({
		nome: {
			type: String,
			required: true,
			index: {
				uniqui: true
			}
		},
		// tarefas: [{
		// 	descricao: {
		// 		type: String,
		// 		required: true
		// 	},
		// 	dataVencimento: {
		// 		type: Date
		// 	},
		// 	dono: {
		// 		type: String,
		// 		required: true,
		// 	},
		// 	status: {
		// 		type: String
		// 	}
		// }]
	});

	return mongoose.model('Projeto', schema);
}