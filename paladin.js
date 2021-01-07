class Paladin extends Character {
    constructor(name = "Ulder", hp = 16, dmg = 3, mana = 160, status = "playing", specialAttack = "Healing Lighting") {
        super(name, hp, dmg, mana, status);
        this.specialAttack = specialAttack
    }

    healingLighting = victim => {
        victim.hp -= 4;
        this.hp += 5;
        this.mana -= 40;
    }

}