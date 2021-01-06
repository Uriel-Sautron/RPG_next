class Monk extends Character {
    constructor(name = "Moana", hp = 8, dmg = 2, mana = 200) {
        super(name, hp, dmg, mana, status);
    }

    heal() {
        this.hp += 8;
        this.mana -= 25;
    }
}