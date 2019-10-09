"use strict";
// !!!Задание с предыдущего урока!!!

// 3. Практикум. Угадай число (БЕЗ ЦИКЛОВ) - рекурсия
//     Напишем первую игру — «Угадай число». Браузер будет загадывать случайное четырехзначное число, а мы будем отгадывать.
//     Попытки отгадать число будут идти через диалоговое окно — prompt.
//          Браузер будет сообщать в ответ, больше или меньше загаданного наш ответ.
//     Алгоритм будет таким:
function gameNumber() {
//  Браузер генерирует число и приглашает пользователя к игре.
    let randomNumber = Math.round(Math.random()*10000);
    console.log(randomNumber);
    console.log('Добро пожаловать в игру "Угадай число"\n Я загадал 4-х значное число...\nЧтобы прикратить игру введите stop');
    let counter = 0;
    checkResult(randomNumber, counter);
}

function checkResult(number, count) {
//     Выводится окно запроса предположения.
    let answer = prompt('Какое число я загадал?');
    count ++;
    //     Браузер проверяет число и возвращает результат.
    if (answer == 'stop' || answer == 'STOP' || answer == 'Stop') {
        console.log('Вы прервали игру...');
        return count
    } else if(number == answer) {
//     Повторяем до тех пор, пока число не будет угадано.
        console.log('Вы угадали! Число попыток ' + count);
//     Как только число угадано, браузер сбрасывает число попыток и генерирует новое число.
        gameNumber();
    } else if(number > answer) {
        console.log('Попытка ' + count + '. ' + answer + '. Больше...');
        checkResult(number, count);
    } else if(number < answer) {
        console.log('Попытка ' + count + '. ' + answer + '. Мешьше...');
        checkResult(number, count);
    }
}

//  Пока не будем ничего выводить на страницу. И пока наш алгоритм далек от совершенства. Как только изучим новые возможности языка — сразу улучшим его.
gameNumber();

// Задания к уроку 4!!!

// 1. Написать функцию, преобразующую число в объект.
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
// в котором в соответствующих свойствах описаны единицы, десятки и сотни.
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

let number;
while (true) {
    number = prompt('Введите число от 0 до 999');
    if (isNaN(number) || number === '') {
        alert('Пожалуйста введите число');
    } else {
        break;
    }
}

function numberParts(number) {
    let result = {};
    let keys = ['сотни', 'десятки', 'единицы'];
    let k = 0;
    if (number.length == 1) {
        k = 2
    } else if (number.length == 2) {
        k = 1
    }
    if (number > 999) {
        console.log('число больше, чем 999');
        return
    } else {
        for(let i = number.length - 1; i >= 0; i--) {
            let key = keys[i + k];
            result[key] = number[i];
        }
    }
    return result
}

console.log(numberParts(number));

// 2. Реализовать собственный каталог товаров
// Реализация по принципу ООП
const IDS = [1,2,3,4];
const ITEMS = ['milk','bread','juice','cheese'];
const PRICES = [5, 2, 10, 15];
let shop = {
    catalog: [],
    cart: [],
    cartSum: 0,
    /**
     *  Метод герерации каталога
     */
    createCatalog: function () {
        for (let i = 0; i < ITEMS.length; i++) {
            this.catalog.push(this._createProduct(IDS[i], ITEMS[i], PRICES[i]))
        }
    },
    /**
     * Какая-то там функция :) возвращает объект продукт
     * @param id - код продукта
     * @param name - название продукта
     * @param price - цена продукта
     * @returns {{id: *, name: *, price: *}}
     * @private
     */
    _createProduct: function(id, name, price) {
        return {
            id: id,
            name: name,
            price: price,
        }
    },
    /**
     * метод подсчета суммы продуктов в корзине
     */
    cartCalcSum: function () {
        for (let i = 0; i < this.cart.length; i++) {
            this.cartSum += this.cart[i].quantity * this.cart[i].product.price;
        }
    },
    /**
     * Метод генерации корзины
     */
    createCart: function () {
        for (let i = 0; i < this.catalog.length; i++) {
            this.cart.push(this._cartProductAdd(i))
        }
    },
    /**
     * Суб метод. Возвращает объект (продукт и кол-во)
     * @param id - код продукта
     * @param quantity - кол-во случайное от 1 до 10
     * @returns {{product: *, quantity: number}}
     * @private
     */
    _cartProductAdd: function (id, quantity=Math.round(Math.random()*10)) {
        return {
            product: this.catalog[(id)],
            quantity: quantity,
        }
    }
};

