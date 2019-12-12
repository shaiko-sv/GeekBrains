Vue.component('cart', {
    data() {
        return {
            cartUrl: `/getBasket.json`,
            imgCart: `https://placehold.it/50x100`,
            showCart: false,
            cartItems: [],
        }
    },
    methods: {
        addProduct(product){
            this.$parent.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    console.log(data);
                    if (data.result) {
                        let find = this.cartItems.find(el => el.id_product === product.id_product);
                        if (find) {
                            find.quantity++;
                        } else {
                            let prod = Object.assign({quantity: 1}, product);
                            this.cartItems.push(prod);
                        }
                    }
                })},

        remove(cartItem){
            let find = this.cartItems.find(el => el.id_product === cartItem.id_product);
            if(find.quantity > 1){
                find.quantity--;
            } else {
                this.cartItems.splice(this.cartItems.indexOf(find), 1);
            }
        },
    },
    mounted() {
        this.$parent.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for(let el of data.contents){
                    this.cartItems.push(el);
                }
            });
    },
    template: `<div>
                    <button
                        @click="showCart = !showCart"
                        class="btn-cart"
                        type="button">Корзина</button>
                    <div class="cart-block" v-show="showCart">
                    <p v-if="cartItems.length === 0">Добавьте товар...</p>
                    <cart-item
                        v-for="cartItem of cartItems"
                        :key="cartItem.id_product"
                        :cart-item="cartItem"
                        :img="imgCart"
                        @remove="remove"></cart-item>
                    </div>
                </div>`,
});

Vue.component('cart-item', {
    props: ['cartItem', 'img'],
    template: `<div class="cart-item">
                    <div class="product-bio">
                        <img :src="img" :alt="cartItem.product_name">
                        <div class="product-desc">
                            <p class="product-title">{{ cartItem.product_name }}</p>
                            <p class="product-quantity">Quantity: {{ cartItem.quantity }}</p>
                            <p class="product-single-price">{{cartItem.price}} each</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">{{+cartItem.quantity*cartItem.price}}</p>
                        <button class="del-btn" @click="$emit('remove', cartItem)">&times;</button>
                    </div>
                </div>`,
});