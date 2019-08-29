var event, eventFull, ok;
var answerHistory = [], stepNumber;

do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
        eventFull = 'works.a'+event;
        answerHistory.push([works.a00, eval(eventFull)]);
    }
} while (!ok);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
                eventFull = 'works.b'+event;
                answerHistory.push([works.b00, eval(eventFull)]);
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        eventFull = 'works.d'+event;
                        answerHistory.push([works.d00, eval(eventFull)]);
                    }
                } while (!ok);

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        eventFull = 'works.d'+event;
                        answerHistory.push([works.d00, eval(eventFull)]);
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
                eventFull = 'works.c'+event;
                answerHistory.push([works.c00, eval(eventFull)]);
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        eventFull = 'works.d'+event;
                        answerHistory.push([works.d00, eval(eventFull)]);
                    }
                } while (!ok);

                break;
            case 2: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        eventFull = 'works.d'+event;
                        answerHistory.push([works.d00, eval(eventFull)]);
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
do {
    ok = false;
    event = +prompt('Хотите просмотреть историю ответов? 1 - Да / 2 - Нет');
    if (event == 1) {
        stepNumber = +prompt('Введите номер хода в диапазоне от 1 до ' + answerHistory.length);
        alert('На '+stepNumber+' ходе на вопрос: '+answerHistory[stepNumber-1][0]+'\n Вы ответили: '+answerHistory[stepNumber-1][1])
    }
    else if (event == 2) {
        break;
    }
    else {
        ok = isAnswer(2, event);
    }
} while (!ok);

alert('Спасибо за игру');
for(var i in answerHistory) {
    console.log(answerHistory[i][0]+"\n"+answerHistory[i][1]);
}


//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}

