module.exports = function (app) {

	var tarefaController = app.controllers.tarefa;

	app.route('/projetos/:id/tarefas')
		.get(tarefaController.lista)
		.post(tarefaController.salva);
		
	app.route('/projetos/:id/tarefas/:idTarefa')
		.get(tarefaController.busca)
		.put(tarefaController.altera)
		.delete(tarefaController.remove);
};