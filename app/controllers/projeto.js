const projetoController = function (app) {

	var Projeto = app.models.projeto;
	var controller = {};

	controller.listaProjetos = function (req, res) {
		res.json({ mensagem: 'projetos'});
	};

	controller.salvarProjeto = function (req, res) {
		Projeto
			.create(req.body)
			.then(function (contato) {
				res.json(contato);
			})
			.catch(function (erro) {
				console.log(erro);
				res.status(500).json(erro);
			});
	};

	controller.obtemProjeto = function (req, res) {
		res.json({mensagem: 'Projeto retornado'});
	};

	controller.removerProjeto = function (req, res) {
		res.json({mensagem: 'Projeto removido'})
	};

	return controller;
};

module.exports = projetoController;