
describe('ProjetoController', () => {

    var scope;
    
    beforeEach(() => {
        module('desafio');
        inject(($rootScope) => {
            scope = $rootScope.$new();
        })
    });
        
    
    it('Deve criar um ProjetoController', () => {

        inject(($controller) => {
            var ctrl = $controller('ProjetoController');

            expect(ctrl.temProjetos).toBe(false);
        });
        
    });
        
});
    