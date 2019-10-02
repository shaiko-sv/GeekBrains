"use strict";

// задание 1

let a = 1, b = 1, c, d;
c = ++a; console.log(c); // 2 - префиксный инкримент перед переменной a сначала увеличивает переменную на единицу,
                        // а затем записывает полученное значение в переменную c
d = b++; console.log(d); // 1 - постфиксный инкримент после переменной b, поэтому сначала значение
                        // из переменной b запишится в d, а потом сначение переменной b увеличиться на единицу
c = (2+ ++a); console.log(c); // 5 - префиксный инкримент, поэтому a увеличиться на единицу и прибавиться к 2
d = (2+ b++); console.log(d); // 4 - постфиксный инкримент, поэтому сначала исходное значение b сложиться с 2, и запишится
                            // в c, а потом b увеличится на единицу
console.log(a); // 3 - исходное значение было 1, потом было два инкримента
console.log(b); // 3 - исходное значение было 1, потом было два инкримента


// задание 2
a = 2; // объявляем переменную a, и записываем в неё значение 2
let x = 1 + (a *= 2); // выражение a *= 2, является сокращением выражения a = a * 2, поэтому x = 1 + a * 2 = 5

// задание 3
// Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
// Затем написать скрипт, который работает по следующему принципу:
// - если a и b положительные, вывести их разность;
// - если а и b отрицательные, вывести их произведение;
// - если а и b разных знаков, вывести их сумму;
// ноль можно считать положительным числом.
a = Math.random() * 100 - 50;
a = parseInt(a);
b = Math.random() * 100 - 50;
b = +b.toFixed(0);
console.log(`a = ${a}, b = ${b}`);
if ((a >= 0) && (b >= 0)) {
    console.log(a - b)
} else if ((a < 0) && (b < 0)) {
    console.log(a * b)
} else { // если a и b оба не положительные и оба не отрицательные, значит они разных знаков (не поняла, в чем сложность задания)
    console.log(a + b)
}

// задание 4
// Присвоить переменной а значение в промежутке [0..15].
// С помощью оператора switch организовать вывод чисел от a до 15.
let f = parseInt(Math.random() * 16);
console.log(`f = ${f}`);
switch (f) {
    case 0:
        console.log(0 + ', ');
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);
}

// задание 5
// Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
// Обязательно использовать оператор return.
/**
 * Function add two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number} a + b
 */
function sum(a, b) {
    return a + b
}

/**
 * Function extract two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number} a - b
 */
function minus(a, b) {
    return a - b
}

/**
 * Function multiply two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number} a * b
 */
function mult(a, b) {
    return a * b
}

/**
 * Function divide a by b.
 * If b = 0, it will give error message in console.
 * @param {number} a
 * @param {number} b must not be equal of 0
 * @returns {number} a / b
 */
function div(a, b) {
    if (!b) {
        console.log('Делить на НОЛЬ нельзя');
    } else {
        return a / b
    }
}
console.log('sum(5, 3) = ' + sum(5, 3));
console.log('minus(10, 7) = ' + minus(10, 7));
console.log('mult(5, 5) = ' + mult(5, 5));
console.log('div(25, 5) = ' + div(25, 5));
console.log('div(25, 0) = ' + div(25, 0));

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции.
// В зависимости от переданного значения операции выполнить одну из арифметических операций
// (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
/**
 * Function operate with 2 numbers. Result depends from operation.
 * Using 4 external functions: sum(a,b), minus(a,b), mult(a,b) and div(a,b)
 * @param {number} arg1 - any number
 * @param {number} arg2 - any number (in case operation 'div' must not be 0)
 * @param {string} operation - 'sum','minus','mult','div'
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum':
            return sum(arg1, arg2);
        case 'minus':
            return minus(arg1, arg2);
        case 'mult':
            return mult(arg1, arg2);
        case 'div':
            return div(arg1, arg2);
        default:
            console.log('Пожалуйста выберете одну из следующийх операций: sum, minus, mult, div');
    }
}
console.log("mathOperation(6, 3, 'sum') = ", mathOperation(6, 3, 'sum'));
console.log("mathOperation(6, 3, 'minus') = ", mathOperation(6, 3, 'minus'));
console.log("mathOperation(6, 3, 'mult') = ", mathOperation(6, 3, 'mult'));
console.log("mathOperation(6, 3, 'div') = ", mathOperation(6, 3, 'div'));
console.log("mathOperation(6, 0, 'div') = ", mathOperation(6, 0, 'div'));

// 7. * Сравнить null и 0. Попробуйте объяснить результат.
console.log("null == 0 ", null == 0); // false - при сравнении >= или <= null интерпретируется как 0, в остальныйх случаях
console.log("null === 0 ", null === 0); // false этой интерпретации не происходит
console.log("null >= 0 ", null >= 0); // true
console.log("null <= 0 ", null <= 0); // true
console.log("null > 0 ", null > 0); // false
console.log("null < 0 ", null < 0); // false
console.log("null != 0 ", null != 0); // true
console.log("null !== 0 ", null !== 0); // true
console.log("null + 0 ", null + 0); // 0
console.log("null - 0 ", null - 0); // 0
console.log("null * 0 ", null * 0); // 0
console.log("null / 0 ", null / 0); // NaN


// 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow),
// где val – заданное число, pow – степень.
function power(val, pow) {
    if (pow == 0) {
        return 1
    } else if (pow == 1) {
        return val
    } else {
        return val * power(val,--pow)
    }
}
console.log("power(val, pow) = ", power(2, 8));

// 6**. (Сложное задание, требует времени и возможно гугления, делайте по желанию.) Программа должна спросить у пользователя число, это будет количество денег, которое он хочет положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
// "Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
// "Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
// "Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
// То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного числа.
alert('<<< Welcome to LuckyBank >>>');
let minDeposit = 100;
let depositSum = prompt(`Введите сумму для пополнения счета (мин сумма ${minDeposit})?`);
// проверяем если введенная сумма меньше минимальной
if (depositSum < minDeposit) {
    alert(`Вы ввели сумму меньше ${minDeposit} рублей`)
} else {
    // сначала отделяем последние 2 цифры
    let lastTwoDigits = depositSum.slice(depositSum.length - 2, depositSum.length);
    console.log(lastTwoDigits);
    // проверяем если они лежат в диапазоне от 11 до 19
    let rightFormWord = '';
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        // если ДА, то склонение будет 'рублей'
        rightFormWord = 'рублей';
    } else {
        // отделяем последнюю цифру
        let lastDigit = Number(depositSum[depositSum.length - 1]);
        console.log(lastDigit);
        rightFormWord = '';
        switch (lastDigit) {
            case 0:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                rightFormWord = "рублей";
                break;
            case 1:
                rightFormWord = "рубль";
                break;
            case 2:
            case 3:
            case 4:
                rightFormWord = "рубля";
        }
    }
    alert(`Ваша сумма в ${depositSum} ${rightFormWord} успешно зачислена`);
}