let listaPai = {
    codigo: 1,
    nome: 'nome 1',
    cooperativas: [
        {
            id: 11,
            descricao: 'descrição 1'
        },
        {
            id: 12,
            descricao: 'descrição 2'
        },
        {
            id: 13,
            descricao: 'descrição 3'
        },
    ]
};

let listaPai2 = {
    codigo: 2,
    nome: 'nome 2',
    cooperativas: [
        {
            id: 21,
            descricao: 'descrição 1'
        },
        {
            id: 22,
            descricao: 'descrição 2'
        },
        {
            id: 23,
            descricao: 'descrição 3'
        },
    ]
};

let listaPai3 = {
    codigo: 3,
    nome: 'nome 3',
    cooperativas: [
        {
            id: 31,
            descricao: 'descrição 1'
        },
        {
            id: 32,
            descricao: 'descrição 2'
        },
        {
            id: 33,
            descricao: 'descrição 3'
        },
    ]
};

let listaPai4 = {
    codigo: 4,
    nome: 'nome 4',
    cooperativas: [
        {
            id: 41,
            descricao: 'descrição 1'
        },
        {
            id: 42,
            descricao: 'descrição 2'
        },
        {
            id: 43,
            descricao: 'descrição 3'
        },
    ]
};

let lista = [listaPai, listaPai2, listaPai3, listaPai4];

function transformar() {
    return lista
        .map(cooperativasMap)
        .reduce((a, b) => a.concat(b));
}

function cooperativasMap(item) {
    return item.cooperativas.map(addCentral(item));
}

function addCentral(item) {
    return (coop) => {
        coop.central = item.nome;
        return coop;
    };
}

let novaLista = transformar();

console.log(novaLista);