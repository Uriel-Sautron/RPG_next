class Assassin extends Character {
    constructor(name = "Carl", hp = 6, dmg = 6, mana = 20, status = "playing", specialAttack = "Shadow Hit", specialActiveted = false, assassinMark = false, markOfCain = false) {
        super(name, hp, dmg, mana, status, specialActiveted);
        this.specialAttack = specialAttack
        this.assassinMark = assassinMark
        this.markOfCain = markOfCain
    }

    special = victim => {
        this.assassinMark = victim
        this.mana -= 20;
        console.log(`========== Special of ${this.name} ==========`);
        console.log("");
        console.log(`${this.name} touches ${victim.name} and imposes his mark on her`)
        console.log(`${this.name} loses -20Mana`);
    }

    shadowHit = victim => {
        if (victim.status !== "loser") {
            let dmgReceived = 7;
            if (victim.protect === true) {
                dmgReceived -= 2
            }
            victim.hp -= dmgReceived;
            this.markOfCain = true;
            console.log(`========== In the shadows ${this.name} attack ==========`);
            console.log("");
            console.log(`${this.name} is attacking ${victim.name}. He deals him ${dmgReceived} damages`)
            console.log(`${this.name} is the Mark of Cain`)
                // lors du prochain tour ne prends pas de dmg
            if (victim.hp > 0) {
                this.hp -= 7

            }
        } else {
            this.markOfCain = true;
            console.log(`${this.name} is the Mark of Cain`)
        }

        this.assassinMark = false
    }
}