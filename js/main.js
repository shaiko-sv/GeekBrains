const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const products = new ProductsList();
const cart = new Cart();
const chat = new Chat();

const chatVue = new Vue({
    el: '#app',
    data: {
        isShow: true,
    },
})