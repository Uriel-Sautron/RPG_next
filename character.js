class Character {
    constructor(name, hp, dmg, mana, status = "playing", specialActiveted = false) {
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
        this.status = status;
        this.specialActiveted = specialActiveted;
    }

    takeDamage = enemy => {
        if (this.protect === true) {
            dmgReceived -= 2
        }
        console.log(`${enemy.name} is attacking ${this.name}. He deals him ${enemy.dmg} damages`);
        this.hp -= enemy.dmg;
        if (this.hp <= 0) {
            this.status = "loser";
            console.log(`++++++++++ ${this.name} is dead !! ++++++++++`);
        }
    }

    dealDamage = victim => {
        victim.takeDamage(this)
        if (victim.status === "loser") {
            this.mana += 20;
        }
    }
}