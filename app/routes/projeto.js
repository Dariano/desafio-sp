module.exports = function (app) {

	var controller = app.controllers.projeto;

	app.route('/api/projetos')
		.get(controller.listaProjetos)
		.post(controller.salvarProjeto);
		
	app.route('/api/projetos/:id')
		.get(controller.obtemProjeto)
		.delete(controller.removerProjeto);
};