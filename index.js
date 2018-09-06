const hundredsRoman = {
    0: "",
    1: "C",
    2: "CC",
    3: "CCC",
    4: "CD",
    5: "D",
    6: "DC",
    7: "DCC",
    8: "DCCC",
    9: "CM",
};

const unitariesRoman = {
    0: "",
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX"
};

const dozensRoman = {
    0: "",
    1: "X",
    2: "XX",
    3: "XXX",
    4: "XL",
    5: "L",
    6: "LX",
    7: "LXII",
    8: "LXIII",
    9: "XC",
};

const elevenToNineteenRoman = {
    0: "",
    11: "XI",
    12: "XII",
    13: "XIII",
    14: "XIV",
    15: "XV",
    16: "XVI",
    17: "XVII",
    18: "XVIII",
    19: "XIX",
};

const millharRoman = {
    0: "",
    1: "M",
    2: "MM",
    3: "MMM",
    4: "I̅V̅",
    5: "V̅",
};

function returnsDozens(num) {
    let number = num % 100;
    let unitary = number % 10;
    let dozen = parseInt((number % 100) / 10);

    if (number >= 1 && number <= 9) {
        return unitariesRoman[number];
    }

    if (number >= 11 && number <= 19) {
        return elevenToNineteenRoman[number];
    }

    return dozensRoman[dozen] + unitariesRoman[unitary];
}

function returnsHundreds(num) {
    let hundred = parseInt((num % 1000) / 100);
    return hundredsRoman[hundred];
}

function returnsMilhar(num) {
    let milhar = parseInt((num % 10000) / 1000);

    return millharRoman[milhar];
}

function intToRoman(num) {
    if (num === "") {
        return "Digite um número";
    }

    if (num === 0) {
        return "Não existe 0 em romanos";
    }

    if (num > 5000) {
        return "Não convertemos acima de 5000 em romanos";
    }

    return returnsMilhar(num) + returnsHundreds(num) + returnsDozens(num);
}

function romanToInt(str) {

    if (typeof str !== "string" || str === " ") {
        return "Digite uma letra correspondente a números romanos";
    }
    if (str === str.toLowerCase()) {
        return "Digite letras maiúsculas"
    }

    let resultado = 0;

    let numDecimal = [5000, 4000, 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let numRoman = ["V̅", "I̅V̅", "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    for (let i = 0; i <= numDecimal.length; i++) {
        while (str.indexOf(numRoman[i]) === 0) {
            resultado += numDecimal[i];
            str = str.replace(numRoman[i], "");
        }
    }
    return resultado;
}

module.exports = { intToRoman, romanToInt };

