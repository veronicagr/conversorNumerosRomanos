const assert = require('assert');
const intToRoman = require('../index');

describe('intToRoman()', function () {
    it('Deveria retornar I em númerais romanos', () => {
        assert.equal(intToRoman('1'), 'I');
    });

    it('Deveria retornar C em númerais romanos', () => {
        assert.equal(intToRoman('100'), 'C');
    });

    it('Deveria retornar D em números romanos', () => {
        assert.equal(intToRoman('500'), 'D');
    });

    it('Deveria retornar CC em números romanos', () => {
        assert.equal(intToRoman('200'), 'CC');
    });

    it('Deveria retornar MMMCM em números em romanos', () => {
        assert.equal(intToRoman('3900'), 'MMMCM');
    });

    it('Quando não digitar nenhum texto, deverá retornar Digite um número', () => {
        assert.equal(intToRoman(''), 'Digite um número');
    });

    it('Quando não digitar nenhum texto deverá retornar Digite um número', () => {
        assert.equal(intToRoman(5000), 'V̅');
    });

    it('Quando digitado 0 deverá retornar não existe 0 em romanos', () => {
        assert.equal(intToRoman(0), 'Não existe 0 em romanos');
    });

    it('Quando digitado um numero maior que 50000 deverá retornar: Não convertemos acima de 5000 em romanos', () => {
        assert.equal(intToRoman(5002), 'Não convertemos acima de 5000 em romanos');
    });
});
