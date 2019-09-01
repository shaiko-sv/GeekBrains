//creating chess border script
var chessBorderSize = 440; //border size
var chessBorder = document.createElement('div'); //creating border using div
//adding style for border
chessBorder.style.width = chessBorderSize + 'px'; //width in px
chessBorder.style.height = chessBorderSize + 'px'; //height in px
chessBorder.style.border = "1px solid black"; //border style
document.body.appendChild(chessBorder);
var textBorderSize = 20; //size of text border area
var playingAreaSize = chessBorderSize - textBorderSize * 2; //calculating playing area
var squareSize = playingAreaSize / 8; //calculating square size
var nameGenerator;
var lineHorizontal = '0876543210';
var lineVertical = '*abcdefgh*';
var cheeseBorderMap = ['RNBQKBNR','PPPPPPPP','********','********','********','********','pppppppp','rnbqkbnr'];
var squareName;
var textSize = '1rem';
var figureSize = '2rem';
var k = '&#9812';// ♔	White King	    U+2654
var q = '&#9813';// ♕	White Queen	    U+2655
var r = '&#9814';// ♖	White Rook	    U+2656
var b = '&#9815';// ♗	White Bishop	U+2657
var n = '&#9816';// ♘	White Knight	U+2658
var p = '&#9817';// ♙	White Pawn	    U+2659
var K = '&#9818';// ♚	Black King	    U+265A
var Q = '&#9819';// ♛	Black Queen	    U+265B
var R = '&#9820';// ♜	Black Rook	    U+265C
var B = '&#9821';// ♝	Black Bishop	U+265D
var N = '&#9822';// ♞	Black Knight	U+265E
var P = '&#9823';// ♟	Black Pawn	    U+265F
for (var i in lineHorizontal) {
    //console.log('i='+lineHorizontal[i]);
    for (var j in lineVertical) {
        squareName = lineVertical[j]+lineHorizontal[i];
        //console.log('j='+lineVertical[j]);
        nameGenerator = 'square'+i+j;
        //console.log(nameGenerator);
        nameGenerator = document.createElement('div'); // creating square of board
        if (squareName == '*0') {
            nameGenerator.style.width = textBorderSize + 'px'; //width in px
            nameGenerator.style.height = textBorderSize + 'px'; //height in px
        } else if (squareName[1] == 0) {
            nameGenerator.style.width = squareSize + 'px'; //width in px
            nameGenerator.style.height = textBorderSize + 'px'; //height in px
            nameGenerator.innerText = lineVertical[j];
            // nameGenerator.style.textAlign = 'center';
            nameGenerator.style.fontSize = textSize;
            if (i==0) {
                nameGenerator.style.transform = 'rotate(180deg)';
            }
        } else if (squareName[0] == '*') {
            nameGenerator.style.width = textBorderSize + 'px'; //width in px
            nameGenerator.style.height = squareSize + 'px'; //height in px
            nameGenerator.innerText = lineHorizontal[i];
            nameGenerator.style.fontSize = textSize;
            if (j==9) {
                nameGenerator.style.transform = 'rotate(180deg)';
            }
        } else {
            nameGenerator.style.width = squareSize + 'px'; //width in px
            nameGenerator.style.height = squareSize + 'px'; //height in px
            nameGenerator.style.fontSize = figureSize; //размер фигур
            if ((i % 2 === 0 && j % 2 !== 0) || (i % 2 !== 0 && j % 2 === 0)) {
                nameGenerator.style.backgroundColor = 'black';
                nameGenerator.style.textShadow = '0 0 4px white, 0 0 0 white';
            }
            if (i == 1 && j % 2 !== 0) {
                nameGenerator.style.borderTop = "1px solid black"; //outline style
                nameGenerator.style.boxSizing = 'border-box';
            }
            if (i == 8 && j % 2 == 0) {
                nameGenerator.style.borderBottom = "1px solid black"; //outline style
                nameGenerator.style.boxSizing = 'border-box';
            }
            if (j == 1) {
                nameGenerator.style.borderLeft = "1px solid black"; //outline style
                nameGenerator.style.boxSizing = 'border-box';
            }
            if (j == 8) {
                nameGenerator.style.borderRight = "1px solid black"; //outline style
                nameGenerator.style.boxSizing = 'border-box';
            }
            if (cheeseBorderMap[i-1][j-1] != '*') {
                nameGenerator.innerHTML = eval(cheeseBorderMap[i-1][j-1]);
            }
        }
        nameGenerator.style.cssFloat = 'left';
        nameGenerator.style.display = 'flex';
        nameGenerator.style.justifyContent = 'center';
        nameGenerator.style.alignItems = 'center';
        nameGenerator.classList.add(squareName);
        chessBorder.appendChild(nameGenerator);
    }
}


