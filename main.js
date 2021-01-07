const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const game = new Game()
const characters = game.initializeCharacter();
let i = 0;
while (i < game.turn && game.status !== "finish") {
    const charactersAlive = game.checkAlive(characters)
    game.newTurn();
    game.turnLeft(i);
    const orderChar = shuffleArray(charactersAlive);
    new Turn(orderChar);
    const charactersEndGame = game.checkAlive(charactersAlive);
    game.endGame(charactersEndGame);
    i++;
}