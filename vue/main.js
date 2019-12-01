"use stict"

const app = new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'https://google.com',
        completeEl: '<a href="https://google.com">Google.com</a>',
        counter: 0,
        counterSecond: 0,
        x: 0,
        y: 0,
        name: 'John',
        name2: 'Tom',

    },
    computed: {
        output(){
            console.log('computed');
            return this.counterSecond < 5 ? 'Less than 5' : 'Greater than 5';
        }
    },
    methods: {
        sayHello(){
            this.title = 'Foo';
            return this.title;
        },
        increase(step, event){
            this.counter += step;
            console.log(event);
            
        },
        getCoordinates(){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        result(){
            console.log('method');
            return this.counter < 5 ? 'Less than 5' : 'Greater than 5';
        }
    },
    
})