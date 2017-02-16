
describe('Projeto factory', function () {

    var projeto, httpBackend;;

    beforeEach(module('desafio'));

    beforeEach(inject(function ($httpBackend, Projeto) {
        projeto = Projeto; //$injector.get('Projeto');
        $httpBackend.whenGET(/\.html$/).respond('');
        httpBackend = $httpBackend;
    }));

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('.todos()', function () {
        httpBackend
            .expectGET('/api/projetos')
            .respond(200, ["Toyota", "Honda", "Tesla", "Motorola"]);

        projeto
            .todos()
            .success(function (response) {
                expect(response.length).toEqual(4);
            });

        httpBackend.flush();
    });

    it('.busca(id)', function () {
        httpBackend
            .expectGET('/api/projetos/1')
            .respond(200, { id: 1 });

        projeto
            .busca(1)
            .success(function (response) {
                expect(response.id).toEqual(1);
            });

        httpBackend.flush();
    });

    it('.salva(projeto)', function () {
       httpBackend
            .expectPOST('/api/projetos/')
            .respond(201, { id: 1, nome: 'Projeto' });

        projeto
            .salva({nome: 'Projeto'})
            .success(function (response) {
                expect(response.id).toEqual(1);
                expect(response.nome).toEqual('Projeto');
            });

        httpBackend.flush();
    });

    it('.remove(id)', function () {
        httpBackend
            .expectDELETE('/api/projetos/1')
            .respond(204);

        projeto
            .remove(1)
            .success(function (response, status) {
                expect(status).toEqual(204);
            });

        httpBackend.flush();
    });
});
