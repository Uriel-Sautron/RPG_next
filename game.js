class Game {
    constructor(turn = 10, status = "ongoing") {
        this.turn = turn
        this.status = status
    }

    initializeCharacter = () => {
        const initCharacters = [
            new Paladin(),
            new Berzerker(),
            new Assassin(),
            new Monk(),
            new Fighter()
        ]
        return initCharacters
    }

    turnLeft = (i) => {
        console.log(`********** Round ${i + 1} **********`);
        console.log(`Remaining Turn: ${this.turn}`);
    }

    newTurn = () => {
        this.turn--;
    }

    endGame = (array) => {
        if (this.turn === 0 || array.length <= 1) {
            this.status = "finish";
            console.log("Game Over");
            const survivors = this.checkAlive(array)
            console.log("########## Survivors ##########")
            console.log(survivors.forEach(char => char.name))
        }
    }

    checkAlive = checkCharacters => {
        return checkCharacters.filter(char => char.status !== "loser");
    }

}