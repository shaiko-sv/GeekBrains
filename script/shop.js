"use strict";

// 2. Реализовать собственный каталог товаров
// Реализация по принципу ООП
const IDS = [1,2,3,4];
const ITEMS = ['milk','bread','juice','cheese'];
const PRICES = [5, 2, 10, 15];
const DESCRIPTION = ['Это вкусное и полездное молоко.\nЖирность 3,2%\nОбъем: 1 л',
    'Белый хлеб кирпич\nСостав: пшеничная мука, дрожжи пекарские.\nВес: 450 гр',
    'Апельсиновый сок\nСок из натуральных апельсин.\nОбъем: 1 л',
    'Сыр эмменталь\nСыр с крупными глазками. Импортный\nЦена за 1 кг.'];
let shop = {
    catalog: [],
    cart: [],
    cartSum: 0,
    cartProd: 0,

    /**
     *  Метод герерации каталога
     */
    createCatalog: function () {
        for (let i = 0; i < ITEMS.length; i++) {
            this.catalog.push(this._createProduct(IDS[i], ITEMS[i], PRICES[i], DESCRIPTION[i]))
        }
    },

    /**
     * Какая-то там функция :) возвращает объект продукт
     * @param id - код продукта
     * @param name - название продукта
     * @param price - цена продукта
     * @param description - описание продукта
     * @returns {{id: *, name: *, price: *, description: *}}
     * @private
     */
    _createProduct: function(id, name, price, description) {
        return {
            id: id,
            name: name,
            price: price,
            img: `img/catalog/${name}.jpg`,
            description: description,
        }
    },

    /**
     * метод подсчета суммы продуктов в корзине и общее кол-во единиц продукта
     */
    cartCalcSum () {
        let sum = 0;
        let quantity = 0;
        this.cart.forEach(function(prod) {
                sum += prod.productToBuy.price * prod.quantity;
                quantity += prod.quantity;
            }
        );
        this.cartSum = sum;
        this.cartProd = quantity;
        console.log(this.cartProd, this.cartSum);
    },

    drawCatalog() {
        // creating catalog 'div'
        let catalogElem = document.createElement('div');
        catalogElem.classList.add('catalog');
        document.body.appendChild(catalogElem);
        this.catalog.forEach(function(product) {
            // creating product card 'div'
            let productElem = document.createElement('div');
            productElem.classList.add('product');
            catalogElem.appendChild(productElem);
                //adding name of product
                let productNameElem = document.createElement('p');
                productNameElem.classList.add('productName');
                productElem.appendChild(productNameElem);
                productNameElem.innerText = product.name;
                //adding code of product
                let productIDElem = document.createElement('p');
                productIDElem.classList.add('productID');
                productElem.appendChild(productIDElem);
                productIDElem.innerText = 'Code: ' + product.id;
                // adding image of product
                let productImgElem = document.createElement('img');
                productImgElem.src = product.img;
                productImgElem.alt = product.name;
                productImgElem.style.display = 'block';
                productElem.appendChild(productImgElem);
                // adding product description
                let productDescElem = document.createElement('p');
                productDescElem.classList.add('productDescription');
                productDescElem.innerText = 'Описание:\n' + product.description;
                productDescElem.style.display = 'none';
                productElem.appendChild(productDescElem);
                // adding price of product
                let productPriceElem = document.createElement('p');
                productPriceElem.innerText = 'Цена: ' + product.price + '$';
                productElem.appendChild(productPriceElem);
                // adding button MORE
                let productBtnMore = document.createElement('button');
                productBtnMore.innerText = 'Подробнее';
                productElem.appendChild(productBtnMore);
                // adding button BUY
                let productBtnBuy = document.createElement('button');
                productBtnBuy.innerText = 'Купить';
                productElem.appendChild(productBtnBuy);
        })
    },

    catalogListener () {
      let catalogElem = document.getElementsByClassName('catalog')[0];
      catalogElem.addEventListener('click', function (event) {
          let productName = event.target.parentElement.childNodes[0].innerHTML;
          let quantity = 0;
          if (event.target.innerText == 'Подробнее') {
              event.target.innerText = 'Скрыть';
              event.path[1].children[2].style.display = 'none';
              event.path[1].children[3].style.display = 'block';
          } else if (event.target.innerText === 'Скрыть') {
              event.target.innerText = 'Подробнее';
              event.path[1].children[3].style.display = 'none';
              event.path[1].children[2].style.display = 'block';
          } else if (event.target.innerText === 'Купить') {
              let productToBuy = shop.catalog.find(prod => prod.name === productName);
              shop.addProductCart(productToBuy, productName);
              shop.cartCalcSum();
              shop.cartUpdate();
              shop.cartDrawing();
          }
      })
    },

    /**
     * Метод добавления продукта в корзину
     * @param productToBuy - объект продукта для добавления в корзину
     * @param productName - имя продукта, для выяснения, если данный продукт уже есть в корзине
     */
    addProductCart: function (productToBuy, productName) {
        if (this._cartProductAdd(productToBuy, productName)) {
            this.cart.push(this._cartProductAdd(productToBuy, productName))
        }
    },

    /**
     * Субметод для добавления продукта в корзину
     * @param productToBuy - продукт который нужно добавить
     * @param productName - название продукта
     * @returns {*} - возвращает объект с кол-вом 1, если продукта ещё нет в корзине
     * @private или увеличивает кол-во продукта на 1, если продукт уже в корзине
     */
    _cartProductAdd: function (productToBuy, productName) {
        let quantity = 0;
        if (shop.cart.find(prod => prod.productToBuy.name === productName)) {
            shop.cart.find(prod => prod.productToBuy.name === productName).quantity++;
            return false;
        } else {
            quantity++;
            return {
                productToBuy: productToBuy,
                quantity: quantity,
            }
        }
    },
    cartBtnDrawing () {
        let cartBtn = document.createElement('button');
        cartBtn.classList.add('cartBtn');
        cartBtn.setAttribute('id', 'cart');
        cartBtn.innerHTML = ('<img src="img/Shopping-basket-02.png" width="35px">');
        document.body.appendChild(cartBtn);
        let cartProdQuantity = document.createElement("p");
        cartProdQuantity.innerText = (`(${this.cartProd})`);
        let cartPic = cartBtn.querySelector('img');
        cartPic.parentNode.insertBefore(cartProdQuantity, cartPic.nextSibling);
        cartBtn.addEventListener('click', this.cartEventListener);
    },

    cartUpdate () {
        let cartBtn = document.getElementsByClassName('cartBtn');
        let prodQuant = cartBtn[0].querySelector('p');
        prodQuant.innerText = `(${this.cartProd})`;
    },

    cartDrawing() {
        let htmlCode = '';
        htmlCode += '<tr><th>ID</th><th>PRODUCT NAME</th><th>PRICE</th><th>PICTURE</th><th>AMOUNT</th></tr>';
        shop.cart.forEach(function (prod) {
            htmlCode += '<tr>';
            for (let key in prod.productToBuy) {
                if (key === 'img') {
                    htmlCode += `<td><img src="${prod.productToBuy[key]}" height="30px"></td>`;
                } else if (key === 'description') {
                    continue;
                } else {
                htmlCode += `<td>${prod.productToBuy[key]}</td>`;
                };
            }
            htmlCode += `<td>${prod.quantity}</td>`;
            htmlCode += '</tr>';
        });
        htmlCode += `<tr><td colspan="4">TOTAL:</td><td>${this.cartSum}</td></tr>`;
        if (document.getElementsByTagName('table')[0]) {
            let cartElem = document.getElementsByClassName('cartTable')[0]
            cartElem.innerHTML = htmlCode;
        } else {
            let cartElem = document.createElement('table');
            cartElem.innerHTML = htmlCode;
            cartElem.classList.add('cartTable');
            document.body.appendChild(cartElem);
            cartElem.style.display = 'none';
        }
    },

    cartListener () {
        let cartBtnElem = document.getElementsByClassName('cartBtn')[0];
        let catalogElem = document.getElementsByClassName('catalog')[0];
        let cartElem = document.getElementsByClassName('cartTable')[0];
        cartBtnElem.addEventListener('click', function (event) {
            console.log(event);
            if (event.path[0].localName == 'img') {
                if (event.path[1].id == 'cart') {
                    event.path[1].innerHTML = 'Назад';
                    event.path[1].id = 'catalog';
                    catalogElem.style.display = 'none';
                    cartElem.style.display = 'block';
                }
            } else if (event.path[0].id == 'cart') {
                event.path[0].innerHTML = 'Назад';
                event.path[1].id = 'catalog';
                catalogElem.style.display = 'none';
                cartElem.style.display = 'block';
            } else {
                cartBtnElem.innerHTML = (`<img src="img/Shopping-basket-02.png" width="35px"><p>(${shop.cartProd})</p>`);
                event.target.id = 'cart';
                cartElem.style.display = 'none';
                catalogElem.style.display = 'grid';

            }
        })
    },
};

shop.createCatalog();
shop.cartBtnDrawing ();
shop.drawCatalog();
shop.cartDrawing();
shop.catalogListener();
shop.cartListener();
