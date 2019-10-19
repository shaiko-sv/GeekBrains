class Game {
    constructor() {
        this.tickIdentifier = null;
        this.messageEl = document.getElementById('message');
    }

    init(settings, status, board, snake, menu, obstacle, food,) {
        this.settings = settings;
        this.status = status;
        this.board = board;
        this.snake = snake;
        this.menu = menu;
        this.obstacle = obstacle;
        this.food = food;
    }

    /**
     * Метод назначает обработчики на события клика на кнопки "Старт",
     * "Пауза", а также на стрелки на клавиатуре.
     */
    run() {
        this.menu.addButtonsClickListeners(this.start.bind(this), this.pause.bind(this), this.newGame.bind(this));
        document.addEventListener('keydown', this.pressKeyHandler.bind(this));
    }

    /**
     * Метод запускает игру.
     */
    start() {
        console.log(this);
         if(this.status.isPaused()) {
             this.status.setPlaying();
             this.tickIdentifier = setInterval(this.doTick.bind(this), 1000 / this.settings.speed)
         }
    }

    /**
     * Метод ставит игру на паузу
     */
    pause() {
        console.log(this);
        if (this.status.isPlaying()) {
            this.status.setPaused();
            clearInterval(this.tickIdentifier);
        }
    }

    newGame() {
        console.log(this);
        location.reload();
    }

    /**
     * Этот метод запускается каждую секунду и осуществляет:
     * 1. перемещение змейки
     * 2. проверяет проиграна/выиграна ли игра
     * 3. увеличивает размер змейки если она ест еду
     * 4. заново отрисовывает положение змейки и еды
     */
    doTick() {

        this.snake.writeStep(this.snake.performStep());
        this.isWall();
        if (this.isGameLost()) {
            return;
        };
        this.board.clearBoard();
        this.food.setFood();
        this.obstacle.setObstacle();
        this.board.renderSnake();
        this.setMessage(`Счет: ${this.snake.body.length}`); //Выводим счет
        if (this.board.isHeadOnFood()) {
            this.snake.increaseBody();
            this.food.setNewFood();
        };
        if (this.isGameWon()) {
            return;
        };
    }

    /**
     * Метод проверяет проиграна ли игра, останавливает игру
     * в случае проигрыша, выводит сообщение о проигрыше.
     * @returns {boolean} если мы шагнули в стену, тогда true,
     * иначе false.
     */
    isGameLost() {
        if (this.board.isNextStepToSnake(this.snake.body[0])) {
            clearInterval(this.tickIdentifier);
            this.setMessage('Вы проиграли');
            return true;
        }
        if (this.board.isNextStepToObstacle(this.snake.body[0])) {
            clearInterval(this.tickIdentifier);
            this.setMessage('Вы проиграли');
            return true;
        }
        return false;
    }

    /**
     * Метод проверяет выиграна ли игра, останавливает игру,
     * выводит сообщение о выигрыше.
     * @returns {boolean} если длина змейки достигла длины нужной
     * для выигрыша, тогда true, иначе false.
     */
    isGameWon() {
        if (this.snake.body.length == this.settings.winLength) {
            clearInterval(this.tickIdentifier);
            this.setMessage('Вы выиграли');
            return true;
        }
        return false;
    }

    isWall() {
        if (this.board.isNextStepToWall(this.snake.body[0])) {
            if (this.snake.direction == 'down') {
                this.snake.body[0].y = 1
            }
            if (this.snake.direction == 'right') {
                this.snake.body[0].x = 1
            }
            if (this.snake.direction == 'up') {
                this.snake.body[0].y = this.settings.rowsCount
            }
            if (this.snake.direction == 'left') {
                this.snake.body[0].x = this.settings.colsCount
            }
            console.log('wall');
            console.log(this.snake.direction);
            console.log(this.snake.body[0]);
        }
        console.log('free');
        console.log(this.snake.direction);
        console.log(this.snake.body[0]);
    }

    pressKeyHandler(event) {
        switch (event.key) {
            case 'ArrowUp':
                this.snake.changeDirection('up');
                break;
            case 'ArrowDown':
                this.snake.changeDirection('down');
                break;
            case 'ArrowLeft':
                this.snake.changeDirection('left');
                break;
            case 'ArrowRight':
                this.snake.changeDirection('right');
                break;
        }
    }

    /**
     * Метод выводит сообщение на странице.
     * @param {string} text
     */
    setMessage(text) {
        this.messageEl.innerText = text;
    }
}