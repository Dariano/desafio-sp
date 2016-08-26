const projetoController = (app) => {

    var Projeto = app.models.projeto;
    var controller = {};

    controller.lista = (req, res) => {
        const idProjeto = req.params.id;

        Projeto
            .findById(idProjeto)
            .select('tarefas')
            .exec()
            .then(projeto => res.json(projeto.tarefas))
            .catch(erro => res.status(500).json(erro));
    };

    controller.salva = (req, res) => {

        const idProjeto = req.params.id;

        Projeto
            .findById(idProjeto)
            .select('tarefas')
            .exec()
            .then(projeto => {

                projeto.tarefas.push({
                    descricao: req.body.descricao,
                    dono: req.body.dono,
                    dataVencimento: req.body.dataVencimento,
                    status: req.body.status
                });

                projeto
                    .save()
                    .then(_projeto => {
                        const tarefa = _projeto.tarefas[_projeto.tarefas.length -1];
                        res.json(tarefa);
                    })
                    .catch(erro => res.status(500).json(erro));
            });
    };

    controller.altera = (req, res) => {

        const idProjeto = req.params.id;
        const idTarefa = req.params.idTarefa;

        Projeto
            .findById(idProjeto)
            .select('tarefas')
            .exec()
            .then(projeto => {

                const tarefa = projeto.tarefas.id(idTarefa);
                tarefa.concluida = req.body.concluida;
                   
                projeto
                    .save()
                    .then(_projeto => {
                        const tarefa = _projeto.tarefas.id(idTarefa);
                        res.json(tarefa);
                    })
                    .catch(erro => res.status(500).json(erro));
            });
    };

    controller.busca = (req, res) => {
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

    controller.remove = (req, res) => {
        const idProjeto = req.params.id;
        const idTarefa = req.params.idTarefa;

        Projeto
            .findById(idProjeto)
            .select('tarefas')
            .exec()
            .then(projeto => {
                projeto.tarefas.id(idTarefa).remove();

                projeto
                    .save()
                    .then(() => res.status(204))
                    .catch(erro => res.status(500).json(erro));
            });
    };

    return controller;
};

module.exports = projetoController;