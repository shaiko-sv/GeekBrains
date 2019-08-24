// 1. Дан код:
let a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 сначала выполняется префикс ++a (a = a + 1), затем присвоение
d = b++; alert(d);           // 1 сначала выполняется присвоение, затем постфикстый инкремент b (b=b+1)
c = (2+ ++a); alert(c);      // 5 сначала a увеличится на один, затем значение прибавиться к 2
d = (2+ b++); alert(d);      // 4 сначала b прибавиться к 2, затем b увеличистя на один
alert(a);                    // 3 см. выше
alert(b);                    // 3 см. выше
// Почему код даёт именно такие результаты?

// 2. Чему будет равен x в примере ниже?
a = 2;
let x = 1 + (a *= 2); // = 1 + (a = a * 2) = 1 + (a = 2 * 2) = 1 + 4 = 5
console.log("x = ", x);
// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
a = Math.round(Math.random()*200-100); console.log('a='+a);
b = Math.round(Math.random()*200-100); console.log('b='+b);
// Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
if (a>=0 && b>=0)
    alert (a - b);
// если а и b отрицательные, вывести их произведение;
else if (a<0 && b<0)
    alert (a * b);
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
else
    alert (a + b);
// ### 4. Присвоить переменной а значение в промежутке [0..15].
a = Math.round(Math.random()*15);
alert (a);
// С помощью оператора switch организовать вывод чисел от a до 15.
switch (a) {
    case 1:
        console.log (1);
    case 2:
        console.log (2);
    case 3:
        console.log (3);
    case 4:
        console.log (4);
    case 5:
        console.log (5);
    case 6:
        console.log (6);
    case 7:
        console.log (7);
    case 8:
        console.log (8);
    case 9:
        console.log (9);
    case 10:
        console.log (10);
    case 11:
        console.log (11);
    case 12:
        console.log (12);
    case 13:
        console.log (13);
    case 14:
        console.log (14);
    case 15:
        console.log (15);
}
// ### 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
function sum(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}
function mult (a, b) {
    return a * b;
}
function divid (a, b) {
    if(!b) {
        console.log("На ноль делить нельзя!");
        return;
    }
    return a / b;
}
console.log (sum(5, 7));
console.log (minus(5, 7));
console.log (mult(5, 7));
console.log (divid(5, 7));

// ### 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return sum(arg1, arg2);
        case "-":
            return minus(arg1, arg2);
        case "*":
            return mult(arg1, arg2);
        case "/":
            return divid(arg1, arg2);
    }
}
console.log (mathOperation(9, 3, "+"));
console.log (mathOperation(9, 3, "-"));
console.log (mathOperation(9, 3, "*"));
console.log (mathOperation(9, 3, "/"));
// ### 7) *Сравнить null и 0. Попробуйте объяснить результат.
console.log ("typeof null", typeof (null));
console.log ("typeof 0", typeof (0));
console.log ("==", null == 0); //false
console.log ("!=", null != 0); //true
console.log ("===", null === 0); //false
console.log ("!==", null !== 0); //true
console.log (">", null > 0); //false
console.log ("<", null < 0); //false
console.log (">=", null >= 0); //true
console.log ("<=", null <= 0); //true
// хорошее объяснение по ссылке https://learn.javascript.ru/comparison
// ### 8) *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
function power(val, pow) {
    let result;
    val = parseInt(val);
    pow = parseInt(pow);
    if (pow === 0) {
        return 1;
    }
    else if (pow === 1) {
        return val;
    }
    return val * power(val, --pow);
}
console.log ("power(2,64) = ", power(2,64));