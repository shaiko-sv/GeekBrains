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
        let arrowLeft = document.createElement('div');
        arrowLeft.innerHTML = '<i class="arrow fas fa-chevron-left"></i>';
        arrowLeft.id = 'left';
        wrapper.appendChild(arrowLeft);
        let imageMain = document.createElement('img');
        imageMain.id = 'main';
        imageMain.src = 'img/gallery/'+this.mainImage+'.jpg';
        wrapper.appendChild(imageMain);
        let arrowRight = document.createElement('div');
        arrowRight.innerHTML = '<i class="arrow fas fa-chevron-right"></i>';
        arrowRight.id = 'right';
        wrapper.appendChild(arrowRight);
    },
    rouletteClickListener () {
        let mainImg = document.querySelector('#main');
        let b = mainImg.src.split('/');
        let src = b[b.length-3] + '/' + b[b.length-2] + '/' + b[b.length-1]
        let roulette = document.querySelector('#roulette');
        let rouletteImages = roulette.getElementsByTagName('img');
        for (let i = 0; i < rouletteImages.length; i++) {
            rouletteImages[i].addEventListener('click', function(event) {
                roulette.querySelectorAll('img').forEach(function(img)
                    {if (img.id == 'active')
                        {img.id = ''}});
                event.target.id = 'active';
                mainImg.src = event.target.src;
                }
            )
        }
    },
    rouletteDraw () {
        let roulette = document.querySelector('#roulette');
        let number = this.rouletteImageNumber;
        let nodeStr = '';

        for (let i = 1; i <= number; i++) {
            nodeStr += `<img src="img/gallery/${i}.jpg"`
            if (i == this.mainImage) {
                nodeStr += 'id = "active">';
            } else {
                nodeStr += '>';
            }
        }
        roulette.innerHTML = nodeStr;
    },
    arrowsEventListener() {
        let arrows = document.getElementsByClassName('arrow');
        for (let i = 0; i < arrows.length; i++) {
            arrows[i].addEventListener('click', function (event) {
                console.dir(event);
                if (event.path[1].id == 'left') {
                    gallery.changeImage(event.path[1].id);
                    console.log('left');
                } else if (event.path[1].id == 'right') {
                    gallery.changeImage(event.path[1].id);
                    console.log('right');
                }
            })
        }
     },
    changeImage(side) {
        if (side == 'left') {
            if (this.mainImage == 1) {
                this.mainImage = this.rouletteImageNumber;
            } else {
                this.mainImage--;
            }
        } else if (side = 'right') {
            if (this.mainImage == 8) {
                this.mainImage = 1;
            } else {
                this.mainImage++;
            }
        }
        let wrapperImg = document.getElementById('main');
        wrapperImg.src = 'img/gallery/'+this.mainImage+'.jpg';
        console.log(this.mainImage);
        let rouletteImgActive = document.getElementById('active');
        rouletteImgActive.id = '';
        let rouletteImages = document.getElementById('roulette').getElementsByTagName('img')[this.mainImage-1].id = 'active';
    },
};

function galleryDraw() {
    gallery.htmlCode();
    gallery.rouletteDraw();
    gallery.rouletteClickListener();
    gallery.arrowsEventListener();
}

galleryDraw();