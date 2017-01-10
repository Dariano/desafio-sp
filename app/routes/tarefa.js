module.exports = function (app) {

	var tarefaController = app.controllers.tarefa;

	app.route('/api/projetos/:id/tarefas')
		.get(tarefaController.lista)
		.post(tarefaController.salva);
		
	app.route('/api/projetos/:id/tarefas/:idTarefa')
		.get(tarefaController.busca)
		.put(tarefaController.altera)
		.delete(tarefaController.remove);
};