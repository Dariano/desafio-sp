module.exports = function (app) {

	var controller = app.controllers.tarefa;

	app.route('/projetos/:id/tarefas')
		.get(controller.listaTarefas)
		.post(controller.salvarTarefa);
		
	app.route('/projetos/:id/tarefas/:idTarefa')
		.get(controller.obtemTarefa)
		.delete(controller.removerTarefa);
};