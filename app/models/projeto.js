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
		tarefas: [ require('./tarefa')()]
	});

	return mongoose.model('Projeto', schema);
}