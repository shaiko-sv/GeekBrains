var imgSrc, idSpic;
var pictures = ['hp_01.jpg','hp_02.jpg','hp_03.jpg'];
function showBigPicture(event) {
    imgSrc = event.target.currentSrc.split('\\').pop().split('/').pop();
    console.log(imgSrc);
    idSpic = 'sPic'+ pictures.indexOf(imgSrc);
    console.log(idSpic);
    if (activePicture.id !== idSpic) {
        activePicture.style.outline = 'none';
        activePicture = document.getElementById(idSpic); //выбираем первый элемент активным
        activePicture.style.outline = '2px solid blue';
        bigPicture.src = 'img/big/'+imgSrc;
    }
}
function errorBigImg(event) {
    imgSrc = event.target.currentSrc.split('\\').pop().split('/').pop();
    console.log(imgSrc);
    alert('Не найден большой вариант картинки '+imgSrc+ '!');
}
var gallery = document.getElementById('task1');
var bigPicture = document.createElement('img');
bigPicture.className = 'bigPicture';
bigPicture.src = 'img/big/'+pictures[0];
bigPicture.onerror = errorBigImg;
gallery.appendChild(bigPicture);

var smallPictures = document.createElement('div');
smallPictures.className = 'smallPictures';
gallery.appendChild(bigPicture);
gallery.appendChild(smallPictures);
var smallPicture;
for (var i in pictures) {
    smallPicture = document.createElement("img");
    smallPicture.src = 'img/small/'+pictures[i];
    smallPicture.className = 'smallPicture';
    smallPicture.id = 'sPic'+i;
    smallPicture.onclick = showBigPicture;
    smallPictures.appendChild(smallPicture);
}
activePicture = document.getElementById('sPic0'); //выбираем первый элемент активным
activePicture.style.outline = '2px solid blue';
idSpic = activePicture.id;
idSpic = idSpic[idSpic.length-1];

//задание 2
class product {
    constructor(id, name, price, photo) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.photo = photo
    }
}

var product1 = new product(1, 'ice cream', 10, 'ice_cream.jpg');
var product2 = new product(2, 'cheese cake', 15, 'cheese_cake.jpg');
var product3 = new product(3, 'pop corn', 5, 'pop_corn.jpg');
var products = [product1, product2, product3];

var cart = document.getElementById('cart');
console.log(goods, cart);
console.log(good);

var goods = document.getElementById('goods');
var good;
var productName, photo, price, priceValue;
for (var i = 0; i < products.length; i++){
    good = document.createElement('div');
    good.className = 'good';
    productName = document.createElement("p");
    productName.className = 'productName';
    productName.innerText = products[i].name;
    photo = document.createElement("img");
    photo.className = 'goodPhoto';
    photo.src = 'img/products/'+products[i].photo;
    price = document.createElement('p');
    price.className = 'goodPrice';
    priceValue = document.createTextNode(products[i].price);
    goods.appendChild(good);
    good.appendChild(photo);
    good.appendChild(productName);
    good.appendChild(price);
    price.appendChild(priceValue);
}

