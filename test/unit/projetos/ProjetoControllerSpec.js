
xdescribe('ProjetoController', function() {

    var scope;
    
    beforeEach(function() {
        module('desafio');
        inject(function($rootScope) {
            scope = $rootScope.$new();
        })
    });
        
    
    it('Deve criar um ProjetoController', function() {

        inject(function($controller) {
            var ctrl = $controller('ProjetoController');

            expect(ctrl.temProjetos).toBe(false);
        });        
    });        
});
    