class Paladin extends Character {
    constructor(name = "Ulder", hp = 16, dmg = 3, mana = 160) {
        super(name, hp, dmg, mana, status);
    }

    healingLighting() {
        this.dmg = 4;
        this.hp += 5;
        this.mana -= 40;
    }
}