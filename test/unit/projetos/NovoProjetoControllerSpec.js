
describe('NovoProjetoController', function () {

    var Projeto, $rootScope, $state, _$httpBackend_;

    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('desafio'));

    beforeEach(inject(function (_$controller_, _Projeto_, _$state_, _$httpBackend_) {
        $controller = _$controller_;
        Projeto = _Projeto_;
        $state = _$state_;

        NovoProjetoController = $controller('NovoProjetoController', { Projeto: Projeto, $state: $state });
    }));

    it('deve está definido', function () {
        expect(NovoProjetoController).toBeDefined();
    });


    it('deve chamar Projeto.sava()', function () {
        spyOn(Projeto, 'salva').and.callThrough();

        NovoProjetoController
            .salva('Projeto 1');

        expect(Projeto.salva).toHaveBeenCalled();
    });

});

describe('NovoProjetoController salvar com sucesso', function () {

    var Projeto, $rootScope, $state, $httpBackend;

    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('desafio'));

    beforeEach(inject(function (_$controller_, _Projeto_, _$state_, _$rootScope_, _$httpBackend_) {
        $controller = _$controller_;
        Projeto = _Projeto_;
        $state = _$state_;
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;

        $httpBackend.whenGET(/\.html$/).respond('');

        NovoProjetoController = $controller('NovoProjetoController', {
            Projeto: Projeto,
            $state: $state,
            $rootScope: $rootScope
        });
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('deve chamar $rootScope.$emit e  $state.go', function () {

        spyOn($rootScope, '$emit').and.callThrough();
        spyOn($state, 'go').and.callThrough();

        $httpBackend
            .expectPOST('/api/projetos/')
            .respond(201, { id: 1, nome: 'Projeto 1' });

        NovoProjetoController
            .salva('Projeto 1');

        $httpBackend.flush();

        expect($state.go).toHaveBeenCalled();
        expect($rootScope.$emit).toHaveBeenCalled();
    })

    it('deve disparar erro ao salvar', function () {

        $httpBackend
            .expectPOST('/api/projetos/')
            .respond(500, '');

        NovoProjetoController
            .salva('Projeto 1');
            
        $httpBackend.flush();

        expect(NovoProjetoController.status).toBe('Erro!');
    });
});