class Monk extends Character {
    constructor(name = "Moana", hp = 8, dmg = 2, mana = 200, status = "playing", specialAttack = "Heal") {
        super(name, hp, dmg, mana, status);
        this.specialAttack = specialAttack
    }

    heal = () => {
        this.hp += 8;
        this.mana -= 25;
    }
}