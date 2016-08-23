module.exports = function (app) {

	var controller = app.controllers.projeto;

	app.route('/projetos')
		.get(controller.listaProjetos)
		.post(controller.salvarProjeto);
		
	app.route('/projetos/:id')
		.get(controller.obtemProjeto)
		.delete(controller.removerProjeto);
};