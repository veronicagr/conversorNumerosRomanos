const hundreds = {
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

const unitaries = {
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

const dozens = {
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

const elevenToNineteen = {
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

const milteste = {
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
    let dozen = parseInt(number % 100 / 10);

    if (number >= 1 && number <= 9) {
        return unitaries[number];
    }

    if (number >= 11 && number <= 19) {
        return elevenToNineteen[number];
    }
    return dozens[dozen] + unitaries[unitary];
}
function returnsHundreds(num) {
    let hundred = parseInt(num % 1000 / 100);
    return hundreds[hundred];
}

function returnsMillion(num) {
    let million = parseInt(num % 10000 / 1000);
    let unitary = parseInt((num % 1000) / 1000);


    return milteste[million]
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

    return returnsMillion(num) + returnsHundreds(num) + returnsDozens(num);
}
module.exports = intToRoman;
