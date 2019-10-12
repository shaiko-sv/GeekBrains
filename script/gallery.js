const gallery = {
    mainImage: '1',
    rouletteImageNumber: 8,
    htmlCode () {
        let galleryMain = document.createElement('div');
        galleryMain.id = 'gallery';
        document.body.appendChild(galleryMain);
        let wrapper = document.createElement('div');
        wrapper.id = 'wrapper';
        galleryMain.appendChild(wrapper);
        let roulette = document.createElement('div');
        roulette.id = 'roulette';
        galleryMain.appendChild(roulette);
        let imageMain = document.createElement('img');
        imageMain.id = 'main';
        imageMain.src = 'img/gallery/'+this.mainImage+'.jpg';
        wrapper.appendChild(imageMain);
    },
    rouletteClickListener () {
        let roulette = document.querySelector('#roulette');
        let rouletteImages = roulette.getElementsByTagName('img');
        for (let i = 0; i < rouletteImages.length; i++) {
            rouletteImages[i].addEventListener('click', function(event) {
                alert('change image');
                console.dir(event);
                }
            )
        }
    },
    rouletteDraw () {
        let roulette = document.querySelector('#roulette');
        let number = this.rouletteImageNumber;
        let nodeStr = '';

        for (let i = 1; i <= number; i++) {
            nodeStr += `<img src="img/gallery/${i}.jpg">`
        }
        roulette.innerHTML = nodeStr;
    },
};

function galleryDraw() {
    gallery.htmlCode();
    gallery.rouletteDraw();
    gallery.rouletteClickListener();
}