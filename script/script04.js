function convertNum (num) {
    var convertedNum = {sot:null, des:null, ed:null};
    convertedNum.ed = num % 10;
    num = (num - convertedNum.ed) / 10;
    convertedNum.des = num % 10;
    num = (num - convertedNum.des) / 10;
    convertedNum.sot = num;
    return convertedNum;
}
console.log('Задание 1');
var num, ok, convertedNum;
do {
    ok = false;
    num = +prompt('Введите число от 0 до 999');
    if (num > 0 && num < 999) {
        ok = true;
    }
} while(!ok);
convertedNum = convertNum(num);
console.log(convertedNum);
for (var i in convertedNum) {
    console.log(i+": "+convertedNum[i]);
}
