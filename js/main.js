 const products = [
     {id: 1, title: 'Notebook', price: 2000},
     {id: 2, title: 'Mouse', price: 30},
     {id: 3, title: 'Keyboard', price: 55},
     {id: 4, title: 'Gamepad', price: 65},
     {id: 5, title: 'Chair', price: 120},
 ];
 const renderProduct = (title, price = 'Out of stock', img = `https://placehold.it/200x150`) => {
     return `<div class="product-item">
                  <img src="${img}" alt="${title}">
                  <div class="desc">
                      <h3>${title}</h3>
                      <p>${price}</p>
                      <button class="buy-btn">Купить</button>
                  </div>
              </div>`
 };
 const renderPage = list => {
     for (let item of list) {
         document.querySelector('.products').insertAdjacentHTML('beforeend', renderProduct(item.title, item.price))
     }
     // document.querySelector('.products').innerHTML = list.map(item => renderProduct(item.title, item.price)).join('');
 };

 renderPage(products);