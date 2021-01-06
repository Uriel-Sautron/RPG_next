class Character {
    constructor(name, hp, dmg, mana, status = "playing") {
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
        this.status = status;
    }

    takeDamage(enemy) {
        this.hp -= enemy.dmg;
        if (this.hp <= 0) {
            this.status = "loser";
            console.log(this);
        }
    }

    dealDamage(victim) {
        victim.takeDamage(this)
        if (victim.status === "loser") {
            this.mana += 20;
        }
    }
}