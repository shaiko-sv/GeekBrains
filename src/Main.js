'use strict';

window.addEventListener('load', () => {
    const settings = new Settings();
    const status = new Status();
    const snake = new Snake();
    const board = new Board();
    const food = new Food();
    const obstacle = new Obstacle();
    const menu = new Menu();
    const game = new Game();

    settings.init({rowsCount: 10, colsCount: 10, speed: 4, winLength: 10});
    board.init(settings, snake);
    food.init(settings, snake, board, obstacle);
    obstacle.init(settings, snake, board, food);
    game.init(settings, status, board, snake, menu, obstacle, food);

    board.renderBoard();
    board.renderSnake();
    food.setNewFood();
    obstacle.setNewObstacle();

    game.run();
});