shop.createCatalog();

shop.createCart();

shop.cartCalcSum();
console.log(shop.catalog);
console.log(shop.cart);
console.log(shop.cartSum);


// 3. Доделать игру Камень-Ножницы-Бумага

// Используем принцип ООП

//КАМЕНЬ, НОЖНИЦЫ, БУМАГА
// 1 - камень
// 2 - ножницы
// 3 - бумага

let game = {
    choiceAvailable: {1:'камень', 2:'ножницы', 3:'бумага'},
    moveResultLegend: {1:'Вы победили', 2:'Ничья', 3:'Вы проиграли'},
    moveCount: 0,
    moveData: [],
    score: {player:0, PC:0},
    choicePC: [],
    choicePlayer: [],
    /**
     * Метод запуска игры
     * После очередного хода вывод сообщение о результате игры
     */
    gameStart: function () {
        alert('Добро пожаловать в игру "Камень-Ножницы-Будага"');
        let playerName = prompt('Введите Ваше имя:');
        while(true) {
            this.move();
            this.moveResult();
            if (prompt('Продолжить - 1, Закончить - 2') == 2) {
                alert(playerName + ', Вы сыграли: ' + this.moveCount + ' раз(а).\nСчёт: (Вы) ' + this.score.player + ' - ' + this.score.PC + ' (PC)');
                break;
            }
        }
    },
    /**
     * Метод генерации выбора ПК
     * @returns {number} - случайное число от 1 до 3
     */
    movePC: function () {
        let PC = Math.floor(Math.random () * 3) + 1;
        return PC;
    },
    /**
     * Метод для ввода выбора игрока
     * @returns {number} - выбор игрока число от 1 до 3
     */
    movePlayer: function () {
        let me = +prompt ('1 - камень \n2 - ножницы \n3 - бумага');
        return me;
    },
    /**
     * Метод записи выбора игрока и ПК
     * @returns {*[]} - возвращает массив из двух чисел
     * @private
     */
    _moveRecord: function () {

        return [this.movePlayer(), this.movePC()]
    },
    /**
     * Метод увеличивает счетчик шагов на 1 и записывает результат игры в массив истории игры.
     */
    move: function f() {
        this.moveCount++;
        //this.moveData.push({[this.moveCount]: this._moveRecord()});
        this.moveData.push(this._moveRecord());
    },
    /**
     * Метод определяет исход очередной игры и изменяет значение счета
     * @returns {number} - возвращает номер результата
     */
    moveResult: function () {
        let result;
        let me = this.moveData[this.moveCount-1][0];
        let PC = this.moveData[this.moveCount-1][1];
        if ((me === 1 && PC === 2) || (me === 2 && PC === 3) || (me === 3 && PC === 1)) {
            result = 1;
            this.score.player++;
            console.log ('Вы победили! :)\nВы ' + this.choiceAvailable[me] + ', а компьютер ' + this.choiceAvailable[PC]);
        } else if (me === PC) {
            result = 2;
            console.log ('НИЧЬЯ :O\nВы ' + this.choiceAvailable[me] + ', а компьютер ' + this.choiceAvailable[PC]);
        } else {
            result = 3;
            this.score.PC++;
            console.log ('Вы проиграли :(\nВы ' + this.choiceAvailable[me] + ', а компьютер ' + this.choiceAvailable[PC]);
        }
        return result;
    }

}
game.gameStart();



