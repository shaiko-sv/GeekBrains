"use strict";

// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100 (правильно в промежутке от 2 до 100)
console.log('Задание 1');

let x = 2, simpleNumbers = [];
while (x <= 100) {
    let controlNumber = x / 2, simple = true;
    for (let i = 2; i < controlNumber + 1; i++) {
        if (x % i === 0 && x !== 2) {
            simple = false;
            break;
        }
    }
    if (simple) {
         simpleNumbers.push(x);
    }
    x++;
}
console.log(simpleNumbers);

// 2. Начиная с этого урока, мы начинаем работать с функционалом интернет-магазина.
// Предположим, что у нас есть сущность корзины.
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// Товары в корзине хранятся в массиве.
// 2.1. Организуйте такой массив для хранения товаров в корзине
console.log('Задание 2');
let productInCart = [{'name': 'Product1', 'quantity': 2, 'price': 5},
                     {'name': 'Product2', 'quantity': 1, 'price': 10},
                     {'name': 'Product3', 'quantity': 3, 'price': 15}];
// 2.2. Организуйте функцию countBasketPrice, которая будет считать стоимость корзины.
function countBasketPrice (productInCart) {
    let cartAmount = 0;
    for(let product of productInCart) {
        cartAmount += (product.quantity * product.price);
    }
    return cartAmount;
}

console.log('Стоимость корзины: ' + countBasketPrice(productInCart));

// 3. *Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла. То есть выглядеть должно вот так:
// for(…){// здесь пусто}
console.log('Задание 3');
for (let i = 0; i < 10; console.log(i++)) {

}
// 4. * Нарисовать пирамиду с помощью console.log, как показано на рисунке,
// только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx
console.log('Задание 4');
for (let i = 1; i <= 20; i++) {
    let j = i, x = '';
    while (j) {
        x += 'x';
        j--;
    }
    console.log(x);
}

// Дополнительные задания
console.log('Задание 5.2');
// С помощью цикла for написать алгоритм для вывода чисел от 0 до 10 включительно, чтобы результат выглядел так:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 == 0) {
        console.log(`${i} - четное число`);
    } else {
        console.log(`${i} - нечетное число`);
    }
}

console.log('Задание 5.3');
// Выведите в консоль значения, указанные рядом с комментариями:
    const post = {
        author: "John", //вывести этот текст
        postId: 23,
        comments: [
            {
                userId: 10,
                userName: "Alex",
                text: "lorem ipsum",
                rating:{
                    likes: 10,
                    dislikes: 2 //вывести это число
                }
            },
            {
                userId: 5, //вывести это число
                userName: "Jane",
                text: "lorem ipsum 2", //вывести этот текст
                rating: {
                    likes: 3,
                    dislikes: 1
                }
            },
        ]
    }
console.log(post.author); // "John"
console.log(post.comments[0].rating.dislikes); // 2
console.log(post.comments[1].userId); // 5
console.log(post.comments[1].text); // "lorem ipsum 2"


console.log('Задание 5.4');
// Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 15%,
// можете использовать метод forEach https://mzl.la/1AOMMWX :
    const products1 = [
        {
            id: 3,
            price: 200,
        },
        {
            id: 4,
            price: 900,
        },
        {
            id: 1,
            price: 1000,
        },
    ];
    products1.forEach(function (element) {
       element.price = element.price - element.price * 15 / 100
           console.log(element)

    });

console.log('Задание 5.5');
// Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
//      1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
//      2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort https://mzl.la/2Y79hbZ
    const products2 = [
        {
            id: 3,
            price: 127,
            photos: [
                "1.jpg",
                "2.jpg",
            ]
        },
        {
            id: 5,
            price: 499,
            photos: []
        },
        {
            id: 10,
            price: 26,
            photos: [
                "3.jpg"
            ]
        },
        {
            id: 8,
            price: 78,
        },
    ];

    let productsWithPictureProperties = [];
    // сначала находим все товары у которых есть свойство photos
    for (let product of products2) {
        if (Object.getOwnPropertyNames(product).includes('photos')) {
            productsWithPictureProperties.push(product);
        }
    }
    // затем находим товары у которых есто свойство не пустое
    let productsWithPicture = productsWithPictureProperties.filter(product => product.photos.length > 0 );

    console.log(productsWithPicture);

    products2.sort(function (a, b) {
        if (a.price > b.price) {
            return 1;
        }
        if (a.price < b.price) {
            return -1;
        }
        return 0;
    });

    console.log(products2);

console.log('Задание 5.6');
// (По желанию, т.к. такая особенность практически не используется)
// Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла.
// То есть выглядеть должно примерно так:
    for(let i = 0; i <= 9; console.log(i++)){/* здесь пусто */};

console.log('Задание 5.7');
// Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
//    только у вашей горки должно быть 20 рядов, а не 5:
//x
//xx
//xxx
//xxxx
//xxxxx
for (let i = 1; i <= 20; i++) {
    let j = i, x = '';
    while (j) {
        x += 'x';
        j--;
    }
    console.log(x);
}