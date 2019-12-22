Vue.component('products', {
    data() {
        return {
            catalogUrl: `/catalogData.json`,
            products: [],
            allProducts: [],
            imgCatalog: `https://placehold.it/200x150`,
            filtered: [],
        }
    },
    methods: {
        filter(value){
            if(!value) {
                this.products = [...this.allProducts];
            } else {
                this.products = [];
                let regexp = new RegExp(value, 'i');
                this.filtered = this.allProducts.filter(el => regexp.test(el.product_name));
                this.allProducts.forEach(el => {
                    if(this.filtered.includes(el)){
                        this.products.push(el)
                    }
                })
            }
        },
    },
    mounted() {
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.allProducts.push(el);
                }
            })
    },
    template: `<div class="products">
            <product
            v-for="product of products"
            :key="product.id_product"
            :product="product"
            :img="imgCatalog"></product>
        </div>`,
});

Vue.component('product', {
    props: ['product', 'img'],
    template: `<div class="product-item">
                <img :src="img" :alt="product.product_name">
                <div class="desc">
                    <h3>{{ product.product_name }}</h3>
                    <p>{{ product.price }}</p>
                    <button class="buy-btn"
                            @click="$root.$refs.cart.addProduct(product)">Купить</button>
                </div>
            </div>`,
})