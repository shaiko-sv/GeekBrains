const board = {
    map: [],
    colLetters: 'abcdefgh',
    /**
     * Метод обновляет положение фигур
     * маленькие буквы это черные фигуры
     * большие букуы это белые фигуры
     */
    init() {
        this.map = [  'xllllllllx',
                      'Nrhbqkbhrn',
                      'Nppppppppn',
                      'NXXXXXXXXn',
                      'NXXXXXXXXn',
                      'NXXXXXXXXn',
                      'NXXXXXXXXn',
                      'NPPPPPPPPn',
                      'NRHBQKBHRn',
                      'xLLLLLLLLx'
            ]
    },
    /**
     * Метод рисует шахматную доску
     */
    draw () {
        let board = document.createElement('div');
        board.setAttribute('class', 'board');
        document.body.appendChild(board);
        let square = '';
        for(let row = 0; row < 10; row ++) {
            let rowElem = document.createElement('div');
            if (row == 0 || row == 9) {
                rowElem.setAttribute('class', 'rowNarrow');
            } else {
                rowElem.setAttribute('class', 'row');
            }
            board.appendChild(rowElem);
            for(let col = 0; col < 10; col ++) {
                let colElem = document.createElement('div');
                square = this.map[row][col];
                switch (square) {
                    case 'x':
                        colElem.setAttribute('class', 'empty');
                        break;
                    case 'l':
                        colElem.setAttribute('class', 'letter');
                        colElem.classList.add('rotate');
                        colElem.innerText = this.colLetters[col-1];
                        break;
                    case 'L':
                        colElem.setAttribute('class', 'letter');
                        colElem.innerText = this.colLetters[col-1];
                        break;
                    case 'n':
                        colElem.setAttribute('class', 'number');
                        colElem.classList.add('rotate');
                        colElem.innerText = row;
                        break;
                    case 'N':
                        colElem.setAttribute('class', 'number');
                        colElem.innerText = row;
                        break;
                    default:
                        if (row%2 === 0) {
                            if (col%2 === 0) {
                                colElem.setAttribute('class', 'white');
                            } else {
                                colElem.setAttribute('class', 'black');
                            }
                        } else {
                            if (col%2 !==0) {
                                colElem.setAttribute('class', 'white');
                            } else {
                                colElem.setAttribute('class', 'black');
                            }
                        }
                        if (this.map[row][col] !== 'X') {
                            colElem.innerText = this.map[row][col];
                        }
                        if (this.map[row][col] >= 'a' && this.map[row][col] <= 'x' ) {
                            colElem.classList.add('blackFigure');
                        } else {
                            colElem.classList.add('whiteFigure');
                        }
                }
                if (row == 1 && (col > 0 && col < 9)) {
                    colElem.classList.add('borderTop');
                }
                if (row == 8 && (col > 0 && col < 9)) {
                    colElem.classList.add('borderBottom');
                }
                if (col == 1 && (row >0 && row < 9)) {
                    colElem.classList.add('borderLeft')
                }
                if (col == 8 && (row >0 && row < 9)) {
                    colElem.classList.add('borderRight')
                }
                rowElem.appendChild(colElem);
            }
        }
    }
};

function chessBoard () {
    board.init();
    board.draw();
}
