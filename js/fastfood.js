"use strict";

const burgerTest = ['big', 'salad', true, true];

class Burger {
    constructor(size, fill, spice = false, mayonese = false) {
        this.size = size;
        this.fill = fill;
        this.spice = spice;
        this.mayonese = mayonese;
        this.data = [
            {type: 'size', name: 'small', price: 50, cal: 20},
            {type: 'size', name: 'big', price: 100, cal: 40},
            {type: 'fill', name: 'cheese', price: 10, cal: 20},
            {type: 'fill', name: 'salad', price: 20, cal: 5},
            {type: 'fill', name: 'potato', price: 15, cal: 10},
            {type: 'additive', name: 'spice', price: 15, cal: 0},
            {type: 'additive', name: 'mayonese', price: 20, cal: 5},
        ];
        this.burgerContent = [];
        this.price = 0;
        this.calories = 0;
        this.init();
    }

    init(){
        function sizeCheck() {
            let sizes = document.querySelectorAll("input[name='size']");
            sizes.forEach(item => {
                if (item.checked == true) {
                    return item.value;
                    continue;
                }
            });
        }
        function fillCheck() {
            let fills = document.querySelectorAll("input[name='fill']");
            fills.forEach(item => {
                if (item.checked == true) {
                    return item.value;
                    continue;
                }
            });
        }
        function additivesCheck() {
            let spice = document.querySelector("input[name='spice']");
            if (spice.checked = true) {

            }
            let mayonese = document.querySelector("input[name='mayonese']");
            if (spice.checked = true) {

            }
        }
        for(let item of this.data) {
            if (item.type == 'size' && item.name == this.size) {
                this.burgerContent.push(item)
            }
            if (item.type == 'fill' && item.name == this.fill) {
                this.burgerContent.push(item)
            }
            if (item.name == 'spice' && this.spice == true) {
                this.burgerContent.push(item)
            }
            if (item.name == 'mayonese' && this.mayonese == true) {
                this.burgerContent.push(item)
            }
        };
        console.log(`Size: ${this.size}`);
        console.log(`Fill: ${this.fill}`);
        console.log(`Spice: ${this.spice}`);
        console.log(`Mayonese: ${this.mayonese}`);
        this._priceKcalCalc();
        console.log(`Price: ${this.price}`);
        console.log(`Calories: ${this.calories}`);
    }

    _priceKcalCalc() {
        this.burgerContent.forEach(item => {
            this.price += item.price;
            this.calories += item.cal;
        })
    }
}

function run() {
    const burgerOne = new Burger(...burgerTest);
}

class Food {
    constructor(name) {
        this.name = name;
    }
    init(){
        return 'Food.init()'
    }
    kcalCalc(){
        return 'Food.kacCalc()';
    }
}

class Milk extends Food {
    constructor(name, group) {
        super(name);
        this.group = group;
    }
}
