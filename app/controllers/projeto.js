const projetoController = function (app) {

	var Projeto = app.models.projeto;
	var controller = {};

	controller.listaProjetos = function (req, res) {
		Projeto
			.find()
			.exec()
			.then(function (projetos) {
				res.json(projetos);
			})
			.catch(function (erro) {
				res.status(500).json(erro);
			});
	};

	controller.salvarProjeto = function (req, res) {
		console.log(req.body);
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
		const idProjeto = req.params.id;

		Projeto
			.findById(idProjeto)
			.exec()
			.then(function (projeto) {
				if (!projeto) throw new Error('Projeto  não encontado.')

				res.json(projeto);
			})
			.catch(function (erro) {
				console.log(erro);
				res.status(404).json(erro);
			});
	};

	controller.removerProjeto = function (req, res) {
		const idProjeto = req.params.id;
		Projeto
			.remove({ _id: idProjeto})
			.exec()
			.then(function () {
				res.status(204).end()
			})
			.catch(function (erro) {
				res.status(500).json(erro);
			});
	};

	return controller;
};

module.exports = projetoController;