class Paladin extends Character {
    constructor(hp = 16, dmg = 3, mana = 160) {
        super(hp, dmg, mana);
    }

    healingLighting = () => {
        this.dmg = 4;
        this.hp += 5;
        this.mana -= 40;
    }
}