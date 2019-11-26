const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: `/catalogData.json`,
        products: [],
        allProducts: [],
        imgCatalog: `https://placehold.it/200x150`,
        imgCart: `https://placehold.it/50x100`,
        show: false,
        cartProducts: [],
        filtered: [],
        value: '',
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error))
        },
        addProduct(product){
            let find = this.cartProducts.find(el => el.id_product === product.id_product);
            if(find){
                find.quantity++;
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.cartProducts.push(prod);
            }
        },
        removeProduct(cartItem){
            let find = this.cartProducts.find(el => el.id_product === cartItem.id_product);
            if(find.quantity > 1){
                find.quantity--;
            } else {
                this.cartProducts.splice(this.cartProducts.indexOf(find), 1);
            }
        },
        filter(value){
            if(!value) {
                this.products = [...this.allProducts];
            } else {
                this.products = [];
                const regexp = new RegExp(value, 'i');
                this.filtered = this.allProducts.filter(el => regexp.test(el.product_name));
                console.log(this.filtered);
                this.allProducts.forEach(el => {
                    if(this.filtered.includes(el)){
                        this.products.push(el)
                    }
                })
            }
            console.log(this.products);
        }
    },
    mounted(){
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.allProducts.push(el);
                }
            });
        this.getJson(`getProducts.json`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.allProducts.push(el);
                }
            });
    }
});