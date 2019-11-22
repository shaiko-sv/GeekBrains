"use strict";

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

/*let getRequest = (url, cb) => {
    let xhr = new XMLHttpRequest();
    // window.ActiveXObject -> xhr = new ActiveXObject();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if (xhr.status !== 200){
                console.log('error');
            } else {
                cb(xhr.responseText)
            }
        }
    }
};*/

class List {
    constructor(url, container) {
        this.container = container;
        this.url = url;
        this.data = [];
        this.allProducts = [];
        this._init()
    }

    getJson(url) {
        return fetch(url ? url : `${API + this.url}`)
            .then(result => result.json())
            .catch(error => console.log(error));
    }

    handleData(data) {
        this.data = [...data];
        this.render();
    }
    calcSum(){
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    getItem(id) {
        return this.allProducts.find(elem => elem.id_product === id);
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.data) {
            const prod = new listRef[this.constructor.name](product);
            this.allProducts.push(prod);
            block.insertAdjacentHTML('beforeend', prod.render());
        }
    }
    _init(){
        return false;
    }
}

class Item {
    constructor(elem, img = `https://placehold.it/150x100`) {
        this.product_name = elem.product_name;
        this.price = elem.price;
        this.id_product = elem.id_product;
        this.img = img
    }
    render() {
        return `<div class="product-item">
                <img class="product-img" src="${this.img}" alt="${this.product_name}">
                <div class="desc">
                    <h3>${this.product_name}</h3>
                    <p>${this.price} &#36</p>
                    <button class="buy-btn" data-id="${this.id_product}">Купить</button>
                </div>
            </div>`
    }
}

class ProductsList extends List{
    constructor(cart, url = '/catalogData.json', container = '.products') {
        super(url, container);
        this.cart = cart;
        this.getJson()
            .then(data => this.handleData(data));

    }
    _init() {
        document.querySelector(this.container).addEventListener('click', event => {
            if(event.target.classList.contains('buy-btn')){
                let id = +event.target.dataset['id'];
                cart.addProductToCart(this.getItem(id))
            }
        })
    }
}

class ProductItem extends Item{}

class Cart extends List{
    constructor(url = '/getBasket.json', container = '.cart-block') {
        super(url, container);
        this.getJson()
            .then(data => this.handleData(data.contents));
    }

    /**
     * Method returns total sum of cart
     * @returns {number}
     */
    calcTotalOfCart() {
        return this.data.amount;
    }
    addProductToCart(product) {
        this.getJson(`${API}/addToBasket.json`)
            .then(data => {
                if(data.result) {
                    let find = this.allProducts.find(el => el.id_product === product.id_product);
                    if(find){
                        find.quantity++;
                        this._updateCart(find);
                    } else {
                        let prod = Object.assign({quantity: 1}, product);
                        this.data = [prod];
                        this.render();
                    }
                } else {
                    console.log('Error!');
                }
        })
    }

    deleteProductFromCart(element) {
        this.getJson(`${API}/deleteFromBasket.json`)
            .then(data => {
                if(data.result){
                    let id = +element.dataset['id'];
                    let find = this.allProducts.find(el => el.id_product === id);
                    if(find.quantity > 1){
                        find.quantity--;
                        this._updateCart(find);
                    } else {
                        this.allProducts.splice(this.allProducts.indexOf(find), 1);
                        document.querySelector(`.cart-item[data-id="${id}"]`).remove();
                    }
                } else {
                    console.log('Error!');
                }
            })
    }
    _updateCart(product){
        let block = document.querySelector(`.cart-item[data-id="${product.id_product}"]`);
        block.querySelector('.product-quantity').textContent = `Quantity: ${product.quantity}`;
        block.querySelector('.product-price').textContent = `$${product.quantity*product.price}`;
    }
     _init() {
        document.querySelector(this.container).addEventListener('click', event => {
            if(event.target.classList.contains('del-btn')){
                this.deleteProductFromCart(event.target);
            }
        });
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('invisible');
        })
    }
}

class CartItem extends Item {
    constructor(el, img = `https://placehold.it/50x100`) {
        super(el, img);
        this.quantity = el.quantity;
    }

    render() {
        return `<div class="cart-item" data-id="${this.id_product}">
                    <div class="product-bio">
                        <img src="${this.img}" alt="Some image">
                        <div class="product-desc">
                            <p class="product-title">${this.product_name}</p>
                            <p class="product-quantity">Quantity: ${this.quantity}</p>
                            <p class="product-single-price">$${this.price} each</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">$${this.quantity*this.price}</p>
                        <button class="del-btn" data-id="${this.id_product}">&times;</button>
                    </div>
                </div>`
    }
}

let listRef = {
    ProductsList: ProductItem,
    Cart: CartItem,
}
const cart = new Cart();
const products = new ProductsList(cart);
products.getJson(`getProducts.json`)
    .then(data => products.handleData(data));
