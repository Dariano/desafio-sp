const projetoController =  app => {

    var Projeto = app.models.projeto;
    var controller = {};

    controller.listaProjetos = (req, res) => {
        Projeto
            .find()
            .exec()
            .then(projetos => res.json(projetos))
            .catch(erro => res.status(500).json(erro));
    };

    controller.salvarProjeto = (req, res) => {
        Projeto
            .create(req.body)
            .then(projeto => res.json(projeto))
            .catch(erro => res.status(500).json(erro));
    };

    controller.obtemProjeto = (req, res) => {
        const idProjeto = req.params.id;

        Projeto
            .findById(idProjeto)
            .exec()
            .then(projeto => {
                if (!projeto) throw new Error('Projeto  não encontado.')

                res.json(projeto);
            })
            .catch(erro => res.status(404).json(erro));
    };

    controller.removerProjeto = (req, res) => {
        const idProjeto = req.params.id;
        Projeto
            .remove({ _id: idProjeto})
            .exec()
            .then(() => res.status(204).end())
            .catch(erro => res.status(500).json(erro));
    };

    return controller;
};

module.exports = projetoController;