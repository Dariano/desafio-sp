describe('Nova tarefa', function () {

    var $componentController;
    var ctrl, $stateParams, $rootScope, Tarefa, moment, $q;

    beforeEach(module('desafio'));

    beforeEach(inject(function (_$componentController_, _Tarefa_, _$stateParams_, _$rootScope_, _moment_, _$q_) {
        $componentController = _$componentController_;
        var bindings = { tarefa: { nome: 'tarefa 1' } };

        Tarefa = _Tarefa_;
        $stateParams = _$stateParams_;
        $rootScope = _$rootScope_;
        moment = _moment_;
        $q = _$q_;

        spyOn(Tarefa, 'salva').and.callThrough();

        ctrl = $componentController('novaTarefa', {
            Tarefa: _Tarefa_,
            $stateParams: _$stateParams_,
            $rootScope: _$rootScope_,
            moment: _moment_
        },
            bindings);
    }));

    it('deve está definido', function () {
        expect($componentController).toBeDefined();
    });

    it('deve expor o objeto tarefa', function () {
        expect(ctrl.tarefa).toBeDefined();
        expect(ctrl.tarefa.nome).toBe('tarefa 1');
    });

    it('não deve passar quando a tacla for diferente de entrer', function () {
        var mockEvent = { which: 12 };
        var experado = ctrl.salva('tarefa, dariano', mockEvent);

        expect(Tarefa.salva).not.toHaveBeenCalled();
    });

    it('não deve passar sem o id do projeto', function () {
        var mockEvent = { which: 13 };
        ctrl.salva('tarefa 1, dariano', mockEvent);

        expect(Tarefa.salva).not.toHaveBeenCalled();
    });

    it('deve chamar Tarefa.salva', function () {
        $stateParams.id = 1;
        var mockEvent = { which: 13 };

        ctrl.salva('tarefa 1, dariano', mockEvent);

        expect(Tarefa.salva).toHaveBeenCalled();
    });
});
