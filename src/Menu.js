class Menu {
    constructor() {
        this.startBtnEl = document.getElementById('startBtn');
        this.pauseBtnEl = document.getElementById('pauseBtn');
        this.newGameBtnEl = document.getElementById('newGameBtn');
    }

    /**
     * Метод назначает переданные функции в качестве обработчиков
     * событий клика на кнопки "Старт" и "Пауза".
     * @param {Function} startBtnClickHandler
     * @param {Function} pauseBtnClickHandler
     * @param {Function} newGameBtnClickHandler
     */
    addButtonsClickListeners(startBtnClickHandler, pauseBtnClickHandler, newGameBtnClickHandler) {
        this.startBtnEl.addEventListener('click', startBtnClickHandler);
        this.pauseBtnEl.addEventListener('click', pauseBtnClickHandler);
        this.newGameBtnEl.addEventListener('click', newGameBtnClickHandler);
    }


}