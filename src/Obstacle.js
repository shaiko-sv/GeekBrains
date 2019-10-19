class Obstacle {
    constructor() {
        this.x = null;
        this.y = null;
        this.life = null;
    }

    /**
     * Метод получает другие игровые объекты, которые нужны ему
     * для работы.
     * @param {Settings} settings объект настроек
     * @param {Snake} snake объект змейки
     * @param {Board} board объект игрового поля
     */
    init(settings, snake, board, food) {
        this.settings = settings;
        this.snake = snake;
        this.board = board;
        this.food = food;
    }

    /**
     * Метод устанавливает новое случайное положение еды на игровом
     * поле.
     */
    setNewObstacle() {
        const coords = this.generateRandomCoordinates();
        this.life = Math.floor(Math.random() * 10 + 5);
        this.board.renderObstacle(coords);
    }

    /**
     * Метод устанавливает на игровом поле еду по текущим
     * координатам.
     */
    setObstacle() {
        if (this.life--) {
            let cell = this.board.getCellEl(this.x, this.y);
            this.board.renderObstacle(cell);
        } else {
            this.setNewObstacle();
        }
    }
    /**
     * Метод получает ссылку на тег td, где можно расположить еду
     * @returns {HTMLTableCellElement} тег td
     */
    generateRandomCoordinates() {
        while (true) {
            this.x = Math.floor(Math.random() * this.settings.colsCount + 1);
            this.y = Math.floor(Math.random() * this.settings.rowsCount + 1);
            let cell = this.board.getCellEl(this.x, this.y);

            if (cell.classList.contains('snakeBody')) {
                continue;
            }
            if (cell.classList.contains('food')) {
                continue;
            }
            return cell;
        }
    }
}