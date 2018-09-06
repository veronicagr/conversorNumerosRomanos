const assert = require('assert');
const { intToRoman, romanToInt } = require('../index');


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
        assert.equal(intToRoman('5000'), 'V̅');
    });

    it('Quando digitado 0 deverá retornar não existe 0 em romanos', () => {
        assert.equal(intToRoman(0), 'Não existe 0 em romanos');
    });

    it('Quando digitado um numero maior que 50000 deverá retornar: Não convertemos acima de 5000 em romanos', () => {
        assert.equal(intToRoman('5002'), 'Não convertemos acima de 5000 em romanos');
    });

    it('Quando digitado um numero maior que 50000 deverá retornar: Não convertemos acima de 5000 em romanos', () => {
        assert.equal(intToRoman('11'), 'XI');
    });
});

describe('romanToInt()', function () {
    it('Deveria retornar 1 em inteiros', () => {
        assert.equal(romanToInt('I'), 1);
    });

    it('Deveria retornar 10 em inteiros', () => {
        assert.equal(romanToInt('X'), 10);
    });

    it('Deveria retornar 300 em inteiros', () => {
        assert.equal(romanToInt('CCC'), 300);
    });

    it('Quando  for digitado um número deverá retornar: Digite uma letra correspondente a números romanos', () => {
        assert.equal(romanToInt(1), "Digite uma letra correspondente a números romanos");
    });

    it('Quando nada for digitado deverá retornar: Digite uma letra correspondente a números romanos', () => {
        assert.equal(romanToInt(' '), "Digite uma letra correspondente a números romanos");
    });

    it('Deveria retornar 2000 em inteiros', () => {
        assert.equal(romanToInt('MM'), 2000);
    });
});