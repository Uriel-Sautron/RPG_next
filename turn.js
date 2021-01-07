class Turn {

    constructor(characters) {
        this.characters = characters
        this.startTurn()
    }

    startTurn = () => {
        this.characters.forEach(player => {
            if (player.status !== "loser") {
                console.log(`It's time for ${player.name} to play`);
                let actionFigth = true
                do {
                    actionFigth = true
                    console.log("########## Action ##########")
                    console.log("1 - Fight")
                    console.log("2 - Enemies Status")
                    console.log(`3 - ${player.specialAttack}`)
                    console.log("* - Kill You")
                    let playerAction = prompt(`${player.name}, choose your action`)
                    switch (playerAction) {

                        case "1":
                            this.oneTurn(player, this.characters);
                            break;

                        case "2":
                            console.log("########## Enemies Info ##########")
                            this.enemyStatus(player, this.characters);
                            actionFigth = false;
                            break;

                        case "*":
                            player.status = "loser"
                            break;


                        default:
                            console.log("Choose a valid action");
                            actionFigth = false;
                    }
                }
                while (!actionFigth);
            }
        })

        console.clear();
    }

    enemyStatus = (player, allCharacters) => {
        const victims = allCharacters.filter(char => char !== player)
        victims.forEach(victim => console.log(`${victims.indexOf(victim) + 1} - ${victim.name}: ${victim.constructor.name} - ${victim.hp}HP - ${victim.mana}Mana - ${victim.dmg}DMG`))
    }

    oneTurn = (player, characters) => {
        console.log("########## Choose your victim ##########")
        let victims = characters.filter(char => char !== player)
        victims.forEach(victim => console.log(`${victims.indexOf(victim) + 1} - ${victim.name}`))
        let isValid = true
        do {
            isValid = true
            let playerVictim = prompt(`${player.name}, choose your victim`)
            let victim = victims[parseInt(playerVictim) - 1]
            if (!victim) {
                console.log("Invalid choice, try again");
                isValid = false
            } else if (victim.status === 'loser') {
                console.log(`Sorry, ${victim.name} is already dead, choose another victim`);
                isValid = false
            } else {
                player.dealDamage(victim)
            }
        }
        while (!isValid)
    }
}