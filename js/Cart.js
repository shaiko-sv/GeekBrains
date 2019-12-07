class Cart {
    constructor(container = '.cart'){
        this.empty = ''; // сообщение пустой корзины
        this.data = ''; // данные полученные с сервера
        this.cartProducts = []; // массив продуктов в корзине
        this.container = container;
    }
    init() {} // метод для инициализации корзины
    _getProducts() {} // метод получения продуктов корзины с сервера
    _calc(){} // метод подсчета стоимости товаров в корзине
    _render(){} // метод для отрисовки корзины
    addProduct(product) {} // метод добавления продукта в корзину
    delProduct(product) {} // метод удаления продукта из корзины
}