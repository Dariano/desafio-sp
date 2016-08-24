const projetoController = (app) => {

    var Projeto = app.models.projeto;
    var controller = {};

    controller.listaTarefas = (req, res) => {
        const idProjeto = req.params.id;

        Projeto
            .findById(idProjeto)
            .select('tarefas')
            .exec()
            .then(projeto => res.json(projeto.tarefas))
            .catch(erro => res.status(500).json(erro));
    };

    controller.salvarTarefa = (req, res) => {

        const idProjeto = req.params.id;

        Projeto
            .findById(idProjeto)
            .select('tarefas')
            .exec()
            .then(projeto => {

                projeto.tarefas.push({
                    descricao: req.body.descricao,
                    dono: req.body.dono,
                    status: req.body.status
                });

                projeto
                    .save()
                    .then(_projeto => res.json(_projeto))
                    .catch(erro => res.status(500).json(erro));
            });
    };

    controller.obtemTarefa = (req, res) => {
        const idProjeto = req.params.id;
        const idTarefa = req.params.idTarefa;

        Projeto
            .findById(idProjeto)
            .select('tarefas')
            .exec()
            .then(projeto => {
                if (!projeto) throw new Error('Projeto não encontado.');

                const tarefa = projeto.tarefas.find(tarefa => tarefa._id == idTarefa);

                if (!tarefa) throw new Error('Tarefa não encontada.');

                res.json(tarefa);
            })
            .catch(erro => res.status(404).json(erro));
    };

    controller.removerTarefa = (req, res) => {
        const idProjeto = req.params.id;
        const idTarefa = req.params.idTarefa;

        Projeto
            .findById(idProjeto)
            .select('tarefas')
            .exec()
            .then(projeto => {
                projeto.tarefas.pull({ _id: idTarefa });

                projeto
                    .save()
                    .then(() => res.status(204))
                    .catch(erro => res.status(500).json(erro));
            });
    };

    return controller;
};

module.exports = projetoController